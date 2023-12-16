document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const scrollButton = document.getElementById("scrollBtn");

  searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value;
    alert("You searched for: " + searchTerm);
    // You can replace the alert with your specific search functionality.
  });
});

// Show/hide scroll button based on scroll position
window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});

// Scroll to the top when the button is clicked
scrollButton.addEventListener("click", function () {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
