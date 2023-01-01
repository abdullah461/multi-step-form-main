var next1Btn = document.querySelector('.step-1')
var next2Btn = document.querySelector('.step-2')
var next3Btn = document.querySelector('.step-3')
var confirmBtn = document.querySelector('.step-4')

var back2Btn = document.querySelector('.step-2')
var back3Btn = document.querySelector('.step-3')
var back4Btn = document.querySelector('.step-4')


function next1(){
    next1Btn.style.left = '-850px';
    next2Btn.style.left = '-450px';
    // next.style.visibility = 'none';
}
function next2(){
    next3Btn.style.left = '-850px';
    next2Btn.style.left = '-1300px';
}
function next3(){
    next3Btn.style.left = '-1750px';
    confirmBtn.style.left = '-1350px';
}
// function next4(){
//     confirmBtn.style.left = '-450px';
// }
// back buttons
function back2(){
    next1Btn.style.left = '0px';
    back2Btn.style.left = '400px';
}
function back3(){
    back3Btn.style.left = '0px';
    next2Btn.style.left = '-450px';
}
function back4(){
    next3Btn.style.left = '-850px';
    back4Btn.style.left = '0px';
}