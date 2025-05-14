// script.js

document.addEventListener("DOMContentLoaded", () => {
  const cartCount = document.getElementById('cart-count');
  const buttons = document.querySelectorAll('button');
  const products = document.querySelectorAll('.product');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cartCount) cartCount.innerText = cart.length;

  if (buttons.length) {
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
  }

  const cartPage = document.getElementById('cart-items');
  if (cartPage) {
    let total = 0;
    cart.forEach((item) => {
      const div = document.createElement('div');
      div.innerHTML = `<img src="${item.image}" width="50"> ${item.name} - $${item.price}`;
      cartPage.appendChild(div);
      total += item.price;
    });
    document.getElementById('total-items').innerText = cart.length;
    document.getElementById('total-cost').innerText = total.toFixed(2);
  }
});
