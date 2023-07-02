function storeData(event) {
    event.preventDefault();
  
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    const user = {
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value
    };
  
    // Store the user object in localStorage
    localStorage.setItem('user', JSON.stringify(user));
  
    // Reset the form fields
    usernameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
  
    // Call the function to show user on the screen
    showUserOnScreen(user);
  }
  
  function showUserOnScreen(obj) {
    const parentEle = document.getElementById('listOfitems');
    const childEle = document.createElement('li');
    childEle.textContent = obj.username + ' - ' + obj.email + ' - ' + obj.password;
    parentEle.appendChild(childEle);
  }
  