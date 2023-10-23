var estados_cidades = require ('./estados_cidades.js')

// let cont = 0;
    //while (cont < listaDeProdutos.length){
        //console.log (`nome do Produto: ${listaDeProdutos[cont]}`);
       // cont +=1;
   //}

   //FOR
   //for(let cont=0 ; cont <listaDeProdutos.length; cont++){
    //console.log (`nome do Produto: ${listaDeProdutos[cont]}`);

   //}

    const getListadeEstados= function(){

        let arraySigla = []
        let JSONSigla = {}
        for (let cont=0; cont < estados_cidades.estadosCidades.estados.length; cont++ ){
            arraySigla.push(estados_cidades.estadosCidades.estados[cont].sigla)
            
        }

        JSONSigla.estados = arraySigla
        JSONSigla.count = arraySigla.length
        

        return JSONSigla;
        
    };

    //FOREACH -> estrutura de repetição feita para trabalhar com array, ele gerencia o índice, ele pega o arrray "Lista de produtos" 
    //e ele cria na memoria uma replica dsse array, pegando o conteudo do array e joga numa variavel de callback

   //listaDeProdutos.forEach(function(produto){
    //console.log (`Nome do Produto: ${produto}`)

    //})

    const getDadosEstado = function() {
        let JSONDados = {};
        let filtro = 'RJ';

        estados_cidades.estadosCidades.estados.forEach(function(estado) {
            if (filtro === estado.sigla) {
                JSONDados.uf = estado.sigla;
                JSONDados.descricao = estado.nome;
                JSONDados.capital = estado.capital;
                JSONDados.regiao = estado.regiao;
                
            }
        });
    
        return JSONDados;
    };
    

    const getCapitalEstado = function() {
        let JSONCapital = {};
        let filtro = 'SP';
    
        estados_cidades.estadosCidades.estados.forEach(function(estado) {
            if (filtro.toUpperCase() === estado.sigla.toUpperCase()) {
                JSONCapital.uf = estado.sigla.toUpperCase();
                JSONCapital.descricao = estado.nome;
                JSONCapital.capital = estado.capital; 
            }
        });
        return JSONCapital;
    };

    const getEstadosRegiao = function() {
        let JSONRegiao = {};
        let arrayEstados = [];
        let filtro = 'SUDESTE';
    
        for (let i = 0; i < estados_cidades.estadosCidades.estados.length; i++) {
            let estado = estados_cidades.estadosCidades.estados[i];
            if (filtro.toUpperCase() === estado.regiao.toUpperCase()) {
                let JSONEstados = {};
                JSONEstados.uf = estado.sigla;
                JSONEstados.nome = estado.nome;
                arrayEstados.push(JSONEstados);
            }
        }
    
        if (arrayEstados.length > 0) {
            JSONRegiao.regiao = filtro.toUpperCase();
            JSONRegiao.estados = arrayEstados;
        } 
        return JSONRegiao;
    };
    
    console.log(getEstadosRegiao());
    //console.log(getCapitalEstado());
    //console.log(getDadosEstado());
    //console.log(getListadeEstados());







   

