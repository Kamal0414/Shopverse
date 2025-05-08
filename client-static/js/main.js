const products = [
    {
        id:1,
        name:"Wireless Headphones",
        price:2999,
        image:"images/headphones.jpg",
    },
    {
        id:2,
        name:"Smart Watch",
        price:4999 ,
        image:"images/smartwatch.jpg",
    },
    {
        id:3,
        name:"Gaming Mouse",
        price:1999,
        image:"images/mouse.jpg",
    }
];
const container = document.querySelector('.products-container');
products.forEach(product => {
    container.innerHTML += `
    <div class="product-card">
        <img src="${product.image}" alt="${product.name}" width="200"/>
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <a href="cart.html">
            <button>Add to Cart</button>
        </a>
        </div>
        `;
    });