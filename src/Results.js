// import { render } from "@testing-library/react"
// import React, { Component } from "react"
// import SearchBox from "./SearchBox"
// import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Details from './Details'
// import Title from './Title'
// import searchBox from "./SearchBox"
// import Video from './Platforms'
// import App from './App'
// class Results extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             searchResults: [],
//             title: "asdfgh",
//             searchvalue:""
//         }
//         // this.getResults = this.getResults.bind(this)
//         this.getData = this.getData.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//         this.getDetails = this.getDetails.bind(this)
//         // this.selectTitle = this.selectTitle.bind(this)
//         // this.navigate = this.navigate.bind(this)
//         // const nfid = event.target.id
//     }
//     // title:"asdfghjkl;"

// // getInput() {
// // this.setState({searchvalue:""})
// // }

//     getData() {
//         // let searchvalue = this.props.input
//         let searchvalue = document.getElementById("search").value.toString()


//             .then(response => response.json())

//             .then(tdata => {
//                 console.log(tdata)
//                 this.getResults(tdata)
//             })


//         //     .then(response => {
//         //         console.log(response);
//         //     })
//         // .then(data =>{

//         //     this.getResults(data);
//         // });
//     }
//     //     .catch(err => {
//     //         console.error(err);
//     //     });
//     // }
//     getResults(returndata) {
//         var result = returndata.results
//         var x;
//         var array = []
//         var ids = []
//         for (x in returndata.results) {
//             var titles = { title: result[x].title, year: result[x].year, imdbid: result[x].imdbid, clist: result[x].clist, vtype: result[x].vtype, img: result[x].img, nfid: result[x].nfid }
//             var title = result[x].nfid
//             console.log(title)
//             array.push(titles)
//             ids.push(title)
//             this.setState({ searchResults: array })
//             this.setState({ ids: ids })

//             // this.setState({title:ids})
//         }
//     }

//         .then(response => response.json())

//         .then(tdata => {

//             // this.sendData(tdata)

//             this.props.setTitleData(tdata.results[0].title)
//             this.props.setimg(tdata.results[0].img)
//             this.props.setSynopsis(tdata.results[0].synopsis)
//             this.props.setimdbid(tdata.results[0].imdbid)
//             this.props.setnfid(tdata.results[0].nfid)
//             this.props.setyear(tdata.results[0].year)
//             this.props.setClist(this.state.searchResults[this.state.ids.indexOf(Number(select))].clist )
//             // this.props.setClist(this.state.searchResults[this.state.ids.indexOf(Number(select))].clist )
//                 this.getDetails(tdata)

//             })

//         // this.setState({ title: select });
//         // this.setState({ clist: this.state.searchResults[this.state.ids.indexOf(Number(select))].clist });
//         // console.log(this.state.clist)
//         // // this.setState({ selected:  });
//         // console.log(this.state.title)
//         // console.log(this.state.selected)
//         // console.log(this.state.ids.indexOf(Number(select)))
//         // return     <div>

//         //     <Title select = {select} />
//         // </div>
//     }
//     // anothermethod = (data) =>{
//     //     this.setState({ title: data })
//     // console.log(this.state.title)
//     // }

//     getDetails(data) {
//         console.log(this.state.imdbid)
//         // this.setState({ title: data.results[0].title, nfid: data.results[0].nfid, imdbid: data.results[0].imdbid, img: data.results[0].img, synopsis: data.results[0].synopsis, year: data.results[0].year, })

//     }
//     render() {
//         console.log(this.state.searchResults)
//         console.log(this.state.selected)
//         return (
//             <div>
//                 <input id="search" type="text" placeholder="search titles"></input>
//                 <button onClick={this.getData} id="searchbtn">Search</button>

//                 <div id="resultPage">{this.state.searchResults.map((value) => {

//                     return <div>

//                         <Link to='./Title' id={this.nfid}>
//                             <div id={value.nfid} onClick={this.handleChange} value={value.nfid} className="tile">

//                                 <img src={value.img} value={value.nfid}></img>
//                                 <div value={value.nfid}>{value.title}</div>
//                                 <div value={value.nfid}>{value.year} </div>
//                                 <div value={value.nfid}>{value.vtype} </div>

//                             </div>
//                         </Link>

//                     </div>
//                 }
//                 )
//                 }  </div>

//                 <p>{this.state.searchResults.year}</p>

//                 {/* <Title select={this.state.title} title={this.state.title} nfid={this.state.nfid} clist={this.state.clist} imdbid={this.state.imdbid} img={this.state.img} synopsis={this.state.synopsis} year={this.state.year} clist={this.state.clist}
//                 />
//                 <Details select={this.state.title} title={this.state.title} nfid={this.state.nfid} clist={this.state.clist} imdbid={this.state.imdbid} img={this.state.img} synopsis={this.state.synopsis} year={this.state.year} clist={this.state.clist}
//                 />
//                 <Video imdbvid={this.state.imdbid} />
//                 // <Details results={this.state.searchResults} title={this.state.title}/> */}
//                 <SearchBox setSearch = {this.getInput}  />
//             </div>
//         )
//         console.log(this.state.title)
//     }
// }
// //

// export default Results
import { render } from "@testing-library/react";
import React, { Component } from "react";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./Details";
import Title from "./Title";
import searchBox from "./SearchBox";
import Video from "./Video";
import App from "./App";
import handleChange from './FetchTitle'
import NavBar from './NavBar'
import { connect } from 'react-redux'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            title: "asdfgh",
            searchvalue: "",
            imdbid: 0,
        };
        // this.getResults = this.getResults.bind(this)
        // this.getData = this.getData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getDetails = this.getDetails.bind(this);
        // this.selectTitle = this.selectTitle.bind(this)
        // this.navigate = this.navigate.bind(this)
        // const nfid = event.target.id
    }
    // title:"asdfghjkl;"

    getInput() {
        this.setState({ searchvalue: this.props.input });
    }

    componentDidMount() {
        let searchvalue = this.props.input
        console.log("https://unogsng.p.rapidapi.com/search?limit=20&countrylist=276,21,24,23,22,285,282,294,26,32,28,29,284,33,35,36,37,333,306,307,40,42,43,311,75,310,44,45,320,39,322,327,51,53,331,334,265,337,335,340,55,336,269,267,350,342,358,357,371,378,376,374,375,65,370,360,384,67,69,66,266,68,387,391,70,72,71,390,392,268,395,400,402,404,401,408,412,410,447,438,270,354,73,34,434,435,77,432,436,272,46,78,79,81,442&query=" +
            searchvalue)
        fetch(
            "https://unogsng.p.rapidapi.com/search?limit=20&countrylist=78,46,33&query=" +
            searchvalue,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key": process.env.REACT_APP_KEY,
                    "x-rapidapi-host": "unogsng.p.rapidapi.com",
                },
            }
        )
            .then((response) => response.json())

            .then((tdata) => {
                this.getResults(tdata);
            });

    }

    getResults(returndata) {
        var result = returndata.results;
        var x;
        var array = [];
        var ids = [];
        for (x in returndata.results) {
            var titles = {
                title: result[x].title,
                year: result[x].year,
                imdbid: result[x].imdbid,
                clist: result[x].clist,
                vtype: result[x].vtype,
                img: result[x].img,
                nfid: result[x].nfid,
            };
            var title = result[x].nfid;

            array.push(titles);
            ids.push(title);
            this.setState({ searchResults: array });
            this.setState({ ids: ids });

            // this.setState({title:ids})
        }
    }

    handleChange(event, props) {
        // event.preventDefault()
        var select = event.target.getAttribute("value");
        this.props.setimdbid(
            this.state.searchResults[this.state.ids.indexOf(Number(select))].imdbid
        );

        this.setState({ title: select });

        // this.title = select

        fetch("https://unogsng.p.rapidapi.com/title?netflixid=" + select, {
            method: "GET",
            headers: {
                "x-rapidapi-key": process.env.REACT_APP_KEY,
                "x-rapidapi-host": "unogsng.p.rapidapi.com",
            },
        })
            .then((response) => response.json())

            .then((tdata) => {
                // this.sendData(tdata)

                this.props.setTitleData(tdata.results[0].title);
                this.props.setimg(tdata.results[0].img);
                this.props.setSynopsis(tdata.results[0].synopsis);
                this.props.setimdbid(tdata.results[0].imdbid);
                this.props.setnfid(tdata.results[0].nfid);
                this.props.setyear(tdata.results[0].year);
                this.props.setClist(
                    this.state.searchResults[this.state.ids.indexOf(Number(select))].clist
                );
                // this.props.setClist(this.state.searchResults[this.state.ids.indexOf(Number(select))].clist )
                this.getDetails(tdata);
            });

        this.setState({ title: select });
        this.setState({ clist: this.state.searchResults[this.state.ids.indexOf(Number(select))].clist });
        console.log(this.state.clist)
        // this.setState({ selected:  });
        console.log(this.state.title)
        console.log(this.state.selected)
        console.log(this.state.ids.indexOf(Number(select)))
        return <div>

            <Title select={select} />
        </div>
    }
    anothermethod = (data) => {
        this.setState({ title: data })
        console.log(this.state.title)
    }

    getDetails(data) {
        // this.setState({ title: data.results[0].title, nfid: data.results[0].nfid, imdbid: data.results[0].imdbid, img: data.results[0].img, synopsis: data.results[0].synopsis, year: data.results[0].year, })
    }

    render() {
        console.log(this.props.input)
        return (
            <div>
                <NavBar />
                {/* <input id="search" type="text" placeholder="search titles"></input>
                <button onClick={this.getData} id="searchbtn">
                    Search
        </button> */}
                <Link to="./SearchResults">

                </Link>
                <div id="resultPage" className='resultPage'>
                    {this.state.searchResults.map((value) => {
                        return (
                            <div>
                                <Link to="./Details" id={this.nfid}>
                                    <div
                                        id={value.nfid}
                                        onClick={this.handleChange}
                                        value={value.nfid}
                                        className="title">
                                        <img src={value.img} value={value.nfid}></img>
                                        <div value={value.nfid}>{value.title}</div>
                                        <div value={value.nfid}>{value.year} </div>
                                        <div value={value.nfid}>{value.vtype} </div>

                                        {/* <Video id={this.state.imdbid} /> */}
                                    </div>
                                </Link>
                            </div>
                        );
                    })}{" "}
                </div>

                <p>{this.state.searchResults.year}</p>

                {/* <Title select={this.state.title} title={this.state.title} nfid={this.state.nfid} clist={this.state.clist} imdbid={this.state.imdbid} img={this.state.img} synopsis={this.state.synopsis} year={this.state.year} clist={this.state.clist}
                />
                <Details select={this.state.title} title={this.state.title} nfid={this.state.nfid} clist={this.state.clist} imdbid={this.state.imdbid} img={this.state.img} synopsis={this.state.synopsis} year={this.state.year} clist={this.state.clist}
                />
                <Video imdbvid={this.state.imdbid} />
                // <Details results={this.state.searchResults} title={this.state.title}/> */}
                {/* <SearchBox setSearch = {this.getInput}  /> */}
            </div>
        );
    }
}
//

const mapStateToProps = (state) => {
    return {
        input: state.input,
    };
};

export default connect(mapStateToProps)(Results);

