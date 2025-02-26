"use strict";
import "./style.css";

const firstNumberEl = document.querySelector(".first");
const secondNumberEl = document.querySelector(".second");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

const operationsCont = document.querySelector(".operations");

let firstNumber = "";
let secondNumber;
let operation;

class Calculator {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.operation = "";
    this.result = "";
  }

  calculate(operation) {
    if (operation === "+") {
      return (this.result =
        Number(this.firstNumber) + Number(this.secondNumber));
    }
    if (operation === "-") {
      return (this.result =
        Number(this.firstNumber) - Number(this.secondNumber));
    }
    if (operation === "*") {
      return (this.result =
        Number(this.firstNumber) * Number(this.secondNumber));
    }
    if (operation === "/") {
      return (this.result =
        Number(this.firstNumber) / Number(this.secondNumber));
    }
  }
}

operationsCont.addEventListener("click", function (e) {
  // prettier-ignore
  if (!e.target.classList.contains('num-btn') && !e.target.classList.contains('op-btn') && !e.target.classList.contains('equals')) return;

  if (e.target.classList.contains("op-btn")) {
    operation = e.target.getAttribute("data-id");
    console.log(operation);
  }

  const math = new Calculator(firstNumber, secondNumber);

  if (e.target.classList.contains("num-btn")) {
    if (firstNumber === "") {
      firstNumber = firstNumber + e.target.getAttribute("data-id");
      console.log("prvi broj kada drugi nije definisan", firstNumber);
    }
    if (operation) {
      firstNumber = math.calculate(operation);
      secondNumber = firstNumber;
      firstNumber = "";
      firstNumber = firstNumber + e.target.getAttribute("data-id");
      console.log("drugi broj", secondNumber);
      console.log("prvi broj", firstNumber);
    }
  }

  firstNumberEl.textContent = firstNumber;
  secondNumberEl.textContent = secondNumber;
});

// const matematika = new Calculator(10, 8);

// console.log(matematika.calculate("+"));
// console.log(matematika.calculate("-"));
// console.log(matematika.calculate("*"));
// console.log(matematika.calculate("/"));
