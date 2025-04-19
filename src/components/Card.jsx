import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ id, name, location }) => {
    const navigate = useNavigate();
    // console.log('card', id)
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
            gap: '10px',
            background: '#bde0fe'
        }}
            key={id}
            onClick={() => navigate(`/store/${id}`)}>
            <h4 style={{ marginBottom: '10px' }}>{name}</h4>
            <p style={{ margin: 0, color: '#333' }}>{location}</p>

        </div>
    )
}

export default Card