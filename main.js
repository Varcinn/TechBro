// Hamburger
const burger = document.querySelector('nav .hamburger');
const burgerBar=[...document.querySelectorAll('.hamburger span')];
const menu = document.querySelector('nav ul');
const navBar= document.querySelector('nav');
const navElement= [...document.querySelectorAll('nav ul li a')];


burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})


function addBg() {
    const scrollHeight = window.scrollY;
    const sectionDistance = document.querySelector('header').offsetTop
    const sectionHeight = document.querySelector('header').clientHeight
    if (scrollHeight > sectionDistance + sectionHeight - 100) {
        navBar.classList.add('white');
        menu.classList.add('white');
        navElement.forEach((e)=>{
            e.classList.add('white');
        });
        burgerBar.forEach((e)=>{
            e.classList.add('white');
        });
        
        
    } else {
        navBar.classList.remove('white');
        menu.classList.remove('white');
        navElement.forEach((e)=>{
            e.classList.remove('white');
        });
        burgerBar.forEach((e)=>{
            e.classList.remove('white');
        });
        
        
    }
}
window.addEventListener('scroll', addBg)


//Safari
if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
{
   document.getElementsByTagName("header")[0].className += " safari";
}

//Typing
const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Witamy na naszej witrynie!', 'Zapraszamy do współpracy!', 'TechBro']
let indexTxt = 0;
let indexArray = 0;

const addLetter = () => {

    spnText.textContent += txt[indexArray][indexTxt];
    indexTxt++;

    if (txt[indexArray].length === indexTxt) {

        indexArray++;

        if (indexArray === txt.length) return
        return setTimeout(() => {
            spnText.textContent = '';
            indexTxt = 0;
            addLetter();
        }, 2000)

    }
    setTimeout(addLetter, 100)
}


addLetter();


const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);