// Importa o framework Express
const express = require('express');
const app = express();
const port = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Um simples "Hello World!"');
});

// Nova rota de informações
app.get('/about', (req, res) => {
  res.send('Aplicação de exemplo para CI/CD com GitHub Actions e Docker.');
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});


app.get('/about', (req, res) => {
  res.send('Aplicação de exemplo para CI/CD com GitHub Actions e Docker.');
});
// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Rota adicional (já usamos nos testes)
app.get('/about', (req, res) => {
  res.send('Aplicação de exemplo para CI/CD com GitHub Actions e Docker.');
});

// Rota de saúde (útil para monitoramento e testes)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Só inicia o servidor se não estivermos rodando testes
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
  });
}

module.exports = app;
