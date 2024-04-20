const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('username-error');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phone-error');
const phoneSuccess = document.getElementById('phone-success');

function validateEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    // Regular expression for basic phone number validation
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function validateUsername(e) {
    e.preventDefault();
    const username = usernameInput.value.trim();
    if (username === '') {
    usernameInput.classList.remove('success');
    usernameInput.classList.add('error');
    usernameError.textContent = 'Username is required';
    } else {
    usernameInput.classList.remove('error');
    usernameInput.classList.add('success');
    usernameError.textContent = '';
    }
}

function validateEmailInput(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (email === '') {
    emailInput.classList.remove('success');
    emailInput.classList.add('error');
    emailError.textContent = 'Email is required';
    } else if (!validateEmail(email)) {
    emailInput.classList.remove('success');
    emailInput.classList.add('error');
    emailError.textContent = 'Invalid email format';
    } else {
    emailInput.classList.remove('error');
    emailInput.classList.add('success');
    emailError.textContent = '';
    }
}

function validatePhoneInput(e) {
    e.preventDefault();
    const phone = phoneInput.value.trim();
    if (phone === '') {
    phoneInput.classList.remove('success');
    phoneInput.classList.add('error');
    phoneError.textContent = 'Phone number is required';
    phoneSuccess.textContent = '';
    } else if (!validatePhone(phone)) {
    phoneInput.classList.remove('success');
    phoneInput.classList.add('error');
    phoneError.textContent = 'Invalid phone number format';
    phoneSuccess.textContent = '';
    } else {
    phoneInput.classList.remove('error');
    phoneInput.classList.add('success');
    phoneError.textContent = '';
    phoneSuccess.textContent = 'Phone number is valid';
    }
}

usernameInput.addEventListener('blur', validateUsername);
emailInput.addEventListener('blur', validateEmailInput);
phoneInput.addEventListener('blur', validatePhoneInput);