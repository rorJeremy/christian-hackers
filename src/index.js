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
// import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [{key: "1", title: "event1", description: "the first event"}, {key: "2", title: "event2", description: "the second event"}],
      selectedEvent: null,
      searchTerm: ''
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(term) {
    this.setState({ searchTerm: term.target.value });
  }  

  render() {
	  return (
	    <div>
	      <SearchBar value={this.state.searchTerm} onSearchTermChange={this.onSearchChange} />
	      <EventDetail event={this.state.selectedEvent} />
	      <EventList 
	      	onEventSelect={selectedEvent => this.setState({ selectedEvent })}
	      	events={this.state.events}
	      	term={this.state.searchTerm}
	      />
	    </div>
	  )
	}
}

ReactDOM.render(
  <Router>
  	<div>
  		<Header />
      <Route exact path="/" component={App}/>
      <Route path="/events" component={EventList}/>
    </div>
  </Router>
	, document.getElementById('root'));
// registerServiceWorker();







