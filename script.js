function pwdValidation() {
    let password = document.getElementById('password').value;
    let passwordInput = document.getElementById('password');

    let confirmPassword = document.getElementById('confirm-password').value;
    let confirmPwdInput = document.getElementById('confirm-password');

    if(password !== confirmPassword){
    passwordInput.className = 'error active';
    confirmPwdInput.className = 'error active';
    document.querySelector('.password-error').textContent = "* Passwords do not match";
    } else {
        passwordInput.className = 'error inactive';
        confirmPwdInput.className = 'error inactive';
        document.querySelector('.password-error').textContent = '';
    }
}

function errorInactive() {
    let passwordInput = document.getElementById('password');
    let confirmPwdInput = document.getElementById('confirm-password');
        passwordInput.className = 'error inactive';
        confirmPwdInput.className = 'error inactive';
}