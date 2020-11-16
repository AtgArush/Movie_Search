import React, { useEffect, useState }  from 'react';
import './App.css';
import "./frontPage.css"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import MyNavbar from "./top__row"
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import SearchIcon from '@material-ui/icons/Search';
import SearchResult from "./searchResult"
function App() {

  const [Title, setTitle] = useState("")


  useEffect(() => {
    console.log(Title)
  }, [Title])



  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MyNavbar Icon = {MovieFilterIcon} channelName = "Movie Database"/>
            <div className = "frontPage">
              <div className="empty">
               <div className="searchBox">
                  <input 
                  className="frontPage__inputBox" 
                  type="text" 
                  placeholder="Search Your Movie"
                  onChange = {e => {
                    setTitle(e.target.value)
                  }}
                  />
                  <Link to="/search">
                    <SearchIcon className="frontPage__icon" />
                  </Link>
              </div>
              </div>
            </div>
          </Route>
          <Route exact path="/search">
            <MyNavbar Icon = {MovieFilterIcon} channelName = {Title}/>
            {/* <FrontPage /> */}
            <SearchResult title = {Title} />
          </Route>
          
        </Switch>
      </Router>

    </div>
  );
}

export default App;
