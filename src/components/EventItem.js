import React, {useEffect, useState} from 'react'
import styles from '../styles/modules/eventItem.module.scss';
import { getClasses } from '../utils/getClasses';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../reducers/EventReducer';
import {updateEvent} from '../reducers/EventReducer';
import { Link } from "react-router-dom"
import toast from 'react-hot-toast';
import EventModal from './EventModal';
import CheckButton from './CheckButton';



function EventItem({Event}) {
  const dispatch = useDispatch();
  console.log( dispatch)
  const [checked, setChecked] = useState(false);
  const [ updateModalOpen,setUpdateModalOpen] = useState(false);
  useEffect(() => {
      if(Event.status === "Not Attending"){
        setChecked(true);
      }else {
        setChecked(false);
      }
  },[Event.status])


  const handleDelete = () => {
    dispatch(deleteEvent(Event.id))
    toast.success('Attended Deleted Successfully')
  }

  const handleEventId = () => {
   console.log('dO')

  }
  const handleUpdate= () => {
    setUpdateModalOpen(true)
  }
  return (
    <>
  
    <div className={styles.item}>
      <div className={styles.eventDetails}>
      <CheckButton checked={checked} setChecked={setChecked}/>
      <div className={styles.texts} onClick={handleEventId}>
      <Link to={`/events/${Event.id}`} style={{ textDecoration: 'none' ,background:'none'}}>
         <p className={getClasses([
           styles.eventItem,
           Event.status === 'Attending' && styles
           ['eventText--completed'],
         ])}>{Event.names}</p>
         <p className={styles.time} >{Event.tel}</p>
         </Link>
      </div>
      </div>
      <div className={styles.eventActions}>
          <div className={styles.icon}
           onClick={handleDelete} 
           >
             <MdDelete/>
          </div>
          <div className={styles.icon}
          onClick={handleUpdate} 
      
          >
             <MdEdit/>
          </div>
        </div>
    </div>
    <EventModal 
     type = 'update'
     Event = {Event}
     modalOpen={updateModalOpen}
     setModalOpen={setUpdateModalOpen}/>
     
    </>
  )
}

export default EventItem