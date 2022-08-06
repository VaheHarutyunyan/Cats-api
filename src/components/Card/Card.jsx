import React from 'react';
import './style.scss';

const Card = ({ id, url, width, height }) => {
    return (
        <div className='card'>
            <div className="card-image">
                <img src={url} alt={`cats-${id}`} width={width} height={height} />
            </div>
        </div>
    )
}

export default Card
