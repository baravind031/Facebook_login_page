// Get DOM elements
const loginForm = document.getElementById('loginForm');
const signupModal = document.getElementById('signupModal');
const signupForm = document.getElementById('signupForm');
const signupLink = document.querySelector('.signup-link');
const closeModalButton = document.querySelector('.close');

// Event listener for login form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorDiv = document.getElementById('error');

  if (username === '' && password === '') {
    errorDiv.innerText = 'Username or password is empty';
  } else {
    // Perform login logic here
    // For demonstration purposes, we'll just log the values
    console.log('Username:', username);
    console.log('Password:', password);
    errorDiv.innerText = '';
  }
});

// Function to open the sign up modal
function openModal() {
  signupModal.style.display = 'block';
}

// Function to close the sign up modal
function closeModal() {
  signupModal.style.display = 'none';
}

// Event listener for sign up link click
signupLink.addEventListener('click', openModal);

// Event listener for close modal button click
closeModalButton.addEventListener('click', closeModal);

// Event listener for sign up form submission
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const fullName = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const signupUsername = document.getElementById('signupUsername').value;
  const signupPassword = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Perform sign up logic here
  // For demonstration purposes, we'll just log the values
  console.log('Full Name:', fullName);
  console.log('Email:', email);
  console.log('Username:', signupUsername);
  console.log('Password:', signupPassword);
  console.log('Confirm Password:', confirmPassword);

  // Clear the sign up form
  signupForm.reset();
  closeModal();
});
