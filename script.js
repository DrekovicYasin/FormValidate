const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

const inputs = [username, email, phone, password, repassword];

function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkEmail(input) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    input.value === '' ? error(input, 'Email is required.') :
        re.test(input.value) ? success(input) : error(input, 'Please enter a valid email address.');
}

function checkPhone(input) {
    const exp = /^\d{10}$/;
    input.value === '' ? error(input, 'Phone number is required.') :
        exp.test(input.value) ? success(input) : error(input, 'Phone number must be exactly 10 digits long.');
}

function checkLength(input, min, max) {
    input.value === '' ? error(input, `${input.id} is required.`) :
        input.value.length < min || input.value.length > max ? error(input, `${input.id} must be between ${min} and ${max} characters.`) :
            success(input);
}

function checkPasswordsMatch(pass1st, pass2nd) {
    if (pass1st.value === '' || pass2nd.value === '') {
        error(pass1st, 'Password is required.');
        error(pass2nd, 'Password is required.');
    } else if (pass1st.value !== pass2nd.value) {
        error(pass1st, 'Passwords do not match.');
        error(pass2nd, 'Passwords do not match.');
    } else {
        checkLength(pass1st, 5, 15);
        success(pass2nd);
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkLength(username, 5, 15);
    checkEmail(email);
    checkPhone(phone);
    checkPasswordsMatch(password, repassword);
});
