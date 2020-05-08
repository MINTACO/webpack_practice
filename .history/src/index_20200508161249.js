import './less/index.less';

console.log('index');
console.log('----------------------------');

document.addEventListener('DOMContentLoaded', function(){
    let oDiv = document.getElementsByClassName("box")[0];
    let oP = document.createElement("p");
    let txt = document.createTextNode("world");
    oP.appendChild(txt);
    oDiv.appendChild(oP);
}, false)
