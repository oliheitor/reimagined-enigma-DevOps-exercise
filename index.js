// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rota principal
app.get('/', (_req, res) => {
  res.send('Hello World!');
});

// Rota adicional (usada nos testes)
app.get('/about', (_req, res) => {
  res.send('Aplicação de exemplo para CI/CD com GitHub Actions e Docker.');
});

// Rota de saúde (usada nos testes)
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Só inicia o servidor quando NÃO estiver em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
  });
}

module.exports = app;
