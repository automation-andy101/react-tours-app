import React, { useState } from 'react';


const Tour = ({ id, name, info, image, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className='single-tour'>
            <img src={image} alt={name} className='img' />
            <span className='tour-price'>£{price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>
                    {readMore ? info : `${info.substring(0, 200)} ...`}
                    <button 
                        type='button' 
                        className='info-btn' 
                        onClick={() => setReadMore(!readMore)}
                    >{readMore ? 'Read less' :  'Read more'}</button>     
                </p>
            </div>
            <button 
                type='button' 
                onClick={() => removeTour(id)} 
                className='btn btn-block delete-btn'
            >No interested
            </button>
        </article>
    )
}

export default Tour;

