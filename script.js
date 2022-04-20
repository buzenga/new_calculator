// const buttons = Array.from(document.querySelectorAll(".button"));
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

let firstOperand = null;
let secondOperand = null;
let sign = "";
let result = null;
let dotCounter = 0;

buttons.forEach(button => button.addEventListener('click', (e) => {
   switch(e.target.innerText) {
      case 'AC':
         clearDisplay();
         firstOperand = null;
         secondOperand = null;
         sign = "";
         break;
      case '/':
         firstOperand = Number(display.innerText); 
         sign = "divide";
         clearDisplay();
         break;
      case '*':
         firstOperand = Number(display.innerText); 
         sign = "multiply";
         clearDisplay();
         break;
      case '-':
         firstOperand = Number(display.innerText); 
         sign = "substract";
         clearDisplay();
         break;
      case '+':
         firstOperand = Number(display.innerText); 
         sign = "add";
         clearDisplay();
         break;
      case "=":
         secondOperand = Number(display.innerText); 
         // calculate();
         display.innerText = calculate(firstOperand,secondOperand,sign);
         break;
      case ".":
      if (display.innerText.includes(".")) return;
      if (display.innerText == '') {
         display.innerText = `0${e.target.innerText}`;
      }
        else display.innerText += e.target.innerText;
      
         break;
      default:
         display.innerText += e.target.innerText;
   }
}))

const clearDisplay = () => {
   display.innerText = '';
}

const calculate = (firstOperand,secondOperand,sign) => {
   if (sign == "divide") {
      if(secondOperand == 0) {
         return "ERROR!!!";
      }
      return Number(firstOperand) / Number(secondOperand);
   }
   if (sign == "multiply") {
      
      return Number(firstOperand) * Number(secondOperand);
   }
   if (sign == "add") {
      result = Number(firstOperand) + Number(secondOperand);
      return result;
   }
   if (sign == "substract") {
      return Number(firstOperand) - Number(secondOperand);
   }
}