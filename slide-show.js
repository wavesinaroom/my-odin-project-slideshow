const slides = [...document.querySelectorAll('.frame')];
const circles = [...document.querySelectorAll('.circle')];
let pointer = 0;

function changeSlide(pointer) {
 for(let i = 0; i<slides.length; i+=1){ 
    if (slides[i].id === pointer.toString()) {
      slides[i].style.color ='red';
      circles[i].style.backgroundColor = 'orange';
    } else {
      slides[i].style.color = 'blue';
      circles[i].style.backgroundColor = 'transparent';
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

changeSlide(2);

document.body.style.backgroundColor = 'green';
