import React, {Component} from "react";
import "./Search.css";

class Search extends Component {
    // state here



    // method



    // JSX
    render () {
        return (
            <div className="card">
                <div className="card-header">
                     <h2>Search</h2>
                </div>
                 <div className="card-body">
                <form>
                <div class="form-group">
                    <label for="">Topic</label>
                    <input type="Topic" class="form-control" id="Topic" placeholder=""/>
                 </div>
                 <div class="form-group">
                    <label for="">Start Year</label>
                    <input type="StartYear" class="form-control" id="StartYear" placeholder=""/>
                 </div>
                 <div class="form-group">
                    <label for="">End Year</label>
                    <input type="EndYear" class="form-control" id="EndYear" placeholder=""/>
                 </div>
                 <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        )
    }
}


export default Search;