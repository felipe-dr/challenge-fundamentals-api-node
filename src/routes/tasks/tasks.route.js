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
        completedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      databaseService.insert('tasks', task);

      return response.writeHead(201).end();
    },
  },
];
