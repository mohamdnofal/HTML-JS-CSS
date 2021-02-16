'use strict'; //Using a variable without declaring it, is not allowed
alert('you are welcome');

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
  alert('Perfict, Mohammad is an auditor');
  console.log('You right, Mohammad is an auditor');
} else { 
  alert('wrong, Mohammad is an auditor');
  console.log('You wrong, Mohammad is an auditor');
}

let mohdUniversity = prompt ('Did mohammad studied at Jordan university? yes/no');
mohdUniversity= mohdUniversity.toLowerCase();
if (mohdUniversity === 'no' || mohdUniversity === 'n') {
  alert('Perfict, Mohammad studied at ASU');
  console.log('You right, Mohammad studied at ASU');
} else { 
  alert('wrong, Mohammad studied at ASU');
  console.log('You wrong, Mohammad studied at ASU');
}

let mohdOld = prompt ('Mohammad is 26 years old? yes/no');
mohdOld=mohdOld.toLowerCase();
if (mohdOld === 'yes' || mohdOld === 'y') {
  alert('Perfict');
  console.log('You right, Mohammad is 26 years old ');
} else { 
  alert('wrong, Mohammad is 26 years old');
  console.log('You wrong, Mohammad is 26 years old');
}

let workPlace = prompt ('Did Mohammad work at microfinance bank? yes/no');
workPlace=workPlace.toLowerCase();
if (workPlace === 'yes' || workPlace === 'y') {
  alert('Perfict');
  console.log('You right, Mohammad worked at microfinance bank');
} else { 
  alert('wrong, Mohammad was working at microfinance bank');
  console.log('You wrong, Mohammad worked at microfinance bank');
}

let mohdDegree = prompt ('Does mohammad have an accounting BCs degree? yes/no');
mohdDegree=mohdDegree.toLowerCase();
if (mohdDegree === 'yes' || mohdDegree === 'y') {
  alert('Perfict');
  console.log('You right, Mohammad has an accounting BCs degree');
} else { 
  alert('wrong, Mohammad has an accounting BCs degree');
  console.log('You wrong, Mohammad has an accounting BCs degree');
}
