import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import EventList from './components/event_list';
// import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      selectedEvent: null
    };
  }

  render() {
	  return (
	    <div>
	      <h2>Christian Hackers</h2>
	      <SearchBar />
	      <EventList />
	    </div>
	  )
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
