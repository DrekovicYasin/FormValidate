const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const registerButton = document.querySelector('.btn-primary');

function error(input, message) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (input.value === '') {
        error(input, 'Email is required.');
    } else if (re.test(input.value)) {
        success(input);
    } else {
        error(input, 'Please enter a valid email address.');
    }
}

function checkPasswordLength(input) {
    if (input.value === '') {
        error(input, 'Password is required.');
    } else if (input.value.length < 5 || input.value.length > 15) {
        error(input, 'Password must be between 5 and 15 characters.');
    } else {
        success(input);
    }
}

function checkPasswordsMatch(pass1st, pass2nd) {
    if (pass1st.value === '') {
        error(pass1st, 'Password is required.');
    } else if (pass1st.value.length < 5 || pass1st.value.length > 15) {
        error(pass1st, 'Password must be between 5 and 15 characters.');
    } else {
        success(pass1st);
    }

    if (pass2nd.value === '') {
        error(pass2nd, 'Password is required.');
    } else if (pass1st.value !== pass2nd.value) {
        error(pass2nd, 'Passwords do not match.');
    } else if (pass2nd.value.length >= 5 && pass2nd.value.length <= 15) {
        success(pass2nd);
    }
}

function checkRequired(input) {
    if (input.value.trim() === '') {
        error(input, `${input.id} is required.`);
    } else {
        success(input);
    }
}

function checkUsername(input) {
    if (input.value.trim() === '') {
        error(input, 'Username is required.');
    } else if (input.value.length < 5 || input.value.length > 15) {
        error(input, 'Username must be between 5 and 15 characters.');
    } else {
        success(input);
    }
}

function checkPhone(input) {
    const exp = /^\d{10}$/;
    if (input.value === '') {
        error(input, 'Phone number is required.');
    } else if (!exp.test(input.value)) {
        error(input, 'Phone number must be exactly 10 digits long.');
    } else {
        success(input);
    }
}

username.addEventListener('input', function () {
    checkUsername(this);
});

email.addEventListener('input', function () {
    checkEmail(this);
});

phone.addEventListener('input', function () {
    checkPhone(this);
});

password.addEventListener('input', function () {
    checkPasswordLength(this);
    checkPasswordsMatch(password, repassword);
});

repassword.addEventListener('input', function () {
    checkPasswordsMatch(password, this);
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkUsername(username);
    checkEmail(email);
    checkPhone(phone);
    checkPasswordLength(password);
    checkPasswordsMatch(password, repassword);

    if (
        username.classList.contains('is-valid') &&
        email.classList.contains('is-valid') &&
        phone.classList.contains('is-valid') &&
        password.classList.contains('is-valid') &&
        repassword.classList.contains('is-valid')
    ) {
        registerButton.classList.remove('btn-primary', 'btn-danger');
        registerButton.classList.add('btn-success');
        registerButton.innerHTML = 'Registered!';
    } else {
        registerButton.classList.remove('btn-primary', 'btn-success');
        registerButton.classList.add('btn-danger');
    }

    setTimeout(function () {
        registerButton.innerHTML = 'Register';
        registerButton.classList.remove('btn-success', 'btn-danger');
        registerButton.classList.add('btn-primary');
    }, 2000);
});
