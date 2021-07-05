import Results from './Results'
import App from './App'
import Trailer from './Trailer'
import { Link } from 'react-router-dom'
function Details(props) {


    var array2 = props.data

    console.log(array2)
    return (
        <div className="title">
            <div><img src={props.img}></img></div>
            <div>{props.data}</div>
            <div>{props.synopsis}</div>
            <div>{props.year}</div>
            <div>{props.vtype}</div>
            <div>{props.clist}</div>
            {/* <div>{props.results}</div> */}
            <Link to="./Platforms">
                <button>Trailer</button>

            </Link>
        </div>
    )
}

export default Details