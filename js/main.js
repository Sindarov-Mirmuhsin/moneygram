var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elSelect = document.querySelector(".form__select");
var elResult = document.querySelector(".form__result");
var elBtn = document.querySelector(".form__btn");

var uzs = 10851.69;
var rubl = 79.61;
var evro = 0.88;

elForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var elInputVal = Number(elInput.value);
  var elSelectVal = Number(elSelect.value);
  var elResultVal = elInputVal * elSelectVal;
  
  
  
  if (elInputVal > 0) {
    elResult.textContent = (`${elResultVal}`);
  } else if (elInputVal < 0) {
    elResult.textContent = ("Iltimos 0 dan katta qiymat kiriting !");
  } else if (elInputVal = "") {
    elResult.textContent = ("Qiymat topilmadi Iltimos pul miqdorini kiriting !");
  } else if (elInputVal != Number) {
    elResult.textContent = ("Iltimos pul miqdorini raqam ko'rinishida kiriting !");
  }else{
    elResult.textContent = ("Iltimos qaytadan urinib ko'ring");
  }
})
