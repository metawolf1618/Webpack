import './styles/index.scss';
// Import the image directly so Webpack bundles it
import cardImageSrc from './assets/images/card-flip-card-image.png';

document.addEventListener('DOMContentLoaded', () => {
  let count = 0;
  const button = document.getElementById('counter-button');
  const counterValue = document.getElementById('counter-value');
  const imageBox = document.getElementById('image-box');

  // Dynamically create and insert the image element
  if (imageBox) {
    const img = document.createElement('img');
    img.src = cardImageSrc;
    img.alt = 'Card flip image';
    imageBox.appendChild(img);
  }

  button?.addEventListener('click', () => {
    count++;
    if (counterValue) {
      counterValue.textContent = count.toString();
    }
    console.log(`Button clicked ${count} times!`);
  });
});