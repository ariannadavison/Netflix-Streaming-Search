import { getByTitle, render } from "@testing-library/react"
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
// import React, { useState ,useEffect} from 'react'
// import React, { useEffect } from 'react'
import React, { Component } from 'react'
import Details from './Details'
import Trailer from './Trailer'

import SearchBox from "./SearchBox"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Results from './Results'
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
class Title extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nfid: '',
            img: '',
            title: '',
            synopsis: '',
            imdbid: '',
            year: '',
        }
        // this.getDetails = this.getDetails.bind(this)    






    }



    //    }
    render() {
        // console.log(this.props.selected)
        return (
            <div className="title">
                <NavBar />
                {/* <div>{titlechange}</div> */}
                <Link to="./Platforms">
                    <div></div>
                </Link>
                <div>
                    <Details />
                    <Link to="./Platforms">
                        <button>Trailer</button>

                    </Link>
                    <Details />
                    {/* <Trailer url={url} /> */}
                </div>
            </div>
        )
    }
    // fetch("https://imdb8.p.rapidapi.com/title/find?q=" + props.select, {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-key": "73d7d6dca9mshd1d72e8c92a0ebfp1f97a2jsn4a5a353c5da4",
    //         "x-rapidapi-host": "imdb8.p.rapidapi.com"
    //     }
    // })
    //     .then(response => response.json())

    //     .then(newdata => {
    //         console.log(newdata)

    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })
    // function getEvent(event) {


    // render() {

    //     return (


    //         <div>

    //         {this.props.title}
    // <p> {this.props.select}</p>
    // </div>
    //     )

    // }
    // }
}
export default Title