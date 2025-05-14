document.addEventListener("DOMContentLoaded", () => {
  const cartPage = document.getElementById('cart-items');
  const totalItemsEl = document.getElementById('total-items');
  const totalCostEl = document.getElementById('total-cost');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cartPage) {
    cartPage.innerHTML = '';
    let total = 0;
    let totalCount = 0;

    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      const subtotal = (item.price * item.quantity).toFixed(2);

      itemDiv.innerHTML = `
        <img src="${item.image}" width="50" />
        <strong>${item.name}</strong><br>
        $${item.price} × ${item.quantity} = <strong>$${subtotal}</strong><br>
        <button onclick="increase(${index})">+</button>
        <button onclick="decrease(${index})">−</button>
        <button onclick="removeItem(${index})">🗑️ Remove</button>
        <hr>
      `;
      cartPage.appendChild(itemDiv);

      total += item.price * item.quantity;
      totalCount += item.quantity;
    });

    totalItemsEl.innerText = totalCount;
    totalCostEl.innerText = total.toFixed(2);
  }
});

function increase(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart[index].quantity += 1;
  localStorage.setItem('cart', JSON.stringify(cart));
  location.reload();
}

function decrease(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  location.reload();
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  location.reload();
}

