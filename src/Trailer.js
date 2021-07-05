import React from 'react'
import NavBar from './NavBar'
import Video from './Video'

function Trailer(props) {
    console.log(props.url)
    return (
        <div>

            <NavBar />
            <div id="vid">
                <iframe id="imdb" src={props.url} type="video/mp4" controls>

                </iframe>

            </div>
        </div>
    )
}
export default Trailer