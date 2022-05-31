var header = document.querySelector(".header").getBoundingClientRect().bottom;
var firstItem =document.querySelector(".title");
document.addEventListener("DOMContentLoaded", getElements());

function getElements(){
    var elms = document.getElementsByTagName("*");
    return(elms);
}
var elms = getElements();

console.log(elms[35]);
console.log(elms)
function filter(){
    var kgj =[];
    var j=0
    for(var i=0;i<elms.length;i++){
        var filter = elms[i].getBoundingClientRect().top;
        if ((filter>header) && elms[i].className.match('visible')){
           kgj[j]=i;
           j++;
        }
    }
    return(kgj);
};
let collElms=filter();
console.log(elms[35]);

function fadeOut(){
    //console.log(collElms) 
    //console.log(elms[35].style.opacity);
    //console.log(elms[38]);
    //console.log(elms[39]);
   // console.log(elms[collElms[i]]);
    for(var i=0;i<collElms.length;i++){
        let collapse = elms[collElms[i]].getBoundingClientRect().top;
        
        // console.log(collapse);
        if (collapse<header){
        //   console.log[elms[38]]
            console.log(elms)
           console.log(collElms);
           console.log(collElms[i]);
           console.log(elms[35]) 
           console.log(elms[collElms[i]]); 
              
        gsap.to(elms[collElms[i]],{opacity:0.15});
             
    } else{
            gsap.to(elms[collElms[i]],{opacity:1});
        }
    }
    
};
//console.log(elms[35].style.opacity);
document.addEventListener('scroll',fadeOut);

function validateContactForm(){
    var formName=document.querySelector('#fname');
    var formLastName=document.querySelector('#lname');
    var mail=document.querySelector('#mail'); 
    var phone=document.querySelector('#phone');
    var comments=document.querySelector('#comments');
    var button=document.querySelector('#Send');

    if(formName.value==""){
        formName.style.border="2px solid red";
        formName.focus();
        }   
        else if(formLastName.value==""){
        formLastName.style.border="2px solid red";
        formLastName.focus();
        }
        else if (mail.value==""){
        mail.style.border="2px solid red";
        mail.focus();
        }
        else if(phone.value==""){
        alert('Are you sure you want me to contact you via email? Usually, communication is more fluid via cellphone.');
        }
    };