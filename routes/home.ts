export const HOME_ROUTE = new URLPattern({ pathname: '/home' });

export function homeHandler(req: Request): Response {
  return new Response('Welcome to the Home Page!', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}
