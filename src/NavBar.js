import { render } from "@testing-library/react"
import React, { Component } from "react"
import SearchBox from "./SearchBox"
import { Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Results from './Results'
import Home from './Home'
import Title from './Title'
import NewReleases from "./NewReleases";

function NavBar() {

  return (
    <div>
      <div className="header">
        <header className="head">Search Streaming Titles

        </header>
        <nav className="navBar">


          <Link to='./Home'>
            <button className="navBtn">Home</button></Link>

          <Link to='./NewReleases' >
            <button className="navBtn">New Releases</button></Link>

          {/* <Route className="navBtn" path="/MyShows"> <MyShows />My Shows </Route>
            <Route className="navBtn" path="/Top50" > <Top50 />Top 50</Route>
          <Route className="navBtn" path='./New'> <New />New</Route> */}

        </nav>      <SearchBox />
      </div>



    </div>
  )
}









export default NavBar;
