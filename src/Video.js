import React, { useState, useEffect } from 'react'
// import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import SearchBox from "./SearchBox"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Results from './Results'
import App from './App'
import Trailer from './Trailer'
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
function Video(props) {
    // console.log(props.select)
    // console.log(props.selection)

    const [url, setURL] = useState("")
    console.log(props.id)
    useEffect(() =>
        //  fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&language=en", {
        // 	"method": "GET",
        // 	"headers": {
        // 		"x-rapidapi-key": "73d7d6dca9mshd1d72e8c92a0ebfp1f97a2jsn4a5a353c5da4",
        // 		"x-rapidapi-host": "streaming-availability.p.rapidapi.com"
        //             }
        //         })
        fetch("https://imdb-api.com/en/API/Trailer/k_9b88ggn9/" + props.id, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "73d7d6dca9mshd1d72e8c92a0ebfp1f97a2jsn4a5a353c5da4",
                "x-rapidapi-host": "imdb-api1.p.rapidapi.com"
            }
        })

            // fetch("https://imdb8.p.rapidapi.com/title/get-video-playback?viconst=vi1015463705&region=US", {
            //     "method": "GET",
            //     "headers": {
            //         "x-rapidapi-key": "73d7d6dca9mshd1d72e8c92a0ebfp1f97a2jsn4a5a353c5da4",
            //         "x-rapidapi-host": "imdb8.p.rapidapi.com"
            //     }
            // })
            .then((response) => response.json())
            .then(response => {

                console.log(response.linkEmbed)
                var id = response.videoId
                setURL(response.linkEmbed)
                // setTitleChange(response.resource)

            })
            .catch(err => {
                ;
            })
        , [])
    console.log(url)

    // var current = event.target.getAttribute("value")
    // console.log(current)

    //             function getTitle(data){




    //    }
    // function geturl(video) {
    //     for (let x = 0; x < video.length; x++) {
    //         console.log(video[x])
    //         var url = "https://www.imdb.com/" + video[x].id

    //             setURL(video[x])


    //     }}


    // import Results from './Results'
    // import { Link } from 'react-router-dom'

    // // function Video(props) {
    // // console.log(props.imdbvid)
    // //     return (
    // //         <div>
    // //             {props.imdbvid}
    // //             <button onClick={componentDidMount}></button>
    // //         </div>
    // //     )
    // // // }
    //     function componentDidMount(props) {

    //         fetch("https://imdb8.p.rapidapi.com/title/get-videos?tconst=tt1826940", {
    //             "method": "GET",
    //             "headers": {
    //                 "x-rapidapi-key": "73d7d6dca9mshd1d72e8c92a0ebfp1f97a2jsn4a5a353c5da4",
    //                 "x-rapidapi-host": "imdb8.p.rapidapi.com"
    //             }
    //         })
    //         .then((response) => response.json())
    //             .then(response => {
    //                 console.log(response);
    //                 geturl(response)
    //             })
    //             .catch(err => {
    //                 console.error(err);
    //             });
    // }


    return (
        <div>
            {/* <Link to="./Trailer">
        <iframe id="imdb" src={url} type="video/mp4" controls>

    </iframe>
    </Link> */}
            <Trailer url={url} />
        </div>



    )

}
export default Video