const form = document.getElementById("registration-form");
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("reg-feedback");

// Live feedback while typing the password
passwordInput.addEventListener("input", function () {
    if (passwordInput.value.length > 0 && passwordInput.value.length < 8) {
        feedback.style.display = "block";
        feedback.style.backgroundColor = "#fbece4";
        feedback.style.color = "#a84a24";
        feedback.textContent = "Password must be at least 8 characters long.";
    } else {
        feedback.style.display = "none";
        feedback.textContent = "";
    }
});

// Validation on form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop default reload

    if (passwordInput.value.length < 8) {
        feedback.style.display = "block";
        feedback.style.backgroundColor = "#fbece4";
        feedback.style.color = "#a84a24";
        feedback.textContent = "Please enter a valid password (at least 8 characters) before submitting.";
        passwordInput.focus();
        return;
    }

    // Success message
    feedback.style.display = "block";
    feedback.style.backgroundColor = "#e2ece0";
    feedback.style.color = "#46543d";
    feedback.textContent = "Success! Form validated via JavaScript.";
});