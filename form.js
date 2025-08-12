// Show welcome alert when page load
window.addEventListener("load", function() {
  alert("Welcome! Please fill out the registration form.");
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const department = document.getElementById("department").value.trim();
  const year = document.getElementById("year").value;
  const project = document.getElementById("project").value.trim();

  if (!name || !email || !department || !year || !project) {
    alert("Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Registration Successful");

  // Clear the form after successful registration
  document.getElementById("registrationForm").reset();
});

// Extra Feature: Click Me Button to Change Form Theme
const clickMeBtn = document.createElement("button");
clickMeBtn.textContent = "Click Me";
clickMeBtn.style.marginTop = "10px";
clickMeBtn.type = "button"; // Prevent form submission
clickMeBtn.classList.add("submit-btn");
document.querySelector(".form-container").appendChild(clickMeBtn);

clickMeBtn.addEventListener("click", function() {
  document.querySelector(".form-container").style.backgroundColor =
    "#" + Math.floor(Math.random()*16777215).toString(16);
  document.querySelector(".form-container h2").textContent = "Theme Changed!";
});
