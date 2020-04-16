import React from 'react';
import Card from './card';
const Recipeview = ({recipes, recipeClick})  => {
    // var recipesStyle;
    // if(recipes.length < 4)
    //     recipesStyle = "recipesinner-container-flex-start"
    // else
    // recipesStyle = "recipesinner-container"
    return (
        <div className='recipes-container'>
            <div className="recipesinner-container">
                {
                    recipes.map((user,i) => {
                        return(
                            <Card 
                            val = {recipes[i]}
                            recipeClick = {recipeClick}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}
export default Recipeview