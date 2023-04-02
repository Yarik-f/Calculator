let num1 = '';
let num2 = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

const out = document.querySelector('.calc-screen p'),
      ac = document.querySelector('.ac'),
      btns = document.querySelector('.buttons');

function clearAll(){
  num1 = "";
  num2 = "";
  sign = "";
  finish = false;
  out.textContent = 0;
  console.log("Good");
}

ac.addEventListener('click', clearAll);

btns.addEventListener('click', (e)=>{
  if(!e.target.classList.contains('btn')) return;
  if(e.target.classList.contains('ac')) return;
    
  out.textContent = '';
  
  const item = e.target.textContent;
  
  if(digit.includes(item)){
    if(num2 === '' && sign === ''){
      num1 += item;   
      out.textContent = num1; 
    }else if(num1 !== '' && num2 !== '' && finish){
      num2 = item;
      finish = false;
      out.textContent = num2;
    }
    else{
      num2 += item;
      out.textContent = num2;
    }
  }

  if(action.includes(item)){
    sign = item;
    out.textContent = sign;
  }
  if (item === '=') {
    if(num2 === '') num2 = num1;
    switch (sign) {
      case "+":
        num1 = +num1 + +num2;
        break;
      case "-":
        num1 = +num1 - +num2;
        break;
      case "X":
        num1 = +num1 * +num2;
        break;
      case "/":
        if(num2 === '0'){
          out.textContent = 'Error';
          num1 = '';
          num2 = '';
          sign = '';
          return;
        }else{
          num1 = +num1 / +num2;
        }
        break;
    }
    finish = true;
    out.textContent = num1;
  }
})