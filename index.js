// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800,
	speedAsDuration: true
});

// Collapsible
var coll = document.getElementsByClassName("hiking-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
