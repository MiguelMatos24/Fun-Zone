function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var windowHeight = window.innerHeight;
  for (var i = 0; i < reveals.length; i++) {
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = document.querySelector(".reveal").offsetHeight;
    console.log(elementVisible);
    if (elementTop < windowHeight - 300) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
reveal();

window.addEventListener("scroll", reveal);
