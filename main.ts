import { HOME_ROUTE, homeHandler } from './routes/home.ts';
import { MOUSE_ROUTE, mouseHandler } from './routes/mouse.ts';

Deno.serve(
  {
    hostname: 'localhost',
    port: 3000,
  },
  (req) => {
    const url = new URL(req.url);

    if (HOME_ROUTE.test(url)) {
      return homeHandler(req);
    }
    if (MOUSE_ROUTE.test(url)) {
      return mouseHandler(req);
    }

    return new Response('Not Found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
);
