import http from 'node:http';

import { jsonMiddleware } from './middlewares/index.js';
import { tasksRoute } from './routes/index.js';
import { extractQueryParamsUtil } from './utilities/index.js';

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  await jsonMiddleware(request, response);

  const route = tasksRoute.find((route) => {
    return route.method === method && route.url.test(url);
  });

  if (route) {
    const routeParams = request.url.match(route.url);
    const { query, ...params } = routeParams.groups;

    request.params = params;
    request.query = query ? extractQueryParamsUtil(query) : {};

    return route.handler(request, response);
  }

  return response.writeHead(404).end();
});

server.listen('3333');
