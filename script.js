let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', e => {
    if (validatePasswordField()) {
        //default: submit
    } else {
        e.preventDefault;
    }
});

function validatePasswordField() {
    let passwordFieldValue = document.getElementById('password').value;
    let confirmPasswordFieldValue = document.getElementById('confirmPassword').value;

    if (passwordFieldValue !== confirmPasswordFieldValue) {
        alert('Password does not match!')
        return false;
    } else {
        return true;
    }
}

