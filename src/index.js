import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import SearchBar from './components/search_bar';
import EventDetail from './components/event_detail';
import EventList from './components/event_list';
import Header from './components/header';
import HomePage from './components/home_page';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
  	<div>
  		<Header />
      <Route exact path="/" component={HomePage}/>
      <Route path="/events" component={EventList}/>
    </div>
  </Router>
	, document.getElementById('root'));
// registerServiceWorker();







