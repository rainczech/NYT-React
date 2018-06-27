import React, {Component} from "react";
import Jumbotron from '../../components/Jumbotron';
import SavedArt from "../SavedArt";


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
            </wrapper>
        )
    }
}

export default Saved;