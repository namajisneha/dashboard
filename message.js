// let btn =document.querySelector('#chat_dots')
// let btn2=document.querySelector('.dash_button3a')
// let first=document.querySelector('.main_page')
// let second=document.querySelector('.main_pager')

// // second.style.display="none"
// btn.addEventListener("click",()=>{
//     second.setAttribute('id','mainsendpage')
//     // second.style.display="block"
//     first.style.display="none"
// })

// btn2.addEventListener('click',()=>{
//     first.style.display="block"
// //     // second.setAttribute('id','')
// })



// let btn = document.querySelector('#chat_dots');
// let btn2 = document.querySelector('.dash_button3a');
// let first = document.querySelector('.main_page');
// let second = document.querySelector('.main_pager');

// btn.addEventListener("click", () => {
//     second.setAttribute('id', 'mainsendpage');
//     first.style.display = "none";
//     second.style.display = "block"; // Show the 'second' element
// });

// btn2.addEventListener('click', () => {
//     second.removeAttribute('id', 'mainsendpage');
//     second.style.display = "none"; // Hide the 'second' element
//     first.style.display = "block"; // Show the 'first' element
// });


let btn = document.querySelector('#chat_dots');
let btn2 = document.querySelector('.dash_button3a');
let first = document.querySelector('.main_page');
let second = document.querySelector('.main_pager');

second.style.display = "none";
btn.addEventListener("click", () => {
    first.style.display = "none";
    second.style.display = "flex"; // Show the 'second' element
});

btn2.addEventListener('click', () => {
    second.style.display = "none"; // Hide the 'second' element
    first.style.display = "flex"; // Show the 'first' element
});


// let div1=document.querySelector('.chat_heading4')
// let div2=document.querySelector('.main_long_div_links')
// let btn4=document.querySelector('.chat_file_btn2')

// div2.style.display="none"
// // div2.style.display="block"

// btn4.addEventListener('click',()=>{
//     div1.style.display="none";
//     div2.style.display="block"
// })



let btn3= document.querySelector('.chat_file_btn2')
let link=document.querySelector('.main_long_div_links')
let file=document.querySelector('.chat_heading4')

link.style.display ="none"

btn3.addEventListener('click',()=>{
    file.style.display="none"
    link.style.display ="block"
})