// var menu = document.getElementById("menu");
// var menuBtn = document.getElementById("menuBtn");
// var body = document.body;
// menuBtn.onclick = function () {
//   menu.classList.toggle("active");
//   menuBtn.classList.toggle("active");
//   body.classList.toggle("active");
// };
// window.onclick = function (event) {
//   if (event.target == menu) {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   }
// };

// slider
$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 1000,
	arrows:  false,
	fade: true,
	cssEase: 'linear'
});
  // slider end
  
  /// wow js
  var wow = new WOW({
	boxClass: "wow",
	animateClass: "animated",
	offset: 0,
	mobile: true,
	live: true,
	scrollContainer: null,
	resetAnimation: true,
  });
  wow.init();
  
  // wow 
  