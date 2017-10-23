import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import EventDetail from './components/event_detail';
import EventList from './components/event_list';
import Header from './components/header';
import HomePage from './components/home_page';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/events" component={EventList} />
      <Route path="/events/:id" component={EventDetail} />
    </div>
  </Router>,
  document.getElementById('root'),
);
// registerServiceWorker();
