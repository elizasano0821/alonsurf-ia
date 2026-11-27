// Alon Surf website script

// Show the test bar when the site is in the test environment
if (typeof APP_ENV !== "undefined" && APP_ENV === "test") {
  var bar = document.getElementById("env-bar");
  bar.textContent = "TEST ENVIRONMENT";
  bar.style.display = "block";
}

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

var form = document.getElementById("bookingForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value.trim();
  var mobile = document.getElementById("mobile").value.trim();
  var students = document.getElementById("students").value;
  var ok = true;

  if (name === "") {
    showError("nameError", "Please enter your name.");
    ok = false;
  }
  if (mobile === "") {
    showError("mobileError", "Please enter your mobile number.");
    ok = false;
  }
  if (students === "") {
    showError("studentsError", "Please enter the number of students.");
    ok = false;
  }

  if (ok) {
    var thanks = document.getElementById("thanks");
    thanks.textContent = "Thank you, " + name + "! Your lesson is booked. We will text you to confirm.";
    thanks.style.display = "block";
  }
});
