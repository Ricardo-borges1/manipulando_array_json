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
        
    }

    //FOREACH -> estrutura de repetição feita para trabalhar com array, ele gerencia o índice, ele pega o arrray "Lista de produtos" 
    //e ele cria na memoria uma replica dsse array, pegando o conteudo do array e joga numa variavel de callback

   //listaDeProdutos.forEach(function(produto){
    //console.log (`Nome do Produto: ${produto}`)

    //})

    console.log(getListadeEstados());







   

