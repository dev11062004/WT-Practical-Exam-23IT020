
  
  const searchBox = document.querySelector('.input');
  const searchLogo = document.querySelector('.search-logo');

  searchLogo.addEventListener('click', function() {
    const query = searchBox.value.trim();
    if (query) {
      alert(`Searching for: ${query}`);
      
    } else {
      alert('Please enter a search term.');
    }
  });

  
  const loginBox = document.querySelector('.loginBox');
  const loginText = document.querySelector('.login');

  loginText.addEventListener('click', function() {
    if (loginBox.classList.contains('active')) {
      loginBox.classList.remove('active');
      loginText.textContent = 'Login';
    } else {
      loginBox.classList.add('active');
      loginText.textContent = 'Close';
    }
  });

  
  const buyNowButtons = document.querySelectorAll('.buyNowText');

  buyNowButtons.forEach(button => {
    button.addEventListener('click', function() {
      const itemDescription = this.previousElementSibling.textContent;
      alert(`You clicked on Buy Now for: ${itemDescription}`);
     
    });
  });