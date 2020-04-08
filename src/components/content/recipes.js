import React from 'react';
import Card from './card';
const Recipeview = ({recipes})  => {
    return (
        <div className='recipes-container'>
            <div className='recipesinner-container'>
                {
                    recipes.map((user,i) => {
                        return(
                            <Card 
                            val = {recipes[i]}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}
export default Recipeview