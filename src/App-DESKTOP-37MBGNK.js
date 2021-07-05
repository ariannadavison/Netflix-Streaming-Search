
import './App.css';
import Results from "./Results"
import SearchBox from './SearchBox';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Title from './Title'
function App() {
  return (

      <Router>
    


    <div className="App">
{/* <Title/> */}
{/* <Results /> */}
<Switch>
{/* <SearchBox /> */}
        <Route path="/Title" component={Title}>
          <Title />
          </Route>
        <Route path="/Results"  component={Results}/>
      <Results />
          <Route path="/SearchBox" component={SearchBox}>
            <SearchBox /></Route>
        <Route path="/" exact component={SearchBox} >
          <SearchBox /></Route> 
</Switch>
    </div>
    </Router>
  );
}

export default App;


