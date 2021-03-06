import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import EventDetail from './components/event_detail';
import EventList from './components/event_list';
import CampaignDetail from './components/campaign_detail';
import Campaigns from './components/campaigns';
import UserCampaigns from './components/user_campaigns';
import Header from './components/header';
import HomePage from './components/home_page';
import Login from './components/login';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route exact path="/events" component={EventList} />
      <Route path="/events/:id" component={EventDetail} />
      <Route exact path="/campaigns" component={Campaigns} />
      <Route path="/campaigns/:id" component={CampaignDetail} />
      <Route path="/users/:id/campaigns" component={UserCampaigns} />
    </div>
  </Router>,
  document.getElementById('root'),
);
// registerServiceWorker();
