document.addEventListener('DOMContentLoaded', function() {
  const adminSection = document.getElementById('admin-section');
  const adminLogin = document.getElementById('admin-login');

  // Check if the admin is already logged in
  if (localStorage.getItem('adminLoggedIn') === 'true') {
      showAdminSection();
  } else {
      adminLogin.style.display = 'block';
  }

  document.getElementById('admin-button').addEventListener('click', function() {
      const password = document.getElementById('admin-password').value;

      // Check if the password is correct
      if (password === '123') { // Change 'yourAdminPassword' to your actual password
          localStorage.setItem('adminLoggedIn', 'true');
          showAdminSection();
      } else {
          alert('Incorrect password!');
      }
  });

  function showAdminSection() {
      adminSection.style.display = 'block';
      adminLogin.style.display = 'none';

      // Retrieve check-ins from local storage
      let checkins = JSON.parse(localStorage.getItem('checkins')) || [];

      // Display the check-in list
      const checkinList = document.getElementById('checkin-list');
      checkinList.innerHTML = '';
      checkins.forEach(entry => {
          const li = document.createElement('li');
          li.textContent = entry;
          checkinList.appendChild(li);
      });
  }
});
