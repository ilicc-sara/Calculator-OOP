"use strict";
import "./style.css";

const firstNumberEl = document.querySelector(".first");
const secondNumberEl = document.querySelector(".second");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

const operationsCont = document.querySelector(".operations");

let num1 = "";
let num2 = 0;
let operation;

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

class Calculator {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.operation = "";
    this.result = "";
  }

  calculate(operation) {
    if (operation === "+") {
      return (this.result = add(
        Number(this.firstNumber),
        Number(this.secondNumber)
      ));
    }
    if (operation === "-") {
      return (this.result = subtract(
        Number(this.secondNumber),
        Number(this.firstNumber)
      ));
    }
    if (operation === "*") {
      return (this.result = multiply(
        Number(this.firstNumber),
        Number(this.secondNumber)
      ));
    }
    if (operation === "/") {
      return (this.result = divide(
        Number(this.secondNumber),
        Number(this.firstNumber)
      ));
    }
  }
}

operationsCont.addEventListener("click", function (e) {
  if (e.target.classList.contains("op-btn")) operation = e.target.textContent;

  const math = new Calculator(num1, num2);
  num1 = num1 + e.target.textContent;
  console.log("prvi broj kada drugi nije definisan", num1);

  if (operation) {
    num1 = math.calculate(operation);
    num2 = num1 + operation;
    num1 = "";
    operation = undefined;
    console.log("operacija", operation);
    console.log("prvi broj nakon operacije", num1);
    console.log("drugi broj nakon operacije", num2);
  }

  firstNumberEl.textContent = num1;
  secondNumberEl.textContent = num2;
});

// operationsCont.addEventListener("click", function (e) {
//   // prettier-ignore
//   if (!e.target.classList.contains('num-btn') && !e.target.classList.contains('op-btn') && !e.target.classList.contains('equals')) return;

//   if (e.target.classList.contains("op-btn")) {
//     operation = e.target.getAttribute("data-id");
//     console.log(operation);
//   }

//   if (e.target.classList.contains("num-btn")) {
//     if (firstNumber === "") {
//       firstNumber = firstNumber + e.target.getAttribute("data-id");
//       console.log("prvi broj kada drugi nije definisan", firstNumber);
//     }
//     if (operation && !secondNumber) {
//       secondNumber = firstNumber;
//       firstNumber = "";
//       firstNumber = firstNumber + e.target.getAttribute("data-id");
//       console.log("drugi broj", secondNumber);
//       console.log("prvi broj", firstNumber);
//     }
//     if (firstNumber !== "" && secondNumber && operation) {
//       const math = new Calculator(firstNumber, secondNumber);
//       console.log(math.calculate(operation));
//       secondNumber = math.calculate(operation);
//       firstNumber = "";
//       firstNumber = firstNumber + e.target.getAttribute("data-id");
//       // secondNumber = Number(secondNumber) + Number(firstNumber);
//       console.log("prvi broj posle operacije", firstNumber);
//       console.log("drugi broj posle operacije", secondNumber);
//     }
//   }

//   firstNumberEl.textContent = firstNumber;
//   secondNumberEl.textContent = secondNumber;
// });

// const matematika = new Calculator(10, 8);

// console.log(matematika.calculate("+"));
// console.log(matematika.calculate("-"));
// console.log(matematika.calculate("*"));
// console.log(matematika.calculate("/"));
