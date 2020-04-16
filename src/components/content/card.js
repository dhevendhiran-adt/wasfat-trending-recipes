import React from 'react';
import defaultImage from '../../assets/images/default.jpg'

const Card = (props) => {
    const { val,recipeClick } = props;
    var url = "https://s3.ap-south-1.amazonaws.com"
    var imageUrl = ""
    if(val.media.images.length !== 0)
    {
        imageUrl = url + '/' + val.media.images[0]
    }
    else if(val.media.videoSnaps && val.media.videoSnaps.length != 0){
        imageUrl = url + '/' + val.media.videoSnaps[0]
    }
    else{
        imageUrl = defaultImage
    }
    return (
        <li className="cards__item">
            <div className="card" onClick={recipeClick}>
                <img src={imageUrl} className="img" alt="Recipe Image" />
                <div className="card__content">
                    <div className="card__title">{val.title}</div>
                    <p className="card__text">{val.description}</p>       
                </div>
            </div>
        </li>
    )
}
export default Card;