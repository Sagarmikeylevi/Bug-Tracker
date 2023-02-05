/* make filter button open and close */
let filter_button = document.querySelector('.filter-issues');
let filter_form = document.querySelector('.create-filter-form');
let issue_type = document.querySelector('.issue-type');
filter_button.addEventListener('click' , ()=>{
    console.log('click');
    filter_form.style.display = 'block';
    issue_type.style.opacity = '0.2';
});

let filter_formClose = document.querySelector('.create-filter-form-head-focus-delete');
filter_formClose.addEventListener('click' , ()=>{
    filter_form.style.display = 'none';
    issue_type.style.opacity = '1';
})
/* make filter button open and close end */
/* labels */
/* bug */
let bug_checkBox = document.querySelector('.create-filter-form-labels-types-bugs-check-box');
let bug_check = document.querySelector('#bugs_check');
let bug_isClick = false;

bug_checkBox.addEventListener('click' , ()=>{
    if(bug_isClick == false){
        bug_checkBox.style.background = '#008000';
        bug_checkBox.style.border = 'none';
        bug_check.style.display = 'block';
        bug_isClick = true;
    }
    else{
        bug_checkBox.style.background = 'transparent';
        bug_checkBox.style.border = '1.5px solid #00001a';
        bug_check.style.display = 'none';
        bug_isClick = false;
    }
});
/* bug end */
/* UI DESIGN */
let UI_checkBox = document.querySelector('.create-filter-form-labels-types-ui-design-check-box');
let UI_check = document.querySelector('#ui_check');
let UI_isClick = false;

UI_checkBox.addEventListener('click' , ()=>{
    if(UI_isClick == false){
        UI_checkBox.style.background = '#008000';
        UI_checkBox.style.border = 'none';
        UI_check.style.display = 'block';
        UI_isClick = true;
    }
    else{
        UI_checkBox.style.background = 'transparent';
        UI_checkBox.style.border = '1.5px solid #00001a';
        UI_check.style.display = 'none';
        UI_isClick = false;
    }
});
/* UI DESIGN end*/
/* documentation */
let doc_checkBox = document.querySelector('.create-filter-form-labels-types-documentation-check-box');
let doc_check = document.querySelector('#doc_check');
let doc_isClick = false;

doc_checkBox.addEventListener('click' , ()=>{
    if(doc_isClick == false){
        doc_checkBox.style.background = '#008000';
        doc_checkBox.style.border = 'none';
        doc_check.style.display = 'block';
        doc_isClick = true;
    }
    else{
        doc_checkBox.style.background = 'transparent';
        doc_checkBox.style.border = '1.5px solid #00001a';
        doc_check.style.display = 'none';
        doc_isClick = false;
    }
});
/* documentation end */

/* enhancement */
let enhancement_checkBox = document.querySelector('.create-filter-form-labels-types-enhancement-check-box');
let enhancement_check = document.querySelector('#enhancement_check');
let enhancement_isClick = false;

enhancement_checkBox.addEventListener('click' , ()=>{
    if(enhancement_isClick == false){
        enhancement_checkBox.style.background = '#008000';
        enhancement_checkBox.style.border = 'none';
        enhancement_check.style.display = 'block';
        enhancement_isClick = true;
    }
    else{
        enhancement_checkBox.style.background = 'transparent';
        enhancement_checkBox.style.border = '1.5px solid #00001a';
        enhancement_check.style.display = 'none';
        enhancement_isClick = false;
    }
});
/* enhancement end*/
/* duplicate */
let duplicate_checkBox = document.querySelector('.create-filter-form-labels-types-duplicate-check-box');
let duplicate_check = document.querySelector('#duplicate_check');
let duplicate_isClick = false;

duplicate_checkBox.addEventListener('click' , ()=>{
    if(duplicate_isClick == false){
        duplicate_checkBox.style.background = '#008000';
        duplicate_checkBox.style.border = 'none';
        duplicate_check.style.display = 'block';
        duplicate_isClick = true;
    }
    else{
        duplicate_checkBox.style.background = 'transparent';
        duplicate_checkBox.style.border = '1.5px solid #00001a';
        duplicate_check.style.display = 'none';
        duplicate_isClick = false;
    }
});
/* duplicate */
/* labels end */
/* Author */
let none_checkBox = document.querySelector('.create-filter-form-author-none-check-box');
let none_isClick = false;
none_checkBox.addEventListener('click' , ()=>{
    if(none_isClick == false){
        none_checkBox.style.background = '#008000';
        none_checkBox.style.border = 'none';
        none_isClick = true;
    }
    else{
        none_checkBox.style.background = 'transparent';
        none_checkBox.style.border = ' 1.5px solid #00001a';
        none_isClick = false;
    }
});
let austin_checkBox = document.querySelector('.create-filter-form-author-Austin-Blake-check-box');
let austin_isClick = false;
austin_checkBox.addEventListener('click' , ()=>{
    if(austin_isClick == false){
        austin_checkBox.style.background = '#008000';
        austin_checkBox.style.border = 'none';
        austin_isClick = true;
    }
    else{
        austin_checkBox.style.background = 'transparent';
        austin_checkBox.style.border = ' 1.5px solid #00001a';
        austin_isClick = false;
    }
});
/* Author end */

/* create issues */
let createIssueBtn = document.getElementById('new-rq-add');
let issueHead = document.getElementById('project-details-header');
let issueType = document.getElementById('issue-type');
let issueForm = document.getElementById('create-project-issue-form');
let issueFormDel = document.getElementById('create-project-issue-head-focus-delete');

createIssueBtn.addEventListener('click' , ()=>{
    issueHead.style.opacity = '0.1';
    issueType.style.opacity = '0.1';
    issueForm.style.display = 'block';
});

issueFormDel.addEventListener('click' , ()=>{
    issueHead.style.opacity = '1';
    issueType.style.opacity = '1';
    issueForm.style.display = 'none';
});

/* create issues end*/

/* new issue type style */
let NewissueTypeArray = document.getElementsByClassName('new-rq-body-details-issue-type');

for(let i = 0; i<NewissueTypeArray.length; i++){
    let issueName = NewissueTypeArray[i].getElementsByTagName('p');
    if(issueName[0].innerHTML == "BUGS"){
        NewissueTypeArray[i].classList.add('bugs');
    }
    if(issueName[0].innerHTML == "INVALID"){
        NewissueTypeArray[i].classList.add('invalid');
    }
    if(issueName[0].innerHTML == "DOCUMENTATION"){
        NewissueTypeArray[i].classList.add('documentation');
    }
    if(issueName[0].innerHTML == "ENHANCEMENT"){
        NewissueTypeArray[i].classList.add('enhancement');
    }
    if(issueName[0].innerHTML == "DUPLICATE"){
        NewissueTypeArray[i].classList.add('duplicate');
    }
}

let newRqTotal = document.getElementById('new-rq-total');
newRqTotal.innerHTML = NewissueTypeArray.length;

/* new issue type style end */
/* inprocess issue type */
let IPissueTypeArray = document.getElementsByClassName('in-progress-body-details-issue-type');

for(let i = 0; i<IPissueTypeArray.length; i++){
    let issueName = IPissueTypeArray[i].getElementsByTagName('p');
    if(issueName[0].innerHTML == "BUGS"){
        IPissueTypeArray[i].classList.add('bugs');
    }
    if(issueName[0].innerHTML == "INVALID"){
        IPissueTypeArray[i].classList.add('invalid');
    }
    if(issueName[0].innerHTML == "DOCUMENTATION"){
        IPissueTypeArray[i].classList.add('documentation');
    }
    if(issueName[0].innerHTML == "ENHANCEMENT"){
        IPissueTypeArray[i].classList.add('enhancement');
    }
    if(issueName[0].innerHTML == "DUPLICATE"){
        IPissueTypeArray[i].classList.add('duplicate');
    }

    let inProcessTotal = document.getElementById('inprocess-total');
    inProcessTotal.innerHTML = IPissueTypeArray.length;
}

/* inprocess issue type end */

/* completed issue type */
let CompletedissueTypeArray = document.getElementsByClassName('complete-body-details-issue-type');

for(let i = 0; i<CompletedissueTypeArray.length; i++){
    let issueName = CompletedissueTypeArray[i].getElementsByTagName('p');
    if(issueName[0].innerHTML == "BUGS"){
        CompletedissueTypeArray[i].classList.add('bugs');
    }
    if(issueName[0].innerHTML == "INVALID"){
        CompletedissueTypeArray[i].classList.add('invalid');
    }
    if(issueName[0].innerHTML == "DOCUMENTATION"){
        CompletedissueTypeArray[i].classList.add('documentation');
    }
    if(issueName[0].innerHTML == "ENHANCEMENT"){
        CompletedissueTypeArray[i].classList.add('enhancement');
    }
    if(issueName[0].innerHTML == "DUPLICATE"){
        CompletedissueTypeArray[i].classList.add('duplicate');
    }

    let completedTotal = document.getElementById('completed-total');
    completedTotal.innerHTML = CompletedissueTypeArray.length;
}
/* completed issue type end */

/* search issues */
// const searchInput = ;
const search = ()=>{
    const filter = document.getElementById('issue-search-bar-input').value.toUpperCase();
    const issueList = document.getElementById('new-rq-body');
    const newIssue = document.querySelectorAll('.new-rq-body-post');
    const IPissue = document.querySelectorAll('.in-progress-body-post');
    const completeIssue = document.querySelectorAll('.complete-body-post');
    const titleBar1 = document.querySelectorAll('.new-rq-body-details-issue-name');
    const titleBar2 = document.querySelectorAll('.in-progress-body-details-issue-name');
    const titleBar3 = document.querySelectorAll('.complete-body-details-issue-name');

    for(let i = 0; i<newIssue.length; i++){
        let title1 = titleBar1[i].getElementsByTagName('p')[0];
    
        if(title1){
            let textvalue1 = title1.textContent || title1.innerHTML;
            let text1 = textvalue1.toUpperCase().indexOf(filter);
            
            if((text1 > -1)){
                newIssue[i].style.display = "";
            }else{
                 newIssue[i].style.display = "none";
            }
        }
    }

    for(let i = 0; i<IPissue.length; i++){
        let title2 = titleBar2[i].getElementsByTagName('p')[0];
        if(title2){
            let textvalue2 = title2.textContent || title2.innerHTML;
            let text2 = textvalue2.toUpperCase().indexOf(filter);
            if((text2 > -1)){
                IPissue[i].style.display = "";
            }else{
                IPissue[i].style.display = "none";
            }
        }
    }

    for(let i = 0; i<completeIssue.length; i++){
        let title3 = titleBar3[i].getElementsByTagName('p')[0];
        if(title3){
            let textvalue3 = title3.textContent || title3.innerHTML;
            let text3 = textvalue3.toUpperCase().indexOf(filter);
            if((text3 > -1)){
                completeIssue[i].style.display = "";
            }else{
                completeIssue[i].style.display = "none";
            }
        }
    }
}
/* search issues end */






