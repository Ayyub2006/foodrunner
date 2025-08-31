 const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const switchToSignUp = document.getElementById('switchToSignUp');
const switchToSignIn = document.getElementById('switchToSignIn');

// Switch between forms
switchToSignUp.addEventListener('click', () => {
    signInForm.classList.remove('active');
    signUpForm.classList.add('active');
    switchToSignUp.style.display = 'none';
    switchToSignIn.style.display = 'inline-block';
});

switchToSignIn.addEventListener('click', () => {
    signUpForm.classList.remove('active');
    signInForm.classList.add('active');
    switchToSignIn.style.display = 'none';
    switchToSignUp.style.display = 'inline-block';
});

// Handle Sign Up
document.getElementById('signUpFormElement').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const phone = document.getElementById('signupPhone').value;
    const password = document.getElementById('signupPassword').value;

    // Save to localStorage
    const userData = { name, email, phone, password };
    localStorage.setItem('user', JSON.stringify(userData));

    alert('✅ Registration successful! You can now login.');

    // Switch to Sign In form automatically
    signUpForm.classList.remove('active');
    signInForm.classList.add('active');
    switchToSignIn.style.display = 'none';
    switchToSignUp.style.display = 'inline-block';

    // Clear form fields
    this.reset();
});

// Handle Sign In
document.getElementById('signInFormElement').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
        alert('✅ Login successful! Welcome ' + savedUser.name);
        window.location.href = 'index.html';  // Redirect to index.html
    } else {
        alert('❌ Invalid email or password. Please try again.');
    }

    this.reset();
});
