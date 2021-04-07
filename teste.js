const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const filter1 = lines.shift();
const filter2 = lines.shift();
const filter3 = lines.shift();
//complete a solução de acordo com suas variáveis

if (filter1 === "vertebrado") {
  if (filter2 === "ave") {
    if (filter3 === "carnivoro") {
        console.log("aguia");
    } else {
        console.log("pomba");
    }
  } else {
    if (filter3 === "onivoro") {
        console.log("homem");
    } else {
        console.log("vaca");
    }
  }
} else {
  if (filter2 === "inseto") {
    if (filter3 === "hematofago") {
        console.log("pulga");
    } else {
        console.log("lagarta");
    }
  } else {
    if (filter3 === "hematofago") {
        console.log("sanguessuga");
    } else {
        console.log("minhoca");
    }
  }
}

////////////////////
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let cases = parseInt(gets()); //Recebe quantidade de casos

for (let i = 1; i <= cases; i++) {

    let stillInPosition = 0; //Conta os não alterados
    let numCustomers = parseInt(gets());
    let arriving = (gets()).split(" ").map((arriving) => arriving); //Recebe os clientes
    //let arr1 = arriving.map((arriving) => arriving);
    let stack = arriving.map((arriving) => arriving).sort(sortNum);

    //Ordenando em ordem descrescente e númerica
    function sortNum(a, b){
        return (b - a) //Função auxiliar para o array poder serja ordenado numericamente.
    }

    //Comparando valores para pegar os não alterados
    for (let j = 0; j < numCustomers; j++) {
        if ( arriving[j] === stack[j]) {
            stillInPosition++;
        };
    };
    //Saída dos não alterados
    console.log(stillInPosition);
}; 


///////////////////////














































const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const filter1 = lines.shift();
const filter2 = lines.shift();
const filter3 = lines.shift();
//complete a solução de acordo com suas variáveis

if (filter1 === "vertebrado") {
  if (filter2 === "mamifero") {
    if (filter3 === "onivoro") {
      console.log("homem");
    } else {
      console.log("vaca");
    }
  } else {
    if (filter3 === "ave") {
      console.log("pomba");
    } else {
      console.log("aguia");
    }
  }
} else {
  if (filter2 === "inseto") {
    if (filter3 === "hematofago") {
      console.log("pulga");
    } else {
      console.log("lagarta");
    }
  } else {
    if (filter3 === "hematofago") {
      console.log("sanguessuga");
    } else {
      console.log("minhoca");
    }
  }
}