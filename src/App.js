import React, { useState } from "react";
import Home from './Home'
import Results from "./Results";
import SearchBox from "./SearchBox";
import Trailer from "./Trailer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Title from "./Title";
import Platforms from "./Video";
import Details from "./Details";
import SearchResults from "./SearchResults";
import searchReducer from "./SearchBox";
import { createStore } from "redux";
import { Provider } from "react-redux";
import NewReleases from './NewReleases'
import NavBar from "./NavBar";

function App() {
  const [titledata, setTitleData] = useState([]);
  const [imdbid, setimdbid] = useState([]);
  const [year, setyear] = useState([]);
  const [synopsis, setsynopsis] = useState([]);
  const [img, setimg] = useState([]);
  const [nfid, setnfid] = useState([]);
  const [Clist, setClist] = useState([]);
  const [input, setInput] = useState([]);
  const [search, setSearchResults] = useState([]);
  const [selection, setSelection] = useState("");

  // const reducer = combineReducers({
  //   searchReducer:
  // })
  return (
    <div>

      <Router>
        {/* <NavBar /> */}
        <div className="App">
          {/* <Title/> */}
          <Switch>
            <Route path='/NewReleases'>
              <NewReleases />
            </Route>
            <Route path="/" exact component={Home} />
            <Route path="/Home" component={Home} />

            <Route path="/Results" exact>
              <Results
                setimdbid={setimdbid}
                setSearchResults={setSearchResults}
                setSelection={setSelection}
                input={input}
                setyear={setyear}
                setnfid={setnfid}
                setTitleData={setTitleData}
                setimg={setimg}
                setSynopsis={setsynopsis}
                setClist={setClist}
              />
            </Route>

            <Route path="/Title">

              <Title />
            </Route>
            {/* <Route path="/SearchBox" exact>
              {" "}
              <SearchBox />
            </Route> */}

            <Route path="/Platforms">
              <Platforms id={imdbid} />
            </Route>

            {/* <Route path="/Results"><Results />          </Route> */}

            <Route path="/Trailer">
              <Trailer />
            </Route>

            <Details
              data={titledata}
              year={year}
              nfid={nfid}
              imdbid={imdbid}
              synopsis={synopsis}
              img={img}
              clist={Clist}
            />
          </Switch>
        </div>
        {/* <Platforms imdbid={titledata[0]}/> */}
      </Router>
    </div>
  );
}

export default App;
