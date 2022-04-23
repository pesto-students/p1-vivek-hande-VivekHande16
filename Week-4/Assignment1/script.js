let num;
let state;
const time = 2;
const err = "not divisible by 5";

const STATE = {
  PENDING: 'PENDING',
  RESOLVED: 'RESOLVED',
  REJECTED: 'REJECTED',
}

/* getNumber() function set the state to 'PENDING'and calculate the random number. 
   If the number is multiple of 5 then resolves the custom promise(funcResolve()) else reject the custom promise(funcReject()).
*/

const getNumber = () => {
  state = STATE.PENDING;
  num = Math.random() * 100;

  console.log(`Current STATE is ${state} and it will get resolved/rejected in ${time} secounds`);
  
  setTimeout( () => {
    if( num.toFixed() % 5 === 0 ) return funcResolve(num.toFixed());
    else return funcReject(`${num.toFixed()} is ${err}.`);
  }, time * 1000)

};

/* This function updates the state to "RESOLVED" and prints the output to console */
const funcResolve = num1 => { 
  state = STATE.RESOLVED;
  console.log(`Now STATE is ${state}`);
  console.log(`${num1} is divisible by 5.`)  
};

/* This function updates the state to "REJECTED" and prints the output to console */
const funcReject = err => { 
  state = STATE.REJECTED;
  console.log(`Now STATE is ${state}`);
  console.log(err) 
};
   
/* Execute the getNumber() function. */
getNumber();