import { useContext, useState, createContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const getInitialCart = () => {
        try {
            const storedCart = localStorage.getItem("cart");
            return storedCart ? JSON.parse(storedCart) : { name: "", total: 0, product: [] };
        } catch (error) {
            console.error("Error parsing cart data from localStorage:", error);
            return { name: "", total: 0, product: [] };
        }
    };

    const [cart, setCart] = useState(getInitialCart);

    useEffect(() => {
        // Always save to localStorage regardless of array content
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => useContext(CartContext);

// eslint-disable-next-line react-refresh/only-export-components
export { useCart, CartProvider };
