import { Component } from "react";
import App from './App'
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class Top extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataArray: []
        }
        this.formatData = this.formatData.bind(this)

    }
    formatData(data) {
        var array = [];
        var x;
        for (x in data) {
            array = [...data.ITEMS]
            this.setState({ dataArray: array })
        }
        console.log(this.state.dataArray)
    }

    componentDidMount() {

        let searchvalue = this.props.input
        console.log("https://unogsng.p.rapidapi.com/search?limit=20&countrylist=78,46,33&query=" +
            searchvalue)
        fetch("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew7%3AUS&p=1&t=ns&st=adv", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_KEY,
                "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com"
            }
        })
            .then((response) => response.json())

            .then((tdata) => {
                console.log(tdata.ITEMS)
                this.formatData(tdata)
                // this.getResults(tdata);
            });

    }

    render() {
        console.log(this.props.input)
        return (




            <div id="topPage" className="resultPage">
                {this.state.dataArray.map((value) => {
                    return (

                        <div id="resultPage" className="resultPage">
                            <Link to="./Title" id={this.nfid}>
                                <div classname="resultPage"
                                    id={value.nfid}
                                    onClick={this.handleChange}
                                    value={value.nfid}
                                    className="title">
                                    <img src={value.image} value={value.nfid}></img>
                                    <div value={value.nfid}>{value.title}</div>
                                    <div value={value.nfid}>{value.released} </div>                                       <div value={value.nfid}>{value.year} </div>
                                    <div value={value.nfid}>{value.type} </div>


                                </div>
                            </Link>

                        </div>
                    );
                })}

            </div>








        );
    }
}

export default Top