import { randomUUID } from 'node:crypto';

import { DatabaseService } from '../../services/index.js';
import { buildRoutePathUtil } from '../../utilities/index.js';

const databaseService = new DatabaseService();

export const tasksRoute = [
  {
    method: 'POST',
    url: buildRoutePathUtil('/tasks'),
    handler: (request, response) => {
      const { title, description } = request.body;

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date(),
      };

      databaseService.insert('tasks', task);

      return response.writeHead(201).end();
    },
  },
  {
    method: 'GET',
    url: buildRoutePathUtil('/tasks'),
    handler: (request, response) => {
      const { search } = request.query;
      const tasks = databaseService.select(
        'tasks',
        search
          ? {
              title: search,
              description: search,
            }
          : null
      );

      return response.end(JSON.stringify(tasks));
    },
  },
  {
    method: 'GET',
    url: buildRoutePathUtil('/tasks/:id'),
    handler: (request, response) => {
      const { id } = request.params;
      const task = databaseService.selectById('tasks', id);

      return response.end(JSON.stringify(task));
    },
  },
  {
    method: 'PUT',
    url: buildRoutePathUtil('/tasks/:id'),
    handler: (request, response) => {
      const { id } = request.params;
      const { title, description } = request.body;

      const allowedProperties = ['title', 'description'];
      const receivedProperties = Object.keys(request.body);
      const hasInvalidProperty = receivedProperties.some(
        (key) => !allowedProperties.includes(key)
      );
      const isEmptyBody = !title && !description;

      if (hasInvalidProperty || isEmptyBody) {
        const statusCode = 400;

        return response.writeHead(statusCode).end(
          JSON.stringify({
            statusCode,
            message: 'Provide only known properties.',
          })
        );
      }

      const task = databaseService.selectById('tasks', id);

      if (!task) {
        const statusCode = 404;

        return response.writeHead(statusCode).end(
          JSON.stringify({
            statusCode,
            message: `Task Id '${id}' does not exist.`,
          })
        );
      }

      const updatedData = {};

      if (title !== undefined) {
        updatedData.title = title;
      }

      if (description !== undefined) {
        updatedData.description = description;
      }

      databaseService.update('tasks', id, {
        ...updatedData,
      });

      return response.writeHead(204).end();
    },
  },
  {
    method: 'PATCH',
    url: buildRoutePathUtil('/tasks/:id/complete'),
    handler: (request, response) => {
      const { id } = request.params;

      const task = databaseService.selectById('tasks', id);

      if (!task) {
        const statusCode = 404;

        return response.writeHead(statusCode).end(
          JSON.stringify({
            statusCode,
            message: `Task Id '${id}' does not exist.`,
          })
        );
      }

      const updatedData = {};

      updatedData.completed_at = task.completed_at !== true;

      databaseService.update('tasks', id, {
        ...updatedData,
      });

      return response.writeHead(204).end();
    },
  },
  {
    method: 'DELETE',
    url: buildRoutePathUtil('/tasks/:id'),
    handler: (request, response) => {
      const { id } = request.params;

      const task = databaseService.selectById('tasks', id);

      if (!task) {
        const statusCode = 404;

        return response.writeHead(statusCode).end(
          JSON.stringify({
            statusCode,
            message: `Task Id '${id}' does not exist.`,
          })
        );
      }

      databaseService.delete('tasks', id);

      return response.writeHead(204).end();
    },
  },
];
