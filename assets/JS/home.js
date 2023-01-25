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
let project_more = document.getElementsByClassName('project-more');
let delete_update = document.getElementsByClassName('delete-update');
let exit = document.getElementsByClassName('exit');

for(let i=0; i<project_more.length; i++){
    project_more[i].addEventListener('click' , ()=>{
        project_more[i].style.display = "none";
        delete_update[i].style.display = "flex";
    });
    exit[i].addEventListener('click' , ()=>{
        project_more[i].style.display = "block";
        delete_update[i].style.display = "none";
    });
}

// update part
let updateBtn = document.getElementsByClassName('update');
let updateForm = document.getElementsByClassName('update-project-form');
let project = document.getElementsByClassName('project');
let home_header = document.querySelector('.home-header');
for(let i=0; i<project_more.length; i++){
    updateBtn[i].addEventListener('click' , ()=>{
        updateForm[i].style.display = 'block';
        home_header.style.opacity = '0.2';
        for(let i=0; i<project.length; i++){
            project[i].style.opacity = "0.2";
        }
        
    });

    let updateForm_close = document.getElementsByClassName('update-project-head-focus-delete');

    updateForm_close[i].addEventListener('click' , ()=>{
        updateForm[i].style.display = 'none';
        home_header.style.opacity = '1';
        for(let i=0; i<project.length; i++){
            project[i].style.opacity = "1";
        }
    });
}

