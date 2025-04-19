import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import CartCard from "../components/CartCard";
import { createOrder } from "../services/action";

const CartPage = () => {
    const { cart, setCart } = useCart();
    const navigate = useNavigate();
    const handleClick = (productId, count) => {
        // console.log(productId)
        setCart((prevCart) => {
            let updatedProducts = prevCart.product.map((product) => {
                if (product.id === productId) {
                    const newQty = product.qty + count;
                    // Ensure quantity doesn't go below 0
                    return { ...product, qty: Math.max(newQty, 0) };
                }
                return product;
            }).filter(product => product.qty > 0);
            const total = updatedProducts.reduce((acc, product) => {
                return acc + (parseFloat(product.price) * product.qty);
            }, 0);

            return {
                ...prevCart,
                product: updatedProducts,
                total: parseFloat(total.toFixed(2)) // Round to 2 decimal places
            };
        });
    };

    const handleOrderClick = async () => {
        if (cart.name.length <= 0)
            return;
        try {
            const response = await createOrder(cart);
            // console.log(response)
            if (response.message == 'Order placed successfully')
                navigate("/orderconfirmation");

        }
        catch (e) {
            console.log(e)
        }

    };
    // console.log(cart);
    return (
        <div>
            <h2 style={{ textAlign: "center", marginBottom: "12px" }}> Your Cart </h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                    gap: "5px",
                    padding: "20px",
                    justifyContent: "center",
                }}
            >
                {(cart.product.length > 0 ?
                    cart.product.map(({ id, name, price, qty }, index) => {
                        return (
                            <CartCard
                                name={name}
                                price={price}
                                qty={qty}
                                key={index}
                                onClick={(count) => handleClick(id, count)}
                            />
                        );
                    }) : <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Cart is Empty</h3>)}
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    marginTop: "1rem",
                }}
            >
                {cart.product.length > 0 && <p>Total: {cart.total}</p>}
                {cart.product.length > 0 && (
                    <input
                        value={cart.name}
                        placeholede="enter your name"
                        onChange={(e) =>
                            setCart((prev) => ({ ...prev, name: e.target.value }))
                        }
                    />
                )}
                {cart.product.length > 0 && (
                    <button
                        style={{
                            width: "100px",
                            height: "40px",
                            padding: "5px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onClick={handleOrderClick}
                    >
                        Place Order
                    </button>
                )}
            </div>
        </div>
    );
};

export default CartPage;
