const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginFeedback = document.getElementById("login-feedback");

loginPassword.addEventListener("input", function () {
    if (loginPassword.value.length > 0 && loginPassword.value.length < 8) {
        loginFeedback.textContent = "Password must be at least 8 characters.";
        loginFeedback.className = "form-feedback error";
    } else {
        loginFeedback.textContent = "";
        loginFeedback.className = "form-feedback";
    }
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value;

    if (!emailValue.includes("@") || !emailValue.includes(".")) {
        loginFeedback.textContent = "Please enter a valid email address.";
        loginFeedback.className = "form-feedback error";
        loginEmail.focus();
        return;
    }

    if (passwordValue.length < 8) {
        loginFeedback.textContent = "Password must be at least 8 characters long.";
        loginFeedback.className = "form-feedback error";
        loginPassword.focus();
        return;
    }

    loginFeedback.textContent = "Login verified! Redirecting to dashboard...";
    loginFeedback.className = "form-feedback success";

    setTimeout(function () {
        window.location.href = "dashboard.html";
    }, 800);
});