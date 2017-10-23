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
  eventSelected(e) {
    this.props.eventSelected(e.id);
  }

  render() {
    const events = this.props.events;
    const eventsToDisplayInCalendar = events.map(event => ({
      ...event,
      title: event.title,
      start: event.start_time,
      end: event.end_time,
    }));
    return (
      <BigCalendar
        style={{ height: '420px' }}
        events={eventsToDisplayInCalendar}
        onSelectEvent={this.eventSelected.bind(this)}
      />
    );
  }
}

export default EventCalendar;