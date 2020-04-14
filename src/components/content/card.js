import React from 'react';


const Card = (props) => {
    const { val } = props;

    return (
            <li className="cards__item">
                <div className="card">
                <img src={val} className="img"/>
                    <div className="card__content">
                        <div className="card__title">RECIPE NAME</div>
                        <p className="card__text">This is the description for the recipe...</p>
                    </div>
                </div>
            </li>
    )
    // return (
    //     <div className='cardview-container'>
    //         <img src={val} className='cardimg-container'/>
    //         <div className="cardinfo-container">
    //             <h4 className="info-style">Recipe Name</h4>
    //             <p  className="info-style">Recipe Details</p>
    //         </div>
    //     </div>
    // )
}
export default Card;