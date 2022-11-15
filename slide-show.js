const slides = [...document.querySelectorAll('.frame')];
const circles = [...document.querySelectorAll('.circle')];
let pointer = 0;

function changeSlide(pointer) {
  document.getElementById('carousel').style.setProperty('--current-slide', pointer);
 for(let i = 0; i<slides.length; i+=1){ 
    if (slides[i].id === pointer.toString()) {
      slides[i].style.backdropFilter = 'blur';
      circles[i].style.backgroundColor = '#941a1f';
    } else {
      slides[i].style.backdropFilter = 'none';
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

pointer = 2;
changeSlide(pointer);

setInterval(()=>changeSlide(goToNextSlide()), 2000 );
