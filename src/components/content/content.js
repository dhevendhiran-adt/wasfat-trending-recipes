import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import image1 from '../../assets/images/image1.jpeg'
// import image2 from '../../assets/images/image2.jpeg'
// import image3 from '../../assets/images/image3.jpeg'
// import image4 from '../../assets/images/image4.jpeg'
// import image5 from '../../assets/images/image5.jpeg'
// import image6 from '../../assets/images/image6.jpeg'
// import image7 from '../../assets/images/image7.jpeg'
// import image8 from '../../assets/images/image8.jpeg'
// import image9 from '../../assets/images/image9.jpeg'
// import image10 from '../../assets/images/image10.jpeg'
import appstore from '../../assets/images/appstore.png'
import playstore from '../../assets/images/playstore.png'
import wasfat from '../../assets/images/wasfat.png'
import Recipeview from './recipes';
import Modal from 'react-modal';
import ReactLoading from 'react-loading';


class Content extends Component {
    constructor() {
        super()
        this.state = {
            // recipes: [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10],
            recipes: [],
            fileStorageUrl: "",
            open: false,
            loading:false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.fetchTrendingData();
    }

    componentWillUnmount() {
    }


    fetchTrendingData() {
        this.setState({
            loading: true
        })
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        var url = "https://11911stvyb.execute-api.ap-south-1.amazonaws.com/Dev/get-trending-search-page-data/v2"
        var data = {
            type: "top_recipes",
            member_id: "wasfat",
            search_after: []
        }
        fetch(proxyUrl + url, {
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
        this.setState({loading:false})
        var data = JSON.parse(response.data);
        console.log("RESPONSE", response);
        this.state.recipes.push(...this.state.recipes, ...data)
        this.setState({})
    }

    handleError(error) {
        alert("Something Went Wrong! Please try again.")
        console.log("ERROR", error)
    }

    openModal() {
        this.setState({ open: true })
    }

    closeModal() {
        this.setState({ open: false })
    }

    recipeClick() {
        this.openModal();
    }

    afterOpenModal() {
    }

    render() {
        return (
            <div>
                {this.state.loading ?
                    <div className="loader">
                        <ReactLoading type={'spinningBubbles'} color="#B61B33" height={'5%'} width={'5%'} />
                    </div>
                    :
                    <Recipeview
                        recipes={this.state.recipes}
                        recipeClick={this.recipeClick.bind(this)}
                    />
                }
                <Modal
                    isOpen={this.state.open}
                    // onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    // style={customStyles}
                    closeTimeoutMS={500}
                >
                    <div className="modelView">
                        <img src={wasfat} className="imgHeaderLink" alt="Image Links" />
                        <h2 className="title">We make cooking look easy</h2>
                        <p className="modelText">What are you waiting for? The application is available in iOS and Android store. </p>
                        <div>
                            <a href="https://apps.apple.com/kw/app/wasfat/id1473238854">
                                <img src={appstore} className="imgLink" alt="Image Links" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.wasfat">
                                <img src={playstore} className="imgLink" alt="Image Links" />
                            </a>
                        </div>
                        <button onClick={this.closeModal} className="close">close</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Content