export const MOUSE_ROUTE = new URLPattern({ pathname: '/mouses/:id' });

export function mouseHandler(req: Request): Response {
  const match = MOUSE_ROUTE.exec(req.url);

  if (match) {
    const id = match.pathname.groups.id;
    return new Response(`Mouse ${id}`);
  }
  return new Response('Mouse not found', {
    status: 404,
  });
}
