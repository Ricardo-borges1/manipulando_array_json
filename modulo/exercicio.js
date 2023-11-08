/********************************************************************************
 * Objetivo: Realizar os exercícios orientados pelo professor utilizado ARRAY E JSON
 * Data: 25/10/2023
 * Autor: Ricardo Borges do Amaral
 * Versão 1.0
 ********************************************************************************/


   //FOR
   //for(let cont=0 ; cont <listaDeProdutos.length; cont++){
    //console.log (`nome do Produto: ${listaDeProdutos[cont]}`);

   //}

   //FOREACH -> estrutura de repetição feita para trabalhar com array, ele gerencia o índice, ele pega o arrray "Lista de produtos" 
    //e ele cria na memoria uma replica dsse array, pegando o conteudo do array e joga numa variavel de callback

   // listaDeProdutos.forEach(function(produto){
    //console.log (`Nome do Produto: ${produto}`)

   // })

var estadosCidades = require ('./estados_cidades.js')

    const getListadeEstados= function(){

        let arraySigla = []
        let JSONSigla = {}
        let status = false;
        for (let cont=0; cont < estadosCidades.estadosCidades.estados.length; cont++ ){
            arraySigla.push(estadosCidades.estadosCidades.estados[cont].sigla)
            status = true
        }

        JSONSigla.estados = arraySigla
        JSONSigla.count = arraySigla.length
        
        if (status)
            return JSONSigla;
        else 
            return false;
        
    };

    const getDadosEstado = function() {
        let JSONDados = {};
        let filtro = 'DF';
        let status = false;

        estadosCidades.estadosCidades.estados.forEach(function(estado) {
            if (filtro === estado.sigla) {
                JSONDados.uf = estado.sigla;
                JSONDados.descricao = estado.nome;
                JSONDados.capital = estado.capital;
                JSONDados.regiao = estado.regiao;
                status = true
            }
        });
    
        if (status)
            return JSONDados;
        else 
            return false;
    
    };

    const getCapitalEstado = function() {
        let JSONCapital = {};
        let filtro = 'SP';
        let status = false;
    
        estadosCidades.estadosCidades.estados.forEach(function(estado) {
            if (filtro.toUpperCase() === estado.sigla.toUpperCase()) {
                JSONCapital.uf = estado.sigla.toUpperCase();
                JSONCapital.descricao = estado.nome;
                JSONCapital.capital = estado.capital;
                status = true 
            }
        });

        if (status)
        return JSONCapital;
    else 
        return false;

    };

    const getEstadosRegiao = function() {
        let JSONRegiao = {};
        let arrayEstados = [];
        let filtro = 'SUL';
        let status = false;

        estadosCidades.estadosCidades.estados.forEach(function(estado) {
            if (filtro.toUpperCase() === estado.regiao.toUpperCase()) {
                let JSONEstados = {};
                JSONEstados.uf = estado.sigla;
                JSONEstados.nome = estado.nome;
                arrayEstados.push(JSONEstados);
                status = true 
            }
        });
        if (arrayEstados.length > 0) {
            JSONRegiao.regiao = filtro.toUpperCase();
            JSONRegiao.estados = arrayEstados;
        }

        if (status)
        return JSONRegiao;
    else 
        return false;
        
    };

    const getCapitalPais = function() {
        let JSONCapitais = {};
        let arrayCapitais = [];
        let status = false;

        for (let contador = 0; contador < estadosCidades.estadosCidades.estados.length; contador++) {
            const estado = estadosCidades.estadosCidades.estados[contador];
    
            if (estado.capital_pais) {
                let JSONEstados = {
                    capital_atual: estado.capital_pais.capital,
                    uf: estado.sigla,
                    descricao: estado.nome,
                    capital: estado.capital,
                    regiao: estado.regiao,
                    capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
                    capital_pais_ano_termino: estado.capital_pais.ano_fim
                };
                arrayCapitais.push(JSONEstados);
                status = true;
            }
        }
    
        JSONCapitais.capitais = arrayCapitais;
        if (status)
        return JSONCapitais;
    else 
        return false;

    };
     
    const getCidades = function() {
        let JSONCidades = {};
        let arrayCidades = [];
        let filtro = 'AC';
        let encontrado = false;
    
        estadosCidades.estadosCidades.estados.forEach(function(estado) {
            if (estado.sigla === filtro && !encontrado) {
                estado.cidades.forEach(function(cidade) {
                    arrayCidades.push(cidade.nome);
                });
    
                JSONCidades.uf = estado.sigla;
                JSONCidades.descricao = estado.nome;
                JSONCidades.quantidade_cidades = estado.cidades.length;
                JSONCidades.cidades = arrayCidades;
                encontrado = true; 
            }
        });
    
        return JSONCidades;
    };
    

    //console.log(getCidades());
    //console.log(getCapitalPais());
    //console.log(getEstadosRegiao());
    //console.log(getCapitalEstado());
    //console.log(getDadosEstado());
    //console.log(getListadeEstados());

   module.exports = {getListadeEstados,getCidades,getCapitalPais,getEstadosRegiao,getCapitalEstado,getDadosEstado}



   

