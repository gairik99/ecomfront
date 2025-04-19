import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getStoreProducts } from "../services/action";
import { useCart } from "../context/cartContext";
const StorePage = () => {
    const [product, setProduct] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [search, setSearch] = useState('');
    const { storeId } = useParams();
    const navigate = useNavigate();
    const { cart, setCart } = useCart();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getStoreProducts(storeId);
                // console.log(data)
                setProduct(data.products);
                setFilteredProduct(data.products);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = (productItem) => {
        const exists = cart.product.some((p) => p.id === productItem.id);
        if (exists) return;
        setCart((prev) => {
            const newProducts = [...prev.product, productItem];
            // Calculate total when adding new product
            const total = newProducts.reduce((acc, product) => {
                return acc + parseFloat(product.price) * product.qty;
            }, 0);

            return {
                ...prev,
                product: newProducts,
                total: parseFloat(total.toFixed(2)), // Store with 2 decimal places
            };
        });
    };

    useEffect(() => {
        const lowerSearch = search.toLowerCase();
        if (lowerSearch.trim() === "") {
            setFilteredProduct(product);
        } else {
            const filtered = product.filter((p) =>
                p.name.toLowerCase().includes(lowerSearch)
            );
            setFilteredProduct(filtered);
        }
    }, [search, product]);
    console.log('product', product)
    // console.log('cart', cart)
    return (
        <div style={{ padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>
                    {" "}
                    {product[0]?.storeName}
                    {"  -  "}Products{" "}
                </h4>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <button
                        style={{ width: "80px", height: "24px" }}
                        onClick={() => navigate("/cart")}
                    >
                        View Cart
                    </button>
                    <div style={{ display: 'flex', gap: '5px' }}>
                        <input placeholder="search product" style={{ height: '24px' }} value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>

            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                    gap: "5px",
                    padding: "20px",
                    justifyContent: "center",
                }}
            >
                {filteredProduct.map(({ _id, name, price }) => {
                    return (
                        <ProductCard
                            id={_id}
                            name={name}
                            price={price}
                            key={_id}
                            onClick={() => handleClick({ id: _id, price, qty: 1, name })}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default StorePage;
