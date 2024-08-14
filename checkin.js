document.getElementById('checkin-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get the input values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  // Create a new entry
  const checkinEntry = `${firstName} ${lastName}`;

  // Retrieve existing check-ins from local storage
  let checkins = JSON.parse(localStorage.getItem('checkins')) || [];

  // Add the new entry
  checkins.push(checkinEntry);

  // Save back to local storage
  localStorage.setItem('checkins', JSON.stringify(checkins));

  // Clear the form inputs
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';

  // Show confirmation message
  const confirmationMessage = document.getElementById('confirmation-message');
  confirmationMessage.style.display = 'block';

  // Hide confirmation message after a few seconds
  setTimeout(() => {
      confirmationMessage.style.display = 'none';
  }, 3000);
});
