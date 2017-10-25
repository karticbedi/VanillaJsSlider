var slideCount = 1;
moveSlider(slideCount);

function nextSlide(n) {
  moveSlider(slideCount += n);
}

function currentSlide(n) {
  moveSlider(slideCount = n);
}

function moveSlider(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("slide_demo");
  if (n > x.length) {slideCount = 1}    
  if (n < 1) {slideCount = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active_dot", "");
  }
  x[slideCount-1].style.display = "block";  
  dots[slideCount-1].className += " active_dot";
	/*setTimeout(function() {
		 moveSlider(slideCount+=1);
	}, 2000)*/
}