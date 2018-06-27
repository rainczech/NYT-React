import React, {Component} from "react";
import Jumbotron from '../../components/Jumbotron';
import Search from '../../components/Search';
import Results from '../../components/Results';
import Footer from '../../components/Footer';


class Home extends Component {
    // state here


    // method here



    // JSX here
    render () {
        return (
            <wrapper>
            <div>
                <Jumbotron/>
            </div>
            <div className="container">
                <Search/>
            <br></br>
                <Results />
            </div>
            <Footer/>
            </wrapper>
        )
    }
}

export default Home;