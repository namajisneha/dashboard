let btn = document.querySelector('.serach_filter_button')
let filter= document.querySelector('.filter_hid')
let names= document.querySelector('.names_div')
let btn1=document.querySelector('.serach_filter_buttona')
// btn.setAttribute("class","addsub")
filter.setAttribute("class","filterdiv")
btn .addEventListener("click",(e)=>{
    btn.style.display="none"
    filter.style.display="inline"
})
btn1.addEventListener('click',(el)=>{
    filter.style.display="none"
    filter.setAttribute("class","")
    names.setAttribute("class","namestran")
    // names.style.transition="margin-top 8s ease-in-out 5s" 
})