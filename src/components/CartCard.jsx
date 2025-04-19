import React from 'react'

const CartCard = ({ price, name, qty, onClick }) => {
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
            <h4 style={{ marginBottom: '10px', padding: '5px' }}>{name}</h4>
            <p style={{ margin: 0, color: '#333', padding: '5px' }}>Price: {price}</p>
            <p style={{ margin: 0, color: '#333', padding: '5px' }}>qty: {qty}</p>
            <div style={{ display: 'flex', gap: '5px', padding: '5px' }}>
                <button style={{ width: '20px', height: '20px', padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => onClick(1)}>+</button>
                <button style={{ width: '20px', height: '20px', padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => onClick(-1)}>-</button>
            </div>

        </div>
    )
}

export default CartCard