import React, { useState, useEffect } from "react";
// import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

import SearchBox from "./SearchBox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Results from "./Results";
import App from "./App";
import Trailer from "./Trailer";
import handleChange from './FetchTitle'
// class Title extends Component {
//     constructor(props) {
//     console.log(props.select)
//     super(props)
//     this.state = {
//         title:'',
//         nfid:'',
//     }
// this.getSelection = this.getSelection.bind(this)
// }
// functiongetSelection(event) {
// this.setState({nfid:event.target.value})
//     console.log(event.target.value)
// }
function SearchResults(props) {
  var searchdata = props.search;
  var LAJLSKJFLK = "ALKDSJFLKAJSLK";
  console.log(props.search);
  console.log(searchdata[0].nfid);
  function selection(event) {
    props.setSelection(event.target.value);
  }
  return (
    <div>
      <p>{LAJLSKJFLK}</p>

      <div>
        {searchdata.map((value) => {
          return (
            <div>
              <Link to="./Title" id={value.nfid}>
                <div
                  id={value.nfid}
                  onClick={(event)=>handleChange(event,this.props)}
                  value={value.nfid}
                  className="tile"
                >
                  <img src={value.img} value={value.nfid}></img>
                  <div value={value.nfid}>{value.title}</div>
                  <div value={value.nfid}>{value.year} </div>
                  <div value={value.nfid}>{value.vtype} </div>

                  {/* <Video id={this.state.imdbid} /> */}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default SearchResults;
