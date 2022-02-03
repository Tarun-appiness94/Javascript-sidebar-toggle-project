// Selecting the required elements
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// check for click event on toggle button
toggleBtn.addEventListener("click", function () {

  // toggle check for class show-sidebar
  sidebar.classList.toggle("show-sidebar");
});

// check for click event on close button
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
