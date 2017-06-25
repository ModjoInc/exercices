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

function disapear(event) {
    let selElem = event.target;
    selElem.style['display'] = 'none';
}

function appear(event) {
    let selElem = event.target;
    selElem.style['display'] = 'block';
  }

let divD = document.querySelector('.container');

//



console.dir(divD);
