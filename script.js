document.querySelector('#search-btn').onclick = () =>{
    document.querySelector('.search-bar-container').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('.search-bar-container').classList.remove('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
} 
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.bodycontainer');
let formclose = document.querySelector('#loginclose');

formBtn.addEventListener('click', ()=>{
    loginForm.classList.add('active')
});
formclose.addEventListener('click', ()=>{
    loginForm.classList.remove('active')
}); 
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('.bodycontainer');

signupBtn.onclick = function(){
    formBx.classList.add('active')    
    body.classList.add('active')
}
signinBtn.onclick = function(){
    formBx.classList.remove('active')    
}

// validation
function validation(){

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;

    var usercheck = /^[A-Za-z. ]{3,30}$/ ;
    var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/ ;
    var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

    if(usercheck.test(username)){
        document.getElementById('usererror').innerHTML = " ";
    }else{
        document.getElementById('usererror').innerHTML = "** This field is required ";
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML = " ";
    }else{
        document.getElementById('emailerror').innerHTML = "** Please Enter Email Id ";
        return false;
    }

    if(passwordcheck.test(password)){
        document.getElementById('passworderror').innerHTML = " ";
    }else{
        document.getElementById('passworderror').innerHTML = "** Use minimum of 8 including Upper & Lower-case, Numbers & special symbols]";
        return false;
    }

    if(cpassword.match(password)){
        document.getElementById('cpassworderror').innerHTML = " ";
    }else{
        document.getElementById('cpassworderror').innerHTML = "** Please Enter Confirm Password ";
        return false;
    }

}
// ------------contact validation

function contactvalidations(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var contactmail = document.getElementById('contactmail').value;
    var contactmobile = document.getElementById('contactmobile').value;

    var userchecks = /^[A-Za-z. ]{3,30}$/ ;
    var emailchecks = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var mobilechecks = /^[23456789][0-9]{9}$/;

    if(userchecks.test(firstname)){
        document.getElementById('firsterror').innerHTML = " ";
    }else{
        document.getElementById('firsterror').innerHTML = "** This field is required ";
        return false;
    }

    if(userchecks.test(lastname)){
        document.getElementById('lasterror').innerHTML = " ";
    }else{
        document.getElementById('lasterror').innerHTML = "** This field is required ";
        return false;
    }

    if(emailchecks.test(contactmail)){
        document.getElementById('cemailerror').innerHTML = " ";
    }else{
        document.getElementById('cemailerror').innerHTML = "** Please Enter Email Id ";
        return false;
    }

    if(mobilechecks.test(contactmobile)){
        document.getElementById('mobileerror').innerHTML = " ";
    }else{
        document.getElementById('mobileerror').innerHTML = "** Please Enter Mobile Number ";
        return false;
    }

}

//========= captcha
var allValue = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0',]

var cVal1 = allValue[Math.floor(Math.random()*allValue.length)];
var cVal2 = allValue[Math.floor(Math.random()*allValue.length)];
var cVal3 = allValue[Math.floor(Math.random()*allValue.length)];
var cVal4 = allValue[Math.floor(Math.random()*allValue.length)];
var cVal5 = allValue[Math.floor(Math.random()*allValue.length)];
var cVal6 = allValue[Math.floor(Math.random()*allValue.length)];

var cValue = cVal1+cVal2+cVal3+cVal4+cVal5+cVal6;
//===== alert(cValue)

captchaValue.innerHTML = cValue;

thisValue = "";
inputCaptcha.addEventListener('change',function(){
    thisValue = inputCaptcha.value;
    //====== alert(thisValue)
})

submitbutton.addEventListener('click',function(){
    if(cValue == thisValue){
        // alert('Successfully Registered');
        document.getElementById('captchaerror').innerHTML = " ";
        document.captchaform.submit();
    }else if(inputCaptcha.value == ""){
        // alert('Please Enter The correct Captcha Try Again !')
        document.getElementById('captchaerror').innerHTML = "invalid Captcha ";
        return false;
        document.captchaform.submit();
        
    }else{
        // alert('Please Enter The Correct Captcha Try Again !')
        document.getElementById('captchaerror').innerHTML = "invalid Captcha ";
        return false;
        document.captchaform.submit();
        
    }
})

// ====================

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader) 
const clip = document.querySelectorAll('.clip'); /* */
for (let i = 0; i<clip.length; i++){
    clip[i].addEventListener('mouseenter',
    function(e){
        clip[i].play()
    })
    clip[i].addEventListener('mouseout',
    function(e){
        clip[i].pause()
    })
}    

var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};
var prjct_slides = document.querySelectorAll('.pslide');
var butns = document.querySelectorAll('.butn');
let currentSlide = 1;
//script for image slider manual navigation
var manualNav = function(manual){
    prjct_slides.forEach((slide) => {
        slide.classList.remove('active');

        butns.forEach((butn) => {
            butn.classList.remove('active');
        });
        
    });
    prjct_slides[manual].classList.add('active');
    butns[manual].classList.add('active');
    
}

butns.forEach((butn, i) => {
    butn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

var repeat = function(activeClass){
    let active = document.getElementsByClassName('pslideactive');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {    
                activeSlide.classList.remove('pslideactive');
            });
            prjct_slides[i].classList.add('active');
            butns[i].classList.add('active');
            i++;

            if( prjct_slides.length == i){
                i = 0;
            }
            if(i >= prjct_slides.length){
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();

//scrollup top 
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
// 200 viewport
    if(this.scrollY >= 200) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollup)

//scroll active link  **********

// const sections = document.querySelectorAll('section[id]')
// function scrollActive(){
//     const scrollY = window.pageYOffset
//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         const navbarId = current.getAttribute('id')   /*sectionId - navbar */

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.navbar a[href*=' + navbarId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.navbar a[href*=' + navbarId +']').classList.remove('active-link')
//         }
        
//     })
// }
// window.addEventListener('scroll', scrollActive) 
//Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fas fa-sun'

// precviously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' :  'light' 
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fas fa-moon' :  'fas fa-sun' 

// we validate if the user previously choose a topic 
if(selectedTheme){
    //if validation is fullfiled, we ask that issue know if activated or deactivated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fas fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate theme with manually button
themeButton.addEventListener('click', () => {
    // add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selectedIcon', getCurrentIcon())
})


// ================ scroll Reveal Animation ===============
// const sr = ScrollReveal({
//     distance: '60px',
//     duration: 2800,
//     reset: true,

// })
// sr.reveal(`.home__data, home__social-link`,{
//     origin: 'top',
//     interval: 100,
// })

