import getData from "./request.js";
import { updateUI } from "./updateUI.js";
const  input = document.querySelector(".form__input")

const form = document.getElementById("form");
const API = "https://countries-api-v7sn.onrender.com/countries?limit=250";

getData(API)
  .then((data) => {
    updateUI(data.data);
  })
  .catch((error) => {
    console.log(error);
  });

input.addEventListener("input" , ()=>{
  const inputVal = input.value.toLowerCase()
  const countriesTitles = document.querySelectorAll(".cards__title")
  
  countriesTitles.forEach((item) => {
    if(item.textContent.toLowerCase().includes(inputVal)){
      item.parentElement.parentElement.classList.remove("hidden")
    }else{
      item.parentElement.parentElement.classList.add("hidden")
    }
  })
})


