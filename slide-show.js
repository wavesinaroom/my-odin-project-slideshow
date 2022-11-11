const slides = [...document.querySelectorAll('.frame')];
const circles = [...document.querySelectorAll('.circle')];
let pointer = 0;

function changeSlide(pointer) {
  slides.forEach((slide) => {
    console.log(pointer);
    if (slide.id === pointer.toString()) {
      slide.style.color ='red';
    } else {
      slide.style.color = 'blue';
    }
  });
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

