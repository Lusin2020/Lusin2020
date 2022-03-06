
const slides = document.querySelectorAll('.slide');

// for (const slide of slides){
//       slide.addEventListener('click', ()=>{
//         clearActiveClasses();

//         slide.classList.add('active');
//     })
// }

// function clearActiveClasses(){
//     slides.forEach((slide)=>{
//         slide.classList.remove('active');
//     })
// }



var ourSlide = 0;

setInterval(function slideShow(slide){
   
    document.querySelector('.container .slide.active').classList.remove('active');
    slides[ourSlide].classList.add('active');
    ourSlide++;

    if(ourSlide > slides.length-1){
        ourSlide = 0;
    } 
    
}, 2000);

