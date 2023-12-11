
let carrito = [];
let total = 0;

function addToCart(nombre, precio) {
    alert('Se ha agregado el producto al carrito.');
    carrito.push({ nombre, precio });
    updateCart();

    // Desplazar hacia el carrito después de agregar un producto

}

function updateCart() {
    const carritoLista = document.getElementById('carrito-lista');
    const totalElement = document.getElementById('total');
    carritoLista.innerHTML = "";
    total = 0;

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        carritoLista.appendChild(li);
        total += producto.precio;
    });

    totalElement.textContent = total;
}

function realizarCompra() {
    if (carrito.length !== 0) {
        // El carrito no está vacío, redirige a Mercado Pago
        window.location.href = 'https://link.mercadopago.com.ar/dshoes';
    } else {
        // El carrito está vacío, muestra una alerta
        alert('El carrito está vacío. Agrega productos antes de realizar la compra.');
    }
}

function resetCart() {
    carrito = [];
    updateCart();
}

