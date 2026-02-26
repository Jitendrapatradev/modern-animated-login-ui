// Smooth input animation
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("focus", () => input.classList.add("active"));
  input.addEventListener("blur", () => {
    if (input.value === "") input.classList.remove("active");
  });
});
