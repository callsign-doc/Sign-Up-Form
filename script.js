function validatePasswordField() {
    let passwordFieldValue = document.forms('password').value;
    let confirmPasswordFieldValue = document.forms('confirmPassword').value;

    if (passwordFieldValue !== confirmPasswordFieldValue) {
        alert('Password does not match!')
        return false;
    } else {
        return true;
    }
}