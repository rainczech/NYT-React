import React, {Component} from "react";
import Jumbotron from '../../components/Jumbotron';
import SavedArt from "../../components/SavedArt";
import Footer from '../../components/Footer';


class Saved extends Component {
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
              <SavedArt/>
            </div>
            <Footer/>
            </wrapper>
        )
    }
}

export default Saved;