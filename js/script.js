function validateForm(event) {
  event.preventDefault();

  const errorMessages = document.querySelectorAll('.error');
  errorMessages.forEach(message => message.textContent = '');

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const address = document.getElementById('address').value;
  const commune = document.getElementById('commune').value;
  const phone = document.getElementById('phone').value;
  const webpage = document.getElementById('webpage').value;
  const hobbies = document.getElementById('hobbies').value;

  let isValid = true;
  if (!email) {
    document.getElementById('email-error').textContent = 'Este campo es obligatorio.';
    isValid = false;
  } else if (!validateEmail(email)) {
    document.getElementById('email-error').textContent = 'Ingrese un correo electrónico válido.';
    isValid = false;
  }

  if (!password) {
    document.getElementById('password-error').textContent = 'Este campo es obligatorio.';
    isValid = false;
  } else if (!validatePassword(password)) {
    document.getElementById('password-error').textContent = 'La contraseña debe tener entre 3 y 6 caracteres y contener al menos un número y una letra.';
    isValid = false;
  }


  if (!confirmPassword) {
    document.getElementById('confirm-password-error').textContent = 'Este campo es obligatorio.';
    isValid = false;
  } else if (confirmPassword !== password) {
    document.getElementById('confirm-password-error').textContent = 'Las contraseñas no coinciden.';
    isValid = false;
  }


  if (!address) {
    document.getElementById('address-error').textContent = 'Este campo es obligatorio.';
    isValid = false;
  }


  if (!commune) {
    document.getElementById('commune-error').textContent = 'Seleccione una comuna.';
    isValid = false;
  }


  if (!phone) {
    document.getElementById('phone-error').textContent = 'Este campo es obligatorio.';
    isValid = false;
  } else if (!validatePhone(phone)) {
    document.getElementById('phone-error').textContent = 'Ingrese un número de teléfono válido.';
    isValid = false;
  }


  if (webpage && !validateURL(webpage)) {
    document.getElementById('webpage-error').textContent = 'Ingrese una URL válida.';
    isValid = false;
  }


  if (!hobbies) {
    document.getElementById('hobbies-error').textContent = 'Este campo es obligatorio.';
    isValid = false;
  } else if (hobbies.split(',').length < 2) {
    document.getElementById('hobbies-error').textContent = 'Ingrese al menos 2 hobbies separados por comas.';
    isValid = false;
  }

  if (isValid) {

    document.getElementById('success-message').textContent = '¡Registro exitoso!';

  }
}

function validateEmail(email) {

  const atIndex = email.indexOf('@');
  const dotIndex = email.lastIndexOf('.');
  return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

function validatePassword(password) {

  const hasLetter = /[a-zA-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  return password.length >= 3 && password.length <= 6 && hasLetter && hasDigit;
}

function validatePhone(phone) {

  return /^\d+$/.test(phone);
}

function validateURL(url) {
  
  return /^https?:\/\//.test(url);
}