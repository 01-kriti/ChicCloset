
const users = JSON.parse(localStorage.getItem('users')) || [];

function toggleForms() {
    document.getElementById('signInForm').classList.toggle('hidden');
    document.getElementById('signUpForm').classList.toggle('hidden');
}

function signUp(event) {
    event.preventDefault();
    const name = document.getElementById('signUpName').value.trim();
    const email = document.getElementById('signUpEmail').value.trim();
    const password = document.getElementById('signUpPassword').value.trim();

    if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
    }

    if (users.find(user => user.email === email)) {
        alert('User already exists');
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign Up successful! You can now sign in.');
    toggleForms();
}

function signIn(event) {
    event.preventDefault();
    const email = document.getElementById('signInEmail').value.trim();
    const password = document.getElementById('signInPassword').value.trim();

    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert(`Welcome back, ${user.name}!`);
        window.location.href = 'homepage.html'; // Redirecting to homepage
    } else {
        alert('Invalid email or password');
    }
}

