let btn = document.querySelector('.add_but');
let names = document.querySelector('.items_main_div');
let btn2 = document.querySelector('#close_ico')

names.style.display = "none";

btn.addEventListener("click", (e) => {
  // btn.style.display = "none";
  names.style.display = "block"; // or "inline" depending on the element type
});
btn2.addEventListener('click',()=>{
  names.style.display = "none";
})



let btn3= document.querySelector('.add_but00');
let namesa= document.querySelector('.items_main_diva');
let btn4 = document.querySelector('#close_icoa')

namesa.style.display = "none";

btn3.addEventListener("click", (e) => {
  // btn.style.display = "none";
  namesa.style.display = "block"; // or "inline" depending on the element type
});
btn4.addEventListener('click',()=>{
  namesa.style.display = "none";
})


// let btn5= document.querySelector('.add_but00');
// let namesa= document.querySelector('.items_main_diva');
// let btn6 = document.querySelector('#close_icoa')

// namesa.style.display = "none";

// btn3.addEventListener("click", (e) => {
//   // btn.style.display = "none";
//   namesa.style.display = "block"; // or "inline" depending on the element type
// });
// btn4.addEventListener('click',()=>{
//   namesa.style.display = "none";
// })



