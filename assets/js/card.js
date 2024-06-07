let number = document.querySelector("#number");
let namew = document.querySelector("#namew");
let ay = document.querySelector("#ay");
let yil = document.querySelector("#yil");
let backnumber = document.querySelector("#backnumber");
let nameinput = document.querySelector("#nameinput");
let cardnumber = document.querySelector("#cardnumber");
let inputay = document.querySelector("#inputay");
let inputyil = document.querySelector("#inputyil");
let cvc = document.querySelector("#cvc");
let button = document.querySelector("#button");

function handlinkclick() {
  namew.innerText = nameinput.value;
  number.innerText = cardnumber.value;
  ay.innerText = inputay.value;
  yil.innerText = inputyil.value;
  backnumber.innerText = cvc.value;
}

nameinput.addEventListener("keyup", handlinkclick);
cardnumber.addEventListener("keyup", handlinkclick);
inputyil.addEventListener("keyup", handlinkclick);
cvc.addEventListener("keyup", handlinkclick);





