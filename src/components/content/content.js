import React, { Component } from 'react'
import image1 from '../../assets/images/image1.jpeg'
import image2 from '../../assets/images/image2.jpeg'
import image3 from '../../assets/images/image3.jpeg'
import image4 from '../../assets/images/image4.jpeg'
import image5 from '../../assets/images/image5.jpeg'
import image6 from '../../assets/images/image6.jpeg'
import image7 from '../../assets/images/image7.jpeg'
import image8 from '../../assets/images/image8.jpeg'
import image9 from '../../assets/images/image9.jpeg'
import image10 from '../../assets/images/image10.jpeg'
import image11 from '../../assets/images/image11.jpeg'
import image12 from '../../assets/images/image12.jpeg'
import image13 from '../../assets/images/image13.jpeg'
import image14 from '../../assets/images/image14.jpeg'
import image15 from '../../assets/images/image15.jpeg'
import Recipeview from './recipes';


class Content extends Component {
    constructor() {
        super()
        this.state = {
            recipes: [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15]
        }
    }



    render() {
        return (
            <div>
                <Recipeview recipes={this.state.recipes} />
            </div>
        );
    }
}

export default Content