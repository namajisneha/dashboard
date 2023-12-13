let btn=document.querySelector('.add_task')
let add=document.querySelector('.kan_addtask_main_div')
let maincon=document.querySelector('.kanban_main_div')
let maincon2=document.querySelector('.content_container')
let nav=document.querySelector('nav')

add.style.display="none"
btn.addEventListener('click',()=>{
    maincon.setAttribute('id','maincontain')
    maincon2.setAttribute('id','maincontain')
    add.setAttribute('id','add_task_div')
    add.style.display="block"
    add.style.backgroundcolor="black"
    nav.setAttribute('id','navigation')
})