import app from '../app';

const server = app();

test('Should get a 200 OK', async () => {
  const response = await server.inject({
    method: 'GET',
    url: '/',
  });
  
  expect(response.statusCode).toBe(200);
});