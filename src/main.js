"use strict";
import "./style.css";

const firstNumberEl = document.querySelector(".first");
const secondNumberEl = document.querySelector(".second");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

const operationsCont = document.querySelector(".operations");

let firstNumber = "";
let secondNumber = "";
let operation = "";

operationsCont.addEventListener("click", function (e) {
  // prettier-ignore
  if (!e.target.classList.contains('num-btn') && !e.target.classList.contains('op-btn') && !e.target.classList.contains('equals')) return;

  if (e.target.classList.contains("num-btn")) {
    firstNumber = e.target.getAttribute("data-id");
    console.log(firstNumber);
  }

  if (e.target.classList.contains("op-btn")) {
    operation = e.target.getAttribute("data-id");
    console.log(operation);
  }

  if (firstNumber !== "") {
    secondNumber = firstNumber;
    console.log(secondNumber);
    firstNumber = "";
  }
});

class Calculator {
  constructor(firstNumber, secondNumber, operation) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.operation = operation;
  }
}
