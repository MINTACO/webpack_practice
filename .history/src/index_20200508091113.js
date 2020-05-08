import './less/index.less';

console.log('index');
console.log('----------------------------');

let oDiv = document.getElementsByClassName('wrapper')[0];
let oP = document.createElement('p');
oP.innerText = 'world';
oDiv.appendChild(oP);