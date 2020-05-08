import './less/index.less';

console.log('index');
console.log('----------------------------');

let oDiv = document.getElementsByClassName("box")[0];
let oP = document.createElement("p");
let txt = document.createTextNode("world");
oP.appendChild(txt);
oDiv.appendChild(oP);