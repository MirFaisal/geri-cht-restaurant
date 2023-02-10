var cursor = document.querySelector(".cursor");
var cursor_inner = document.querySelector(".cursor-inner");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor_inner.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;"
});
