import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import appstore from '../../assets/images/appstore.png'
import playstore from '../../assets/images/playstore.png'
import wasfat from '../../assets/images/wasfat.png'
import Recipeview from './recipes';
import Modal from 'react-modal';
import ReactLoading from 'react-loading';
import close from '../../assets/images/x.png'

// const customStyles = {
//     content : {
//         display:"flex",
//         justifyContent:"center",
//         alignItems:"center",
//         maxHeight: "120vh",
//         minHeight:"40vh",
//         maxWidth: "60vw",
//         marginLeft:"auto",
//         marginRight:"auto",
//         // backgroundColor : "red"
//     }
//   };

class Content extends Component {
    constructor() {
        super()
        this.state = {
            recipes: [],
            fileStorageUrl: "",
            open: false,
            loading: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.fetchTrendingData();
        Modal.setAppElement('body');
    }

    componentWillUnmount() {
    }


    fetchTrendingData() {
        this.setState({
            loading: true
        })
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        // var url = "https://11911stvyb.execute-api.ap-south-1.amazonaws.com/dev/get-trending-search-page-data/v3"
        var url = "https://h3ben6xhoi.execute-api.me-south-1.amazonaws.com/prod/search-management/get-trending-search-page-data/v3"
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
        this.setState({ loading: false })
        var data = JSON.parse(response.data);
        // console.log("RESPONSE", data);
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
                        <img src={close} onClick={this.closeModal} className="close"/>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Content