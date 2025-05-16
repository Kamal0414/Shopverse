const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    image: "images/headphones.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    image: "images/smartwatch.jpg",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1999,
    image: "images/mouse.jpg",
  }
];

const container = document.querySelector('.products-container');

products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  productCard.innerHTML = `
    <a href="product.html">
      <img src="${product.image}" alt="${product.name}" width="200" />
    </a>
    <a href="product.html"><h3>${product.name}</h3></a>
    <p>₹${product.price}</p>
    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
  `;

  container.appendChild(productCard);
});

// Add to Cart logic
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    const id = parseInt(e.target.getAttribute("data-id"));
    const product = products.find(p => p.id === id);
    if (product) {
      addToCart(product);
    }
  }
});
