// Importa o framework Express
const express = require('express');
const app = express();
const port = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Hello World!');
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
