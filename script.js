// script.js
document.querySelectorAll(".service-box").forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.transform = "translateY(-15px)";
    box.style.transition = "transform 0.4s ease";
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "translateY(0)";
  });
});
