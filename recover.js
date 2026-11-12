const form = document.getElementById("recovery-form");
const finderName = document.getElementById("finder-name");
const finderContact = document.getElementById("finder-contact");
const itemLocation = document.getElementById("item-location");
const feedback = document.getElementById("form-feedback");

finderName.addEventListener("input", function () {
    if (finderName.value.trim().length > 0 && finderName.value.trim().length < 2) {
        feedback.textContent = "Name must be at least 2 characters.";
        feedback.className = "form-feedback error";
    } else {
        feedback.textContent = "";
        feedback.className = "form-feedback";
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = finderName.value.trim();
    const contactValue = finderContact.value.trim();
    const locationValue = itemLocation.value.trim();

    if (nameValue.length < 2) {
        feedback.textContent = "Please enter your name (at least 2 characters).";
        feedback.className = "form-feedback error";
        finderName.focus();
        return;
    }

    if (contactValue.length < 5) {
        feedback.textContent = "Please enter a valid email or phone number.";
        feedback.className = "form-feedback error";
        finderContact.focus();
        return;
    }

    if (locationValue.length < 3) {
        feedback.textContent = "Please enter where the item is currently kept.";
        feedback.className = "form-feedback error";
        itemLocation.focus();
        return;
    }

    feedback.textContent = "Thank you, " + nameValue + "! Your recovery note has been sent to the owner.";
    feedback.className = "form-feedback success";
    form.reset();
});