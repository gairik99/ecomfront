import React, { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const OrderConfirmationPage = () => {
    const { cart, setCart } = useCart();
    const navigate = useNavigate();
    const [customerName, setCustomerName] = useState("");

    useEffect(() => {
        // Save name before clearing cart
        setCustomerName(cart.name);
        // Clear cart after component mounts
        setCart({ name: "", total: 0, product: [] });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // console.log(cart);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
                gap: "1rem",
            }}
        >
            <h2>Thank you, {customerName}</h2>
            <p>Your order has been placed successfully</p>
            <button
                style={{
                    width: "100px",
                    height: "40px",
                    padding: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onClick={() => navigate("/")}
            >
                Go Home
            </button>
        </div>
    );
};

export default OrderConfirmationPage;
