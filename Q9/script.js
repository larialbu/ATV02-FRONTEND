const btn = document.querySelector('.btn');
const numbersDiv = document.querySelector('.numbers');

btn.addEventListener('click', () => {
  numbersDiv.innerHTML = '';

  for (let i = 1; i <= 50; i += 2) {
    const number = document.createElement('span');
    number.textContent = `${i} `;
    numbersDiv.appendChild(number);
  }
});
