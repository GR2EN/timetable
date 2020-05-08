import React from 'react';
import EventListItem from './EventListItem';

const EventList = ({ events }) => {
  return (
    <ul className="events">
      {events.map(event => <EventListItem key={event.id} event={event} />)}
    </ul>
  );
};

export default EventList;
