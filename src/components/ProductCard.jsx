import React from 'react'
// eslint-disable-next-line no-unused-vars
const ProductCard = ({ id, price, name, ...props }) => {
    return (
        <div style={{
            width: '400px',
            height: '200px',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            background: '#bde0fe',
        }}
        >
            <h4 style={{ marginBottom: '10px' }}>{name}</h4>
            <p style={{ margin: 0, color: '#333' }}>Price: {price}</p>
            <button style={{ width: '100px', height: '40px' }} {...props}>Add to Cart</button>
        </div>
    )
}

export default ProductCard