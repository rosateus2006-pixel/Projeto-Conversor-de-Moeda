// innerHTML - usado para inserir informações do JS dentro do HTML
// querySelector - usado para pegar elementos do HTML
// document - usado para se referir ao HTML ao selecionar um elemento

const convertButton = document.querySelector('#convert-Button'); // varialvel criada para pegar o botão de converter
const selecao = document.querySelector(".selecioneConversao"); // varialvel criada para pegar o botão de converter


function convert() {
    const valorConverter = document.querySelector(".valorInput").value; // varialvel criada para pegar o valor de entrada para conversão
    const valorAconverter = document.querySelector(".valorReal"); //valor real
    const valorConvertido = document.querySelector(".valorDolar"); //variavel criada para pegar o valor convertido em dolar
    
    const dolarToday = 5.2; //valor referente ao dolar
    const euroToday = 6.2; //valor referente ao euro
    
    
    if(selecao.value == "dolar") { //if = se o select for igual a dolar, então faça o seguinte
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(valorConverter / dolarToday); // Estrutura para formatar o resultado em US$
    };

    if(selecao.value == "euro") { //if = se o select for igual a euro, então faça o seguinte
        const valorFinalEuro = Number(valorConverter / euroToday).toFixed(2);
        
        valorConvertido.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR",
        }).format(valorConverter / euroToday); // Estrutura para formatar o resultado em EUR
    };
    
    
    
    
     valorAconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(valorConverter); // Estrutura para formatar o resultado em R$


    
}


function changeCurrency() {
    
    const nomeMoeda = document.querySelector("#nome-Moeda"); //variavel criada para pegar o nome da moeda
    const imgMoeda = document.querySelector("#img-Moeda"); //variavel criada para pegar a imagem da moeda
    
    if(selecao.value == "dolar") {
        nomeMoeda.innerHTML = "Dólar Americano";
        imgMoeda.src = "./assets/imagens/bandeiraEUA.jpg";
    }

    if(selecao.value == "euro") {
        nomeMoeda.innerHTML = "Euro";
        imgMoeda.src = "./assets/imagens/Euro.jpg";
    }

    convert(); //chama a função convert() para atualizar o valor convertido quando a moeda for alterada

}

selecao.addEventListener('change', changeCurrency); // adiciona evento de mudança no select

convertButton.addEventListener('click', convert); // adiciona evento de clique no botão de converter
