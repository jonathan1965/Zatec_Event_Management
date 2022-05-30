import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom"


function EventDetails() {
  const EventList = useSelector((state)=>state.Event.EventList);
  console.log("event list: ",EventList)

  const {id} = useParams()
  let event = EventList.filter(e => e.id === id )
  console.log('event: ', event)
  event = event[0]

  return (
    <div>
    <p>EventDetails {event.names}</p>
    <p>EventDetails {event.username}</p>
    <p>EventDetails {event.tel}</p>
    <p>EventDetails {event.email}</p>
    <p>EventDetails {event.status}</p>
    </div>
  )
}

export default EventDetails