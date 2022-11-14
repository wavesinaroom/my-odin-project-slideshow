const slides = [...document.querySelectorAll('.frame')];
const circles = [...document.querySelectorAll('.circle')];
let pointer = 0;

function changeSlide(pointer) {
 for(let i = 0; i<slides.length; i+=1){ 
      slides[i].firstElementChild.style.border = 'solid';
    if (slides[i].id === pointer.toString()) {
      slides[i].firstElementChild.style.borderColor ='red';
      circles[i].style.backgroundColor = 'orange';
    } else {
      slides[i].firstElementChild.style.borderColor = 'blue';
      circles[i].backgroundColor = 'transparent';
    }
  }
}

function goToNextSlide(){
  if(pointer===slides.length-1){
    pointer = 0;
    return pointer;
  }else{
    return pointer+=1;
  }
}

function goToPreviousSlide(){
  if(pointer===0){
    pointer = slides.length-1;
    return pointer; 
  }else{
    return pointer-=1;
  }
}

document.getElementById('next').addEventListener('click', ()=>{
  changeSlide(goToNextSlide());
});

document.getElementById('previous').addEventListener('click', ()=>{
  changeSlide(goToPreviousSlide());
});

circles.forEach((circle)=>{
  circle.addEventListener('click', ()=>{
    pointer = parseInt(circle.id);
    changeSlide(parseInt(pointer));
  });
});

pointer = 2;
changeSlide(pointer);

document.body.style.backgroundColor = 'green';

setInterval(()=>changeSlide(goToNextSlide()), 2000 );
