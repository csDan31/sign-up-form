function pwdValidation() {
    let password = document.getElementById('password').value;
    let passwordInput = document.getElementById('password');

    let confirmPassword = document.getElementById('confirm-password').value;
    let confirmPwdInput = document.getElementById('confirm-password');

    if(password !== confirmPassword){
    passwordInput.className = 'error active';
    confirmPwdInput.className = 'error active';
    passwordInput.textContent = "* Passwords do not match";
    }
}
