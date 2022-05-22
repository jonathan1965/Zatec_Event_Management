import React from 'react'
import styles from '../styles/modules/eventItem.module.scss';
import { getClasses } from '../utils/getClasses';
import { MdDelete, MdEdit } from 'react-icons/md';
function EventItem({Event}) {
  return (
    <div className={styles.item}>
      <div className={styles.eventDetails}>
      []
      <div className={styles.texts}>
         <p className={getClasses([
           styles.eventItem,
           Event.status === 'Attending' && styles
           ['eventText--completed'],
         ])}>{Event.name}</p>
         <p className={styles.time}>{Event.tel}</p>
      </div>
      </div>
      <div className={styles.eventActions}>
          <div className={styles.icon}>
             <MdDelete/>
          </div>
          <div className={styles.icon}>
             <MdEdit/>
          </div>
        </div>
    </div>
  )
}

export default EventItem