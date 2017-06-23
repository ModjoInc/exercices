//EXERCICES 1



let body = document.body;
body.classList.remove('bg-aqua');
body.classList.add('bg-olive');

let firstP = document.getElementById('first-paragraph');
firstP.classList.remove('bg-lime','gray');
firstP.classList.add('aqua');

let silver = document.querySelector('.bg-silver');
silver.classList.add('bg-teal');
silver.classList.remove('bg-silver');

//changer classe dans un nodelist
let blockQ = document.querySelectorAll('blockquote'), i;
for (i=0;i<blockQ.length; ++i) {
  blockQ[i].classList.add('bg-white');
}
//******************************************************
//EXERCICES 2
let myTable=document.querySelector('#my-table');
myTable.classList.add('bg-purple');

let pCont = document.querySelectorAll('.container p');
for (let i = 0; i < pCont.length; i++) {
  pCont[i].classList.add('shadow');
}
//***************************************************
//EXERCICES 3
let preCo = document.querySelectorAll('pre');
for (let j = 0; j < preCo.length; j++) {
  preCo[j].style.color = 'blue';
  preCo[j].style.backgroundColor = 'gray';
  preCo[j].style.borderTop = '3px solid red';
  preCo[j].style.borderBottom = '3px solid red';
}

let header3 = document.querySelector('h3:first-of-type');
header3.innerHTML = '<em>Italic title ! yeah !</em>';

let header2 = document.querySelector('h2:first-of-type');
header2.style.color ='white';
header2.innerHTML = '<strong>HTML doens\'t work !</strong>';
//*****************************************************
//EXERCICE 4 : Création d'éléments
let ul1= document.querySelector('ul:first-of-type');
let li1 = document.createElement('li');
ul1 = ul1.appendChild(li1);
ul1 = ul1.innerHTML = 'Mon meilleur ami est <a href=\'http://www.google.com\'>Google</a>\'';
let link1 = document.querySelector('li:last-of-type a');
link1.style.color = 'white';
//**************************************************
//EXERCICE 4 : Création et suppression de plusieurs éléments
let ol2 = document.querySelector('ol');
let ol1 = ol2.children;
while ( ol1.length ) {
  ol2.removeChild( ol2.children[0] );
}

let array1 = ["Silent Teacher","Code Monkey", "CodeCombat"];
for (let l = 0; l < array1.length; l++) {
  let arrayLi = document.createElement('li');
  arrayLi.innerHTML = array1[l];
  ol2.appendChild(arrayLi);
}
