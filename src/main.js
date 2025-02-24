"use strict";
import "./style.css";

const firstNumberEl = document.querySelector(".first");
const secondNumberEl = document.querySelector(".second");

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

class Calculator {
  constructor(firstNumber, secondNumber, operation) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.operation = operation;
  }
}
