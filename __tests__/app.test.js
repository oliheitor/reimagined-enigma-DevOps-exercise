// __tests__/app.test.js
const request = require('supertest');
const app = require('../index'); // importa o app sem subir servidor real

describe('App endpoints', () => {
  test('GET / deve responder 200 e conter "Hello World!"', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('Hello World!');
  });

  test('GET /about deve responder 200 e descrever a aplicação', async () => {
    const res = await request(app).get('/about');
    expect(res.status).toBe(200);
    expect(res.text).toMatch(/GitHub Actions e Docker/i);
  });

  test('GET /health deve responder 200 e JSON { status: "ok" }', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  test('Rota inexistente deve responder 404', async () => {
    const res = await request(app).get('/nao-existe');
    expect(res.status).toBe(404);
  });

  test('Headers básicos em /about (content-type text/html)', async () => {
    const res = await request(app).get('/about');
    expect(res.headers['content-type']).toMatch(/text\/html/);
  });
});
