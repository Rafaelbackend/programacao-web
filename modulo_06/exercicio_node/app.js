const { somar, multiplicar } = require('./utils');

const fs = require('fs');

const http = require('http');


const resultadoSoma = somar(5, 3);

const resultadoMult = multiplicar(5, 3);


const texto = `Soma: ${resultadoSoma}
Multiplicação: ${resultadoMult}`;



fs.writeFileSync('resultado.txt', texto);

console.log('Arquivo resultado.txt criado!');



const servidor = http.createServer((req, res) => {

  if (req.url === '/dados') {

    const dados = fs.readFileSync('dados.json');

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(dados);

  } else {

    res.writeHead(200, {
      'Content-Type': 'text/html'
    });

    res.end(`
      <h1>Servidor Node funcionando!</h1>

      <p>Soma: ${resultadoSoma}</p>

      <p>Multiplicação: ${resultadoMult}</p>
    `);
  }

});


servidor.listen(3000, () => {

  console.log('Servidor rodando em http://localhost:3000');

});