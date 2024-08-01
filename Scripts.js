document.addEventListener('DOMContentLoaded', () => {
    // Handle Login Form Submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (email === 'test@example.com' && password === 'password') {
                alert('Login successful');
                window.location.href = 'store.html';
            } else {
                alert('Invalid email or password');
            }
        });
    }

    // Handle Signup Form Submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (username && email && password) {
                alert('Signup successful');
                window.location.href = 'login.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Handle Store Page (Simple Cart Functionality)
    const buyButtons = document.querySelectorAll('.buy-button');
    if (buyButtons.length > 0) {
        buyButtons.forEach(button => {
            button.addEventListener('click', function () {
                alert('Game added to cart');
            });
        });
    }
});
