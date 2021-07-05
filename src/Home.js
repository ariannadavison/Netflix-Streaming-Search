import React from 'react'
import SearchBox from './SearchBox'
import Results from './Results'
import NavBar from './NavBar'
import Top from './Top'

function Home() {
    return (

        <div classname="home">
            <div>

                {/* <iframe id="backgroundvid" src="https://www.youtube.com/embed?v=zqEJGznRnkk"></iframe> */}
                {/* <SearchBox /> */}
                <NavBar />
            </div>
            <div id="body_home">
                <iframe id="backgroundvideo"
                    src="https://www.youtube.com/embed/Bs-GdcUfl0Q?autoplay=1&mute=1&controls=0" type='video/mp4'></iframe>

                <div id="search_home">

                    <SearchBox />
                </div>
            </div>
        </div>

    )
}

export default Home