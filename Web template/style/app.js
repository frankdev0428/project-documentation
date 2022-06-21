const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn =  document.querySelectorAll('.control');
const  allSections = document.querySelector('.main-content')

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length ; i++){
        sectBtn[i].addEventListener('click',() => {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += 'active-btn'
        })
    }
}

PageTransitions()