import React, {Component} from "react";
import Jumbotron from '../../components/Jumbotron';
import Search from '../../components/Search';
import Results from '../../components/Results';


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
            </wrapper>
        )
    }
}

export default Home;