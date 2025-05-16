function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 }); // ✅ fixed typo
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`); // ✅ backticks
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function removeFromCart(productID) {
  let cart = getCart().filter(item => item.id !== productID);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const cartItems = getCart();
  const cartContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartContainer.innerHTML = "";

  let total = 0;

  cartItems.forEach(item => {
    total += item.price * item.quantity;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <img src="${item.image}" width="80" />
      <p>${item.name}</p>
      <p>₹${item.price} x ${item.quantity}</p>
      <div class="quantity-controls">
        <button onclick="decrementQuantity(${item.id})">-</button>
        <span>${item.quantity}</span>
        <button onclick="incrementQuantity(${item.id})">+</button>
      </div>
      <p>Subtotal : ₹${item.price * item.quantity}</p>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    

    cartContainer.appendChild(itemDiv);
  });

  cartTotal.innerText = `Total: ₹${total}`; 
}
function incrementQuantity(id){
  let cart = getCart();
  const item = cart.find(p => p.id === id);
  if(item){
    item.quantity+=1;
    localStorage.setItem("cart",JSON.stringify(cart));
    renderCart();
  }
}
function decrementQuantity(id){
  let cart = getCart();
  const item = cart.find(p => p.id === id);
  if(item && item.quantity>1){
    item.quantity-=1;
    localStorage.setItem("cart",JSON.stringify(cart));
    renderCart();
  }else if(item && item.quantity === 1 ){
    removeFromCart(id);
  }
}
