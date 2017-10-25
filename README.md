# VanillaJsSlider

This is small prject with pure JavaScript and almost static code for building a slider with next/prev buttons and bullets for showing active slider.

## How to use Slider

#### Include script file.

```
<script type="text/javascript" src="/js/VanillaJsSlider.js"></script>
```

#### Place HTML code with path to your images.

```
<div class="content display_box" style="max-width:800px">
  <img class="slides animate_slide" src="img/1.png" style="width:100%">
  <img class="slides animate_slide" src="img/2.png" style="width:100%">
  <img class="slides animate_slide" src="img/3.png" style="width:100%">
  <img class="slides animate_slide" src="img/4.png" style="width:100%">
  
  <div class="control_panel container" style="width:100%">
    
    <div class="left_arrow " onclick="nextSlide(-1)">&#10094;</div>
    <div class="right_arrow" onclick="nextSlide(1)">&#10095;</div>
    
    <span class="badge slide_demo" onclick="currentSlide(1)"></span>
    <span class="badge slide_demo" onclick="currentSlide(2)"></span>
    <span class="badge slide_demo" onclick="currentSlide(3)"></span>
    <span class="badge slide_demo" onclick="currentSlide(4)"></span>
    
  </div>
</div>
```

Keep in mind that this is very simple sldier and bullets uses manuall insertion for slider to pass argumant to functions.
