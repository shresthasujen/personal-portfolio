window.onload = function() {
  const elements = document.querySelectorAll(".animate");

  let delay = 0;
  elements.forEach(function(element) {
    setTimeout(function() {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, delay);
    delay += 500;
  });
};
