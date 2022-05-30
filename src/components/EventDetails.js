import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import './Header/EventDetails.css'


function EventDetails() {
  const EventList = useSelector((state)=>state.Event.EventList);
  console.log("event list: ",EventList)

  const {id} = useParams()
  let event = EventList.filter(e => e.id === id )
  console.log('event: ', event)
  event = event[0]

  return (
    <div className='boddy'>
    <div className='business-card1'>
        <div className='content1'>
          <div className='top1'>
            <div className='name1'>{event.username}</div>
            <div className='profession1'>{event.names}</div>
          </div>
          <div className='bottom'>
            <div className='left'>
              <div className='email1'>{event.email}</div>
              <div className='phone1'>{event.tel}</div>
              <div className='website1'>Zatec.co.rw</div>
            </div>
            <div className='right'>
              <div className='location1'>Zatec, Rw</div>
            </div>
          </div>
        </div>
        <div className='background1'>
          <div className='slice1'></div>
        </div>
      </div>
      </div>
  
  )
}

export default EventDetails