// const buttons = Array.from(document.querySelectorAll(".button"));
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const operators = document.querySelectorAll(".operator");

let firstOperand = null;
let secondOperand = null;
let sign = "";
let result = null;
let dotCounter = 0;

buttons.forEach(button => button.addEventListener('click', (e) => {

   let stringWithPlus = display.innerText.split("+");
   if (stringWithPlus.length >= 2 ) {
         equals.classList.add("ready");
         operators.forEach(operator => operator.classList.add("blocked"));
      }
   let stringWithMinus = display.innerText.split("-");
   if (stringWithMinus.length >= 2 ) {
         equals.classList.add("ready");
         operators.forEach(operator => operator.classList.add("blocked"));
      }
   let stringWithSlash = display.innerText.split("/");
   if (stringWithSlash.length >= 2 ) {
         equals.classList.add("ready");
         operators.forEach(operator => operator.classList.add("blocked"));
      }
   let stringWithStar = display.innerText.split("*");
   if (stringWithStar.length >= 2 ) {
         equals.classList.add("ready");
         operators.forEach(operator => operator.classList.add("blocked"));
      }
   // if (stringToCountArrayS[1] != "") {
   //    equals.classList.add("ready");
   // }

   switch(e.target.innerText) {
      case 'AC':

         equals.classList.remove("ready");
         operators.forEach(operator => operator.classList.remove("blocked"));

         clearDisplay();
         firstOperand = null;
         secondOperand = null;
         sign = "";
         break;
      case '/':
         dotCounter = 0;
         if (display.innerText.length == 0) return;
        
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "+") return;
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "-") return;
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "/") return;
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "*") return;
         if (display.innerText.includes("+")) return;
         if (display.innerText.includes("-")) return;
         if (display.innerText.includes("/")) return;
         if (display.innerText.includes("*")) return;

         sign = "divide";
         // clearDisplay();
         display.innerText += e.target.innerText;
         break;
      case '*':
         dotCounter = 0;
         if (display.innerText.length == 0) return;
         
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "+") return;
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "-") return;
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "/") return;
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "*") return;
         if (display.innerText.includes("+")) return;
         if (display.innerText.includes("-")) return;
         if (display.innerText.includes("/")) return;
         if (display.innerText.includes("*")) return;

         sign = "multiply";
         // clearDisplay();
         display.innerText += e.target.innerText;
         break;
      case '-':
         dotCounter = 0;
         if (display.innerText.length == 0) return;
         
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "+") return;
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "-") return;
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "/") return;
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "*") return;
         if (display.innerText.includes("+")) return;
         if (display.innerText.includes("-")) return;
         if (display.innerText.includes("/")) return;
         if (display.innerText.includes("*")) return;

         sign = "substract";
         // clearDisplay();
         display.innerText += e.target.innerText;
         break;
      case '+':
         dotCounter = 0;
         if (display.innerText.length == 0) return;
         
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "+") return;
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "-") return;
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "/") return;
         // if (display.innerText.split("")[display.innerText.split("").length-1] == "*") return;

         sign = "add";
         if (display.innerText.includes("+")) return;
         if (display.innerText.includes("-")) return;
         if (display.innerText.includes("/")) return;
         if (display.innerText.includes("*")) return;

         // let stringToCountArray = display.innerText.split("+");
         // if (stringToCountArray[1] != "") {
         //    equals.classList.add("ready");
         // }

         // clearDisplay();
         display.innerText += e.target.innerText;
         break;

      case "=":
         // if (!display.innerText.includes("+")) {
         //    if (display.innerText.includes(".") ) {
         //       return;
         //    }
         // }
         // if (!display.innerText.includes("-")) {
         //    if (display.innerText.includes(".") ) {
         //       return;
         //    }
         // }
         // if (!display.innerText.includes("*")) {
         //    if (display.innerText.includes(".") ) {
         //       return;
         //    }
         // }
         // if (!display.innerText.includes("/")) {
         //    if (display.innerText.includes(".") ) {
         //       return;
         //    }
         // }

         dotCounter = 0;

         if (display.innerText.includes("+")) {
            let stringToCountArray = display.innerText.split("+");
            firstOperand = stringToCountArray[0];
            secondOperand = stringToCountArray[1];
            display.innerText = calculate(firstOperand,secondOperand,sign);
         }
         if (display.innerText.includes("-")) {
            let stringToCountArray = display.innerText.split("-");
            firstOperand = stringToCountArray[0];
            secondOperand = stringToCountArray[1];
            display.innerText = calculate(firstOperand,secondOperand,sign);
         }
         if (display.innerText.includes("*")) {
            let stringToCountArray = display.innerText.split("*");
            firstOperand = stringToCountArray[0];
            secondOperand = stringToCountArray[1];
            display.innerText = calculate(firstOperand,secondOperand,sign);
         }
         if (display.innerText.includes("/")) {
            let stringToCountArray = display.innerText.split("/");
            firstOperand = stringToCountArray[0];
            secondOperand = stringToCountArray[1];
            display.innerText = calculate(firstOperand,secondOperand,sign);
         }
         ///////////////////////////////////////////////
         equals.classList.remove("ready");
         operators.forEach(operator => operator.classList.remove("blocked"));
         /////////////////////////////////////////////////
         break;
      case ".":

         if (!display.innerText.includes("+") &&
         !display.innerText.includes("-") &&
         !display.innerText.includes("*") &&
         !display.innerText.includes("/")) {
            if (display.innerText.includes(".") ) {
               return;
            }
         }
         // if (!display.innerText.includes("-")) {
         //    if (display.innerText.includes(".") ) {
         //       return;
         //    }
         // }
         // if (!display.innerText.includes("*")) {
         //    if (display.innerText.includes(".") ) {
         //       return;
         //    }
         // }
         // if (!display.innerText.includes("/")) {
         //    if (display.innerText.includes(".") ) {
         //       return;
         //    }
         // }

      // if (display.innerText.includes(".")) return;
      if (dotCounter > 0) return;
      dotCounter++;
/////////////////////////////////////////////////////////
      if (display.innerText.includes("+")){
         if (display.innerText.split("+")[1].includes(".")) return;
      }
      if (display.innerText.includes("-")){
         if (display.innerText.split("-")[1].includes(".")) return;
      }
      if (display.innerText.includes("/")){
         if (display.innerText.split("/")[1].includes(".")) return;
      }
      if (display.innerText.includes("*")){
         if (display.innerText.split("*")[1].includes(".")) return;
      }
      if (display.innerText[display.innerText.length-1] == ".") return;


////////////////////////////////////////////////////

      if (display.innerText == '') {
         display.innerText = `0${e.target.innerText}`;
      } else if (display.innerText[display.innerText.length-1] == "+") {
         display.innerText += `0${e.target.innerText}`;
      } else if (display.innerText[display.innerText.length-1] == "-") {
         display.innerText += `0${e.target.innerText}`;
      } else if (display.innerText[display.innerText.length-1] == "/") {
         display.innerText += `0${e.target.innerText}`;
      }
      else if (display.innerText[display.innerText.length-1] == "*") {
         display.innerText += `0${e.target.innerText}`;
      }
        else display.innerText += e.target.innerText;
      
         break;
      default:
         display.innerText += e.target.innerText;
   }
}))

const clearDisplay = () => {
   display.innerText = '';
   dotCounter = 0;
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