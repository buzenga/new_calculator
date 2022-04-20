// const buttons = Array.from(document.querySelectorAll(".button"));
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

let firstOperand = '';
let secondOperand = '';
let sign = "";
let result = null;
let dotCounter = 0;
let resetDisplay = false;
//////////////////////////////////////////////////////
let resetDisplayAfterEquals = false;
let equalsWasUsed = false;
//////////////////////////////////////////////////////

buttons.forEach(button => button.addEventListener('click', (e) => {
//////////////////////////////////////////////////////////////
   if (resetDisplayAfterEquals == true) {
      display.innerText = '';
      resetDisplayAfterEquals = false;
      // return;
   }
//////////////////////////////////////////////////////////////////////
   switch(e.target.innerText) {
      case 'AC':
         clearDisplay();
         firstOperand = '';
         secondOperand = '';
         sign = "";
         break;
      case '/':

         //--------------------------------------------
         switch(equalsWasUsed) {
            case true :
               sign = "divide";
               equalsWasUsed = false;
               break;
            default:
               console.log("nic nie zmienilem w dzieleniu");
               break;
         }
         if (secondOperand = '') {
            sign = "divide";
         }
         //-----------------------------------

         if (firstOperand == '') {
            firstOperand = Number(display.innerText); 
            sign = "divide";
            clearDisplay();
            resetDisplay = true;
            secondOperand = '';
            return;
         } else {
            secondOperand = Number(display.innerText);
            calculate(firstOperand,secondOperand,sign);
            firstOperand = calculate(firstOperand,secondOperand,sign);
            sign = "divide";
            // clearDisplay();
            // display.innerText = calculate(firstOperand,secondOperand,sign);
            display.innerText = firstOperand;
            resetDisplay = true;
            secondOperand = '';
         break;
         }
      case '*':
         
         //--------------------------------------------
         switch(equalsWasUsed) {
            case true :
               sign = "multiply";
               equalsWasUsed = false;
               break;
            default:
               console.log("nic nie zmienilem w mnozeniu");
               break;
         }
         if (secondOperand = '') {
            sign = "multiply";
         }
         //-----------------------------------

         if (firstOperand == '') {
            firstOperand = Number(display.innerText); 
            sign = "multiply";
            clearDisplay();
            resetDisplay = true;
            secondOperand = '';
            return;
         } else {
            secondOperand = Number(display.innerText);
            calculate(firstOperand,secondOperand,sign);
            firstOperand = calculate(firstOperand,secondOperand,sign);
            sign = "multiply";
            // clearDisplay();
            // display.innerText = calculate(firstOperand,secondOperand,sign);
            display.innerText = firstOperand;
            resetDisplay = true;
            secondOperand = '';
         break;
         }
      case '-':
         // firstOperand = Number(display.innerText); 
         // sign = "substract";
         // clearDisplay();
         // break;

         switch(equalsWasUsed) {
            case true :
               sign = "substract";
               equalsWasUsed = false;
               break;
            default:
               console.log("nic nie zmienilem w minusie");
               break;
         }
         // if (equalsWasUsed == true) {
         //    equalsWasUsed = false;
         //    sign = "substract";
            
         // }
         //???????????????????????????????????????????????????
         if (secondOperand = '') {
            sign = "substract";
         }
         //???????????????????????????????????????????
         if (firstOperand == '') {
            firstOperand = Number(display.innerText); 
            sign = "substract";
            clearDisplay();
            resetDisplay = true;
            secondOperand = '';
            break;
         } else {
            secondOperand = Number(display.innerText);
            calculate(firstOperand,secondOperand,sign);

            firstOperand = calculate(firstOperand,secondOperand,sign);
            sign = "substract";



            // clearDisplay();
            // display.innerText = calculate(firstOperand,secondOperand,sign);
            display.innerText = firstOperand;
            resetDisplay = true;
            secondOperand = '';
         break;
         }
      case '+':
         switch(equalsWasUsed) {
            case true :
               sign = "add";
               equalsWasUsed = false;


               // clearDisplay();

               break;
            default:
               console.log("nic nie zmienilem w plusie");
               break;
         }
            // return;
            
            // console.log("equals zaczyna dzialać kiedy jest true")
            // sign = "add";

            // console.log(equalsWasUsed)
            // equalsWasUsed = false;
            // console.log("equalswasused powinno sie zmienic")
            // console.log(equalsWasUsed)
         // }

                  //???????????????????????????????????????????????????
                  if (secondOperand = '') {
                     sign = "add";
                  }
                  //???????????????????????????????????????????
         if (firstOperand == '') {
            firstOperand = Number(display.innerText); 
            sign = "add";
            clearDisplay();
            resetDisplay = true;
            secondOperand = '';
            return;
         } else {

            console.log("nie dziala")
            secondOperand = Number(display.innerText);
            calculate(firstOperand,secondOperand,sign);

            firstOperand = calculate(firstOperand,secondOperand,sign);
            sign = "add";




            // clearDisplay();
            // display.innerText = calculate(firstOperand,secondOperand,sign);
            display.innerText = firstOperand;
            resetDisplay = true;
            secondOperand = '';
         break;
         }
      case "=":
         // let secondOperandHolder = secondOperand;
         // if (secondOperandHolder == '') return;
         secondOperand = Number(display.innerText); 

         // calculate();
         display.innerText = calculate(firstOperand,secondOperand,sign);
         /////////////////////////////////////////////////////////////////////////
         firstOperand = calculate(firstOperand,secondOperand,sign);
         secondOperand = '';
         resetDisplayAfterEquals = true;
         equalsWasUsed = true;

         ////////////
         sign = '';
         //////////////////////////////////////////////////////////////////////////
         break;
      case ".":
      if (display.innerText.includes(".")) return;
      if (display.innerText == '') {
         display.innerText = `0${e.target.innerText}`;
      }
        else display.innerText += e.target.innerText;
      
         break;
      default:
         if (resetDisplay == true) {
            display.innerText = '';
            resetDisplay = false;
         }
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