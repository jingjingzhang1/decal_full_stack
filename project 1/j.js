function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function generateRandomNumberOnClick() {
    const randomNumberElement = document.getElementById('randomNumber');
    const min = 1; // Set the minimum value
    const max = 100; // Set the maximum value
  
    const randomNum = getRandomNumber(min, max);
    randomNumberElement.textContent = `Random number: ${randomNum}`;
  }