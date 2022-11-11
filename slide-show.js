slides = [...document.querySelectorAll(".frame")];

function changeSlide(pointer) {
  slides.forEach((slide) => {
    if (slide.id === pointer) {
      slide.style.color ='red';
    } else {
      slide.style.color = 'blue';
    }
  });
}

changeSlide("three");
