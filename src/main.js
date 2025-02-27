"use strict";
import "./style.css";

const firstNumberEl = document.querySelector(".first");
const secondNumberEl = document.querySelector(".second");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

const operationsCont = document.querySelector(".operations");

// let firstNumber = "";
// let secondNumber;
// let operation;

const add = function (a, b) {
  return a + b;
};

class Calculator {
  constructor() {
    this.firstNumber = "";
    this.secondNumber;
    this.operation = "";
    this.result = "";
  }

  calculate(operation) {
    if (operation === "+") {
      return (this.result = add(this.firstNumber, this.secondNumber));
      // Number(this.firstNumber) + Number(this.secondNumber));
    }
    if (operation === "-") {
      return (this.result =
        Number(this.secondNumber) - Number(this.firstNumber));
    }
    if (operation === "*") {
      return (this.result =
        Number(this.firstNumber) * Number(this.secondNumber));
    }
    if (operation === "/") {
      return (this.result =
        Number(this.secondNumber) / Number(this.firstNumber));
    }
  }
}
const math = new Calculator();
operationsCont.addEventListener("click", function (e) {
  // prettier-ignore
  if (!e.target.classList.contains('num-btn') && !e.target.classList.contains('op-btn') && !e.target.classList.contains('equals')) return;

  if (e.target.classList.contains("op-btn")) {
    operation = e.target.getAttribute("data-id");
    console.log(operation);
  }

  if (e.target.classList.contains("num-btn")) {
    if (firstNumber === "") {
      // firstNumber = firstNumber + e.target.getAttribute("data-id");
      // math.firstNUmber = math.firstNumber + e.target.getAttribute("data-id");
      // math.setFirstNUmber(e.target.getAttribute("data-id"));
      console.log("prvi broj kada drugi nije definisan", firstNumber);
    }
    if (operation && !secondNumber) {
      secondNumber = firstNumber;
      firstNumber = "";
      firstNumber = firstNumber + e.target.getAttribute("data-id");
      console.log("drugi broj", secondNumber);
      console.log("prvi broj", firstNumber);
    }
    if (firstNumber !== "" && secondNumber && operation) {
      console.log(math.calculate(operation));
      secondNumber = math.calculate(operation);
      firstNumber = "";
      firstNumber = firstNumber + e.target.getAttribute("data-id");
      // secondNumber = Number(secondNumber) + Number(firstNumber);
      console.log("prvi broj posle operacije", firstNumber);
      console.log("drugi broj posle operacije", secondNumber);
    }
  }

  firstNumberEl.textContent = firstNumber;
  secondNumberEl.textContent = secondNumber;
});

// prvo napraviti da radi 2+2-1+2
