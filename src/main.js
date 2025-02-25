"use strict";
import "./style.css";

const firstNumberEl = document.querySelector(".first");
const secondNumberEl = document.querySelector(".second");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

const operationsCont = document.querySelector(".operations");

let firstNumber;
let secondNumber;
let operation;

operationsCont.addEventListener("click", function (e) {
  // prettier-ignore
  if (!e.target.classList.contains('num-btn') && !e.target.classList.contains('op-btn') && !e.target.classList.contains('equals')) return;

  if (firstNumber === undefined) {
    if (e.target.classList.contains("num-btn")) {
      firstNumber = e.target.getAttribute("data-id");
      console.log("prvi broj kada drugi nije definisan", firstNumber);
    }
  } else if (firstNumber && e.target.classList.contains("num-btn")) {
    secondNumber = firstNumber;
    firstNumber = e.target.getAttribute("data-id");
    console.log("drugi broj", secondNumber);
    console.log("prvi broj", firstNumber);
  }

  if (e.target.classList.contains("op-btn")) {
    operation = e.target.getAttribute("data-id");
    console.log(operation);
  }

  if (e.target.classList.contains("equals")) {
    if (operation === "+") {
      console.log(Number(firstNumber) + Number(secondNumber));
    }
  }
});

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

const matematika = new Calculator(6, 8);

console.log(matematika.calculate("+"));
console.log(matematika.calculate("-"));
console.log(matematika.calculate("*"));
console.log(matematika.calculate("/"));
