//callback

/*let handleClick = function(event) {
  alert("Hello");
}

let bouton = document.querySelector('h2');
bouton.addEventListener('click', handleClick);
console.dir(handleClick);
//time
let int = setInterval(function() {
  myTimer()
}, 1000);

function myTimer() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  document.getElementById('demo').innerHTML = t;
}

function stopFunction() {
  clearInterval(int);
}
*/
let divD = document.querySelectorAll('.container');
console.dir(divD);

for (let i = 0; i < divD.length; i++) {
  this.addEventListener('mouseenter', disapear, false);
  this.addEventListener('mouseout', appear, false);
function disapear(event) {
    let di= event.target
    di.style['display'] = 'none';

}

function appear(event) {
  let di= event.target
    di.style['display'] = 'block';

}

  divD[i].addEventListener('mouseenter', disapear, false);
  divD[i].addEventListener('mouseout', appear, false);
}
