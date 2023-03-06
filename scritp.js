const randomNumber = Math.floor(Math.random() * 10) + 1;

let numGuesses = 0;

document.getElementById('submit').addEventListener('click', function() {
  const guess = parseInt(document.getElementById('guess').value);
  if (isNaN(guess) || guess < 1 || guess > 10) {
	document.getElementById('result').textContent = 'Por favor ingresa un número entre 1 y 10.';
	return;
  }
  numGuesses++;
  if (numGuesses > 3) {
	document.getElementById('result').textContent = `Lo siento, ya no tienes más intentos. El número era ${randomNumber}.`;
	return;
  }
  if (guess === randomNumber) {
	document.getElementById('result').textContent = '¡Adivinaste!';
	document.getElementById('guesses').textContent = `Número de intentos: ${numGuesses}`;
  } else {
	const message = guess < randomNumber ? 'Muy bajo.' : 'Muy alto.';
	document.getElementById('result').textContent = message;
	document.getElementById('guesses').textContent = `Número de intentos: ${numGuesses}`;
  }
});