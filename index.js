/*
1. Criar um projeto Node com o nome ford-app
2. Instalar o Express no projeto
3. Instalar o EJS no projeto
4. Configurar o arquivo index.js com as dependências do projeto. (Express, EJS)
5. Cria uma rota .get('/') para exibir o template index.ejs > Hello, FordApp
6. Cria uma rota .get('/localizar-concessionaria'), para exibir o template concessionaria.ejs > Hello, Concessionárias.
*/

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/concessionarias', (req, res) => {
    const lojas = [
        {
            id: 1,
            name: 'Joinville-SC',
        },
        {
            id: 2,
            name: 'Jaraguá do Sul-SC',
        },
        {
            id: 3,
            name: 'Blumenau-SC',
        }
    ];
    res.render('concessionarias', {lojas});
});

app.listen(9090, (erro) => {
  if(erro) {
    console.log('Erro ao rodar o projeto');
  } else {
    console.log('Servidor rodando no endereço: http://localhost:9090');
  }
});