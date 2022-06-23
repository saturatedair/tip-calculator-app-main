const bill = document.getElementById("bill-amount");
const btns = document.querySelectorAll(".tip-btn");
const person = document.getElementById("person-amount");
const customBtn = document.getElementById("custom-btn");
const tipPerPerson = document.querySelector(".calculatedTipAmount");
const totalCost = document.querySelector(".calculatedCostAmount");
const resetBtn = document.querySelector(".reset-btn");

// Loop through the buttons and add the active class to the current/clicked button

tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalCost.innerHTML = "$" + (0.0).toFixed(2);
person.value = 1;
let billValue = 0.0;
let personValue = 1;
let tipValue = 0;

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    // Add the active class to the current/clicked button
    this.className += " active";
    tipValue = parseFloat(e.target.innerHTML) / 100;
    calculatedTip();
  });
}

bill.addEventListener("input", billInputFun);
person.addEventListener("input", personInputFun);
customBtn.addEventListener("input", customInputFun);
resetBtn.addEventListener("click", resetClick);
function billInputFun() {
  billValue = parseFloat(bill.value);
  calculatedTip();
}

function personInputFun() {
  let personValue = parseFloat(person.value);
  calculatedTip();
}

function customInputFun() {
  customValue = parseFloat(customBtn.value) / 100;
  console.log(customValue);
  calculatedTip();
}

function resetClick() {
  window.location.reload();
}

function calculatedTip() {
  if (person.value.length >= 1) {
    if (customBtn.classList.contains("active")) {
      let tipAmountCustom = (billValue * customValue) / person.value;
      let totalAmountCustom =
        (billValue * customValue + billValue) / person.value;

      tipPerPerson.innerHTML = "$" + tipAmountCustom.toFixed(2);
      totalCost.innerHTML = "$" + totalAmountCustom.toFixed(2);
    } else {
      let tipAmount = (billValue * tipValue) / person.value;
      let totalAmount = billValue / person.value + tipAmount;
      tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
      totalCost.innerHTML = "$" + totalAmount.toFixed(2);
    }
  }
  alert();
  error();
  customInput();
}
function alert() {
  if (person.value.length == 0) {
    tipPerPerson.innerHTML = "$0.00";
    totalCost.innerHTML = "$0.00";
  }
}

function error() {
  let error = document.querySelector(".person-error");
  if (person.value.length == 0) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
}

function customInput() {
  if (customBtn.classList.contains("active") && customBtn.value.length == 0) {
    tipPerPerson.innerHTML = "$0.00";
    totalCost.innerHTML = "$0.00";
  }
}
