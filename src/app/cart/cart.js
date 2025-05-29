// src/app/cart/page.js
export default function CartPage() {
// Simulación de productos en el carrito
const cartItems = [
    { id: 1, name: "Producto 1", price: 10, quantity: 2 },
    { id: 2, name: "Producto 2", price: 20, quantity: 1 },
];

return (
    <div className="cart">
        <h1>Carrito de Compras</h1>
        {cartItems.length === 0 ? (
            <p>No hay productos en el carrito.</p>
        ) : (
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
        )}
    </div>
);
}