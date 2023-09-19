

const body = document.querySelector("body");
const darkBtn = document.querySelector(".header__dark-mode");


let request = true
darkBtn.addEventListener("click", function() {
    if(request) {
        body.classList.add("dark-mode")
    }else {
        body.classList.remove("dark-mode")
    }
    request = !request
})
















// let request = true;
// darkBtn.addEventListener("click", function () {
//   if (request) {
//     body.classList.add("dark-mode");
//   } else {
//     body.classList.remove("dark-mode");
//   }
//   request = !request;
// });




