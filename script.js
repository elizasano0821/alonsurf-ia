
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

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var mobile = document.getElementById("mobile").value.trim();
    var students = document.getElementById("students").value;

    var studentCount = Number(students);
    var ok = true;

    // Clear previous error messages
    showError("nameError", "");
    showError("mobileError", "");
    showError("studentsError", "");

    // Name validation
    if (name === "") {
      showError("nameError", "Please enter your name.");
      ok = false;
    }

    // Mobile validation
    if (mobile === "") {
      showError("mobileError", "Please enter your mobile number.");
      ok = false;
    }

    // Student number validation
    if (students === "") {
      showError("studentsError", "Please enter the number of students.");
      ok = false;
    } else if (
      !Number.isInteger(studentCount) ||
      studentCount < 1
    ) {
      showError(
        "studentsError",
        "Number of students must be at least 1."
      );
      ok = false;
    }

    // Submit booking only when all validations pass
    if (ok) {
      var thanks = document.getElementById("thanks");

      thanks.textContent =
        "Thank you, " + name +
        "! Your lesson is booked. We will text you to confirm.";

      thanks.style.display = "block";
    }
  });
}
