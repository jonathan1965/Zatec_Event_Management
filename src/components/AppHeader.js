import React, { useState } from 'react';
import Button,{ SelectButton } from './Button';
import EventModal from './EventModal';
import styles from '../styles/modules/app.module.scss'

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(true);
  
  return (
    <div>
    <div className={styles.appHeader}>
       
        <Button  variant="primary" onClick={() => setModalOpen(true)}>Create Attendence</Button>
        <SelectButton>
        <option value="all">All</option>
        <option value="Attending">Attending</option>
        <option value="Not Attend">Not Attend</option>
        </SelectButton>
     </div>
     <EventModal modalOpen={modalOpen} setModalOpen={setModalOpen}></EventModal>
     </div>
  )
}

export default AppHeader