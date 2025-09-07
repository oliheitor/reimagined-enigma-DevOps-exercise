const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

app.get('/about', (req, res) => {
  res.send('Aplicação de exemplo para CI/CD com GitHub Actions e Docker.');
});
