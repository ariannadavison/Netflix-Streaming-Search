import React, { useState } from "react";
import Results from "./Results";
import { Link, Switch } from "react-router-dom";

import { connect } from 'react-redux'


const userinput = (input) => {
    return {
        type: USER_INPUT,
        input: input
    }
}

const USER_INPUT = "USER_INPUT"


export function searchReducer(state = "", action) {
    switch (action.type) {
        case USER_INPUT:
            return action.input
        default: return state
    }

}

function SearchBox(props) {
    //   const [input,setInput] = useState("")
    //       var getInput = ""
    const handleClick = () => {
        let input = document.getElementById('search').value;
        if (input) {
            props.userinput(input);
        }
    };

    return (
        <div id="search_container" >
            <input id="search" type="text" placeholder="search titles"></input>
            <Link to={'./Results'}>
                <button onClick={handleClick} id="searchbtn">Search</button>
            </Link>
            {/* <Results searchvalue = {input} /> */}
        </div>
    );
}
//   props.setInput(document.getElementById("search").value);
// export default SearchBox;

// this.props.setInput(document.getElementById("search").value)



const mapDispatchToProps = (dispatch) => { return { userinput: (input) => dispatch(userinput(input)) } }

export default connect(null, mapDispatchToProps)(SearchBox)