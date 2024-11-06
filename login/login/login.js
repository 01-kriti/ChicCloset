document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('signInEmail');
    const passwordInput = document.getElementById('signInPassword');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        emailInput.classList.remove('error');
        passwordInput.classList.remove('error');
        errorMessage.textContent = '';
        
        let isValid = true;

        if (!isValidEmail(emailInput.value)) {
            emailInput.classList.add('error');
            errorMessage.textContent += 'Please enter a valid email address. ';
            isValid = false;
        }

        if (passwordInput.value.length < 6) {
            passwordInput.classList.add('error');
            errorMessage.textContent += 'Password must be at least 6 characters long. ';
            isValid = false;
        }

        if (isValid) {
            alert('Form is valid! Proceeding with sign in...');
        } else {
            errorMessage.style.display = 'block';
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
