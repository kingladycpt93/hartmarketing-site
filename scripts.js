document.getElementById('year').textContent = new Date().getFullYear();

// Basic email gate for work emails
const emailInput = document.getElementById('email');
const form = document.getElementById('lead-form');
form.addEventListener('submit', (e) => {
  const email = emailInput.value.trim().toLowerCase();
  const personal = /(gmail|yahoo|hotmail|outlook|live|icloud)\.com$/i.test(email);
  if (personal) {
    e.preventDefault();
    alert('Please use your work email. Thanks.');
  }
});
