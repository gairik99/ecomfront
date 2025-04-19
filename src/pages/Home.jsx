import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getStore } from "../services/action";

const Home = () => {
    const [store, setStore] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getStore();
                // console.log(data.stores)
                setStore(data.stores);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    // console.log('store', store)

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginBottom: '12px' }}> Hyperlocal Stores </h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                    gap: "20px",
                    padding: "10px",
                    justifyContent: "center",

                }}
            >
                {store.map(({ _id, name, location }) => {
                    return <Card id={_id} name={name} location={location} key={_id} />;
                })}
            </div>
        </div>
    );
};

export default Home;
