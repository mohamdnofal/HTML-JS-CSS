'use strict'; //Using a variable without declaring it, is not allowed
alert('you are welcome');
let correct=0;
let userName = prompt ('What is your name?');
if (userName !== '') {
  document.getElementById('userName').innerHTML='Hello ' + userName+', ';
  console.log('User Name is' + userName);
} else{
  console.log('User did not fill the name!');
}

let mohdCoach = prompt ('Is mohammad a swimming coach? yes/no');
mohdCoach=mohdCoach.toLowerCase();
if (mohdCoach === 'no' || mohdCoach === 'n') {
  correct+=1;
  alert('Perfict, Mohammad is an auditor');
  console.log('You right, Mohammad is an auditor');
} else {
  alert('wrong, Mohammad is an auditor');
  console.log('You wrong, Mohammad is an auditor');
}

let mohdUniversity = prompt ('Did mohammad studied at Jordan university? yes/no');
mohdUniversity= mohdUniversity.toLowerCase();
if (mohdUniversity === 'no' || mohdUniversity === 'n') {
  correct+=1;
  alert('Perfict, Mohammad studied at ASU');
  console.log('You right, Mohammad studied at ASU');
} else {
  alert('wrong, Mohammad studied at ASU');
  console.log('You wrong, Mohammad studied at ASU');
}

let mohdOld = prompt ('Mohammad is 26 years old? yes/no');
mohdOld=mohdOld.toLowerCase();
if (mohdOld === 'yes' || mohdOld === 'y') {
  correct+=1;
  alert('Perfict');
  console.log('You right, Mohammad is 26 years old ');
} else {
  alert('wrong, Mohammad is 26 years old');
  console.log('You wrong, Mohammad is 26 years old');
}

let workPlace = prompt ('Did Mohammad work at microfinance bank? yes/no');
workPlace=workPlace.toLowerCase();
if (workPlace === 'yes' || workPlace === 'y') {
  correct+=1;
  alert('Perfict');
  console.log('You right, Mohammad worked at microfinance bank');
} else {
  alert('wrong, Mohammad was working at microfinance bank');
  console.log('You wrong, Mohammad worked at microfinance bank');
}

let mohdDegree = prompt ('Does mohammad have an accounting BCs degree? yes/no');
mohdDegree=mohdDegree.toLowerCase();
if (mohdDegree === 'yes' || mohdDegree === 'y') {
  correct+=1;
  alert('Perfict');
  console.log('You right, Mohammad has an accounting BCs degree');
} else {
  alert('wrong, Mohammad has an accounting BCs degree');
  console.log('You wrong, Mohammad has an accounting BCs degree');
}

let mohdMeal;
for(let i=0; i<4; i++) {
  mohdMeal = prompt('Guess number between 1-100?',0);
  mohdMeal = parseInt (mohdMeal);
  if(mohdMeal === 50){
    correct+=1;
    alert('congrats');
    console.log('congrats');
    break;
  } else if (mohdMeal < 50){
    alert('too low');
    console.log('too low');
  }else if (mohdMeal > 50){
    alert('too high');
    console.log('too high');
  }
  if(i === 3){
    alert('this was your last chance! the correct answer is 50');
    console.log('this was your last chance! the correct answer is 50');
  }
}
// different solution
// let count=0;
// while (count<4) {
//   mohdMeal = prompt('Guess number between 1-100?',0);
//   mohdMeal = parseInt (mohdMeal);
//   if(mohdMeal === 50){
//     alert('congrats');
//     count = 4;
//   } else if (mohdMeal < 50){
//     alert('too low');
//   }else if (mohdMeal > 50){
//     alert('too high');
//   }
//   if(count === 3){
//     alert('this was your last chance! the correct answer is 50');
//   }
//   count++;
// }



let guessNum;
let correctNum= [1, 49, 30];
for(let i=0; i<6; i++) {
  guessNum = prompt('Guess 3 numbers between 1-100?',0);
  guessNum = parseInt (guessNum);
  if(correctNum.includes(guessNum)){
    correct+=1;
    alert('congrats');
    console.log('congrats');
    break;
  }
  if(i === 5){
    alert('this was your last chance! the correct answer is 50');
    console.log('this was your last chance! the correct answer is 50');
  }
}

alert ('you have answered '+correct+'quasitons correctly');
console.log('you have answered '+correct+'quasitons correctly');
