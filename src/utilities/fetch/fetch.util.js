export async function fetchUtil(resource, body) {
  await fetch(`http://localhost:3333/${resource}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}
