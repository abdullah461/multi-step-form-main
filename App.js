var next1Btn = document.querySelector('.step-1')
var next2Btn = document.querySelector('.step-2')
var next3Btn = document.querySelector('.step-3')
var confirmBtn = document.querySelector('.step-4')

var back2Btn = document.querySelector('.step-2')
var back3Btn = document.querySelector('.step-3')
var back4Btn = document.querySelector('.step-4')

// Aside

var no1 = document.querySelector('.step .no1')
var no2 = document.querySelector('.step .no2')
var no3 = document.querySelector('.step .no3')
var no4 = document.querySelector('.step .no4')


function next1(){
    next2Btn.style.left = '-550px';
    next1Btn.style.visibility = 'hidden';
    no1.style.backgroundColor = "transparent";
    no1.style.border ='1px #fff solid' ;  
    no2.style.backgroundColor ='var(--numbg)';
    no2.style.border ='none';  
}
function next2(){
    next3Btn.style.left = '-1100px';
    next2Btn.style.visibility = 'hidden';
    no3.style.backgroundColor ='var(--numbg)';
    no3.style.border ='none';
    no2.style.backgroundColor = "transparent";
    no2.style.border ='1px #fff solid' ;
}
function next3(){
    next3Btn.style.visibility = 'hidden';
    confirmBtn.style.left = '-1640px';
    no4.style.backgroundColor ='var(--numbg)';
    no4.style.border ='none';
    no3.style.backgroundColor = "transparent";
    no3.style.border ='1px #fff solid' ;
}
// function next4(){
//     confirmBtn.style.left = '-450px';
// }
// back buttons
function back2(){
    next1Btn.style.visibility = 'visible';
    back2Btn.style.left = '0px';
    no2.style.backgroundColor = "transparent";
    no2.style.border ='1px #fff solid' ;  
    no1.style.backgroundColor ='var(--numbg)';
    no1.style.border ='none';
}
function back3(){
    back3Btn.style.left = '0px';
    next2Btn.style.visibility = 'visible';
    no3.style.backgroundColor = "transparent";
    no3.style.border ='1px #fff solid' ;
    no2.style.backgroundColor ='var(--numbg)';
    no2.style.border ='none';
}
function back4(){
    next3Btn.style.visibility = 'visible';
    back4Btn.style.left = '0px';
    no4.style.backgroundColor = "transparent";
    no4.style.border ='1px #fff solid' ;
    no3.style.backgroundColor ='var(--numbg)';
    no3.style.border ='none';
}