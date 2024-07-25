let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let lowerValue = 0;
let highestValue = array.length - 1;
let mid = Math.floor((highestValue + lowerValue) / 2);

const lessButton = document.getElementById("menor");
const moreButton = document.getElementById("maior");
const equalButton = document.getElementById("Igual");

function updateMid() {
  mid = Math.floor((highestValue + lowerValue) / 2);
  checkArrayLength();
}

function moreThan() {
  lowerValue = mid + 1;
  updateMid();
  console.log(array.slice(lowerValue, highestValue + 1));
}

function lessThan() {
  highestValue = mid;
  updateMid();
  console.log(array.slice(lowerValue, highestValue + 1));
}

function checkArrayLength() {
  const currentArray = array.slice(lowerValue, highestValue + 1);
  if (currentArray.length <= 1) {
    disableButtons();
  } else {
    enableButtons();
  }
}

function disableButtons() {
  lessButton.disabled = true;
  moreButton.disabled = true;
  equalButton.disabled = true;
}

function enableButtons() {
  lessButton.disabled = false;
  moreButton.disabled = false;
  equalButton.disabled = false;
}

document.getElementById("maior").addEventListener("click", () => {
  moreThan();
});

document.getElementById("menor").addEventListener("click", () => {
  lessThan();
});

document.getElementById("Igual").addEventListener("click", () => {
  disableButtons();
});

// Inicialmente, verifique a condição
checkArrayLength();
