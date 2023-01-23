// console.log("hello there");

/* open and close project form */
let create_project_bar = document.querySelector('.create-project');
let craete_project_form = document.querySelector('.craete-project-form');
let home_page = document.querySelector('.home-page');
create_project_bar.addEventListener('click' , ()=>{
    craete_project_form.style.display = "block";
    home_page.style.opacity = "0.2";
});

let project_form_close = document.querySelector('.create-project-head-focus-delete');
project_form_close.addEventListener('click' , ()=>{
    craete_project_form.style.display = "none";
    home_page.style.opacity = "1";
})
/* open and close project form end */

/* open and close project more icon */
let project_more = document.querySelector('.project-more');
let delete_update = document.querySelector('.delete-update');

project_more.addEventListener('click' , ()=>{
    project_more.style.display = "none";
    delete_update.style.display = "flex";
});

let exit = document.querySelector('.exit');

exit.addEventListener('click' , ()=>{
    project_more.style.display = "block";
    delete_update.style.display = "none";
})