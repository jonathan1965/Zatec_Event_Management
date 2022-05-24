import React from 'react'
import {useSelector} from 'react-redux'
import EventItem from './EventItem'


function AppContent() {
  const EventList = useSelector((state)=>state.Event.EventList);
  const sortedEventList = [...EventList];
  sortedEventList.sort((a, b) => new Date(b.time) - new Date(a.time));
  return (
    <div>
    {sortedEventList && sortedEventList.length > 0
    ? sortedEventList.map((Event)=> <EventItem Event={Event}/>)
    :'no todo found'}
    </div>
  )
}

export default AppContent