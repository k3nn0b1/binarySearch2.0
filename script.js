let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
let lowerValue = 0;
let highestValue = array.length - 1;
let mid = Math.floor((highestValue + lowerValue) / 2);

//vai transformar os botoes em variaveis (boolean)
const lessButton = document.getElementById("less");
const moreButton = document.getElementById("more");
const equalButton = document.getElementById("equal");

//vai atualizar o num do meio
function updateMid() {
  mid = Math.floor((highestValue + lowerValue) / 2);
  checkArrayLength();
}

//vai atribuir a função de corte no botao mais
function moreThan() {
  lowerValue = mid + 1;
  updateMid();
  console.log(array.slice(lowerValue, highestValue + 1));
}

//vai atrivuir a função de corte no botao menos
function lessThan() {
  highestValue = mid;
  updateMid();
  console.log(array.slice(lowerValue, highestValue + 1));
}

//vai validar se o tamanho do array é 1, se for 1 ele para
function checkArrayLength() {
  const currentArray = array.slice(lowerValue, highestValue + 1);
  if (currentArray.length <= 1) {
    disableButtons();
  } else {
    enableButtons();
  }
}

//desabilitar clique nos botoes
function disableButtons() {
  lessButton.disabled = true;
  moreButton.disabled = true;
  equalButton.disabled = true;
}

//habilitar clique nos botoes
function enableButtons() {
  lessButton.disabled = false;
  moreButton.disabled = false;
  equalButton.disabled = false;
}

function showResult(){
  const result = document.getElementById("call")
  const chamada = document.getElementById("isIt")
  chamada.innerHTML= "O número é "
  result.innerHTML= mid + " ?";
}



//eventos de clique nos botoes e chamadas de funcao
document.getElementById("more").addEventListener("click", () => {
  moreThan();
  showResult()
});

document.getElementById("less").addEventListener("click", () => {
  lessThan();
  showResult()
});

document.getElementById("equal").addEventListener("click", () => {
  disableButtons();
});

document.getElementById("start").addEventListener("click", () =>{

  showResult()
})

//chamar função de validação de tamanho do array
checkArrayLength();


//igual recebe midValue