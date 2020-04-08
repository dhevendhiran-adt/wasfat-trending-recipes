import React from 'react';


const Card = (props) => {
    const { val } = props;
    return (
        <div className='cardview-container'>
            <img src={val} className='cardimg-container'/>
            <div className="cardinfo-container">
                <h4 className="info-style">Recipe Name</h4>
                <p  className="info-style">Recipe Details</p>
            </div>
        </div>
    )
}

export default Card