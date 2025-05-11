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
];
