const fileInput = document.getElementById('fileInput');

const profileImage = document.getElementById('profileImage');

const modal = document.getElementById('passwordModal');

const passwordInput = document.getElementById('passwordInput');

const errorMsg = document.getElementById('errorMsg');

const correctPassword = "1234";

// Load saved profile image

const savedImage = localStorage.getItem("profileImage");

if (savedImage) {

  profileImage.src = savedImage;

}

// Show password modal

function showModal() {

  modal.style.display = 'flex';

  passwordInput.value = '';

  errorMsg.textContent = '';

  passwordInput.focus();

}

// Check password

function checkPassword() {

  if (passwordInput.value === correctPassword) {

    modal.style.display = 'none';

    fileInput.click();

  } else {

    errorMsg.textContent = "Incorrect password!";

  }

}

// Handle file input change

fileInput.addEventListener('change', function () {

  const file = this.files[0];

  if (file && file.type.startsWith('image/')) {

    const reader = new FileReader();

    reader.onload = function (e) {

      profileImage.src = e.target.result;

      localStorage.setItem("profileImage", e.target.result);

    };

    reader.readAsDataURL(file);

  } else {

    alert("Please select a valid image file.");

  }

});

// Close modal on outside click

window.onclick = function(e) {

  if (e.target === modal) modal.style.display = "none";

};

// Tab navigation

const tabButtons = document.querySelectorAll('.tab-btn');

const tabSections = document.querySelectorAll('section');

tabButtons.forEach(btn => {

  btn.addEventListener('click', () => {

    document.querySelector('.tab-btn.active').classList.remove('active');

    btn.classList.add('active');

    tabSections.forEach(section => section.classList.remove('active'));

    document.getElementById(btn.getAttribute('data-tab')).classList.add('active');

  });

});

// Dark mode toggle

function toggleDarkMode() {

  document.body.classList.toggle('dark-mode');

  const btn = document.querySelector('.dark-toggle');

  btn.textContent = document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";

}