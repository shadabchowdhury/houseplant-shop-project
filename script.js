document.addEventListener("DOMContentLoaded", () => {
  const cartCount = document.getElementById('cart-count');
  const buttons = document.querySelectorAll('.product button');
  const products = document.querySelectorAll('.product');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cartCount) cartCount.innerText = cart.length;

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const product = products[index];
      const item = {
        id: product.dataset.id,
        name: product.querySelector('p').innerText,
        price: parseFloat(product.querySelector('span').innerText.replace('$', '')),
        image: product.querySelector('img').src
      };
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
      btn.disabled = true;
      if (cartCount) cartCount.innerText = cart.length;
    });
  });
});
