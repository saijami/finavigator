document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const loginModal = document.getElementById('loginModal');
  const closeModal = document.querySelector('.modal-content .close');
  const loginForm = document.getElementById('loginForm');
  const dashboardSection = document.getElementById('dashboard');
  const exploreBtn = document.getElementById('exploreBtn');

  // Show login modal when Login button is clicked
  loginBtn.addEventListener('click', function () {
    loginModal.classList.remove('hidden');
  });

  // Close modal when the close icon is clicked
  closeModal.addEventListener('click', function () {
    loginModal.classList.add('hidden');
  });

  // Login form submission
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'sai' && password === 'mypassword') {
      alert('Login successful!');
      loginModal.classList.add('hidden');
      // Show the dashboard and adjust button visibility
      dashboardSection.classList.remove('hidden');
      loginBtn.classList.add('hidden');
      logoutBtn.classList.remove('hidden');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });

  // Logout functionality
  logoutBtn.addEventListener('click', function () {
    dashboardSection.classList.add('hidden');
    loginBtn.classList.remove('hidden');
    logoutBtn.classList.add('hidden');
    alert('You have been logged out.');
  });

  // Explore Dashboard button behavior
  exploreBtn.addEventListener('click', function () {
    if (loginBtn.classList.contains('hidden')) {
      // User is already logged in – scroll to dashboard
      dashboardSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Prompt user to log in
      loginModal.classList.remove('hidden');
    }
  });

  // Contact form submission handling
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
  });
});
