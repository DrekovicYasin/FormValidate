const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message) {
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message
    div.className = 'invalid-feedback'
}

function success(input) {
    input.className = 'form-control is-valid'
}

const checkEmail = (input) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ((input.value) === '') {
        error(input, `${input.id} is required.`);
    } else if (re.test(input.value)) {
        success(input);
    } else {
        error(input, 'Please enter a valid email address.')
    }
};

function checkPasswordsMatch() {
    if (password.value !== '' && repassword.value !== '') {
        if (password.value !== repassword.value) {
            error(repassword, 'Passwords do not match.');
        } else {
            success(repassword);
        }
    }
}

function checkRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value === '') {
            error(input, `${input.id} is required.`);
        } else {
            success(input);
        }
    })
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password, repassword]);
    checkEmail(email);
    checkPasswordsMatch();
    /*    if (username.value === '') {
            error(username, 'Username is required')
        } else {
            success(username)
        }
        if (email.value === '') {
            error(email, 'Email is required')
        } else if (!validateEmail(email.value)) {
            error(email, 'Please enter a valid email address')
        } else {
            success(email)
        }
        if (password.value === '') {
            error(password, 'Password is required')
        } else {
            success(password)
        }
        if (repassword.value === '') {
            error(repassword, 'Repassword is required')
        } else {
            success(repassword)
        }*/
});
