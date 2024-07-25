let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

//vai atrivuir a função de corte no botao mais
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


//eventos de clique nos botoes e chamadas de funcao
document.getElementById("more").addEventListener("click", () => {
  moreThan();
});

document.getElementById("less").addEventListener("click", () => {
  lessThan();
});

document.getElementById("equal").addEventListener("click", () => {
  disableButtons();
});

//chamar função de validação de tamanho do array
checkArrayLength();


//igual recebe midValue