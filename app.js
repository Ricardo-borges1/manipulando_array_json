/********************************************************************************
 * Objetivo: Criação de uma API para manipular dados de estados e cidades.
 * Data: 01/11/2023
 * Autor: Ricardo Borges do Amaral
 * Versão 1.0
 ********************************************************************************/

//Para criar uma API podemos utilizar o EXPRESS


/*

    npm install expres --save
    é a biblioteca que vai gerenciar as requisições da API

    npm install body-parser --save
    É a biblioteca que vai manipular dados do corpo da requisição (POST, PUT)

    npm install cors --save
    É a bbiblioteca responsável pelas permissões (HEADER) de acesso das requisições 


*/

// Import das bibliotecas para criar a API
const expres = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Criando um objeto para manipular as requisições da API 
const app = expres();


// dizendo como eu vou manipular o objeto app 
//request - entrada de dados na API
//response - saida (return) de dados da API

// função para manipular as restrições da API (HEADER)
app.use((request,response,next) =>{
    //Permite especificar quem poderá aessar a API  
    //(* = liberar acesso público, 'IP' = liberar acesso apenas para aquela máquina)
    response.header('Acess-Control-Allow-Origin','*');

    // Permite especificar como a API, será requisitada (GET, POST,PUT e DELETE)
    response.header('Acess-Control-Allow-Methods', 'GET');


    //Ativa as configurações no cors
    app.use(cors());

    
    next();
})

//EndPoints: 

app.get('/estados/sigla', cors (), async function (request,response,next){
    
    let controleEstadosCidades = require('./modulo/exercicio.js');
    let listaEstados = controleEstadosCidades.getListadeEstados()

    response.json(listaEstados);
    response.status(200);
})

app.listen('8080', function(){
    console.log('API FUNCIONANDO')
})