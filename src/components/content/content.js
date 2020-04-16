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
            // recipes: [image1, image2, image6, image11, image12, image7, image8, image9, image3, image4], 
                recipes:[],
                fileStorageUrl:""
        }
        // this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        this.fetchTrendingData();
    }

    componentWillUnmount() {
      }
      

    fetchTrendingData() {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        var url = "https://11911stvyb.execute-api.ap-south-1.amazonaws.com/Dev/get-trending-search-page-data/v2"
        var data = {
            type: "top_recipes",
            member_id: "wasfat",
            search_after: []
        }
        fetch(proxyUrl+url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(response => this.handleSuccessResponse(response))
            .catch(error => this.handleError(error));
    }

    handleSuccessResponse(response) {
        var data = JSON.parse(response.data);
        console.log("RESPONSE", response);
            this.state.recipes.push(...this.state.recipes,...data)
        this.setState({})
        console.log("Recipes Data",this.state.recipes)
    }

    handleError(error) {
        console.log("ERROR", error)
    }

    // loadMore(){
    //     console.log("CLICKED!!!!")
    //     this.state.recipes.push(...this.state.sample)
    //     this.setState({})
    //     console.log(this.state.recipes)
    // }

    render() {
        return (
            <div>
                <Recipeview recipes={this.state.recipes} />
                {/* <div className="buttonView">
                <button className="button" onClick={this.loadMore}>Show More</button>
                </div> */}
            </div>
        );
    }
}

export default Content