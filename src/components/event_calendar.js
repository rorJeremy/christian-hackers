import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// import style from 'react-big-calendar/lib/css/react-big-calendar.css';

// BigCalendar.setLocalizer(
//   BigCalendar.momentLocalizer(moment)
// );
BigCalendar.momentLocalizer(moment);
require('react-big-calendar/lib/css/react-big-calendar.css');

class EventCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
    };
  }

  render() {
    return <BigCalendar style={{ height: '420px' }} events={this.state.events} />;
  }
}

export default EventCalendar;
