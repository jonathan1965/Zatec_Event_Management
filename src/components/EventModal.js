import React, { useEffect, useState } from 'react';
import Button from './Button';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';
import { addEvent} from '../reducers/EventReducer';
import { MdOutlineClose } from 'react-icons/md';
import styles from '../styles/modules/modal.module.scss';
import { useDispatch } from 'react-redux';
 

function EventModal({ modalOpen, setModalOpen}) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('Not Attending');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name,username,tel,email,status)
      if (name && username && tel && email && status ) {
          dispatch(
            addEvent({
              id: uuid(),
              name,
              username,
              tel,
              email,
              status,
              time: new Date().toLocaleString(),
            })
          );
          toast.success('Attendence added successfully');
          setModalOpen(false)
      } else {
        toast.error('All Field are Optional')
      }
    };
  return (
      modalOpen && (
    <div className={styles.wrapper}>
     <div className={styles.container}>
        <div className={styles.closeButton}
              onKeyDown={() => setModalOpen(false)}
              onClick={() => setModalOpen(false)}
              role="button"
              tabIndex={0} 
          >
            <MdOutlineClose/>
        </div>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
              <h1 className={styles.formTitle}>
                Add Event Attendence
              </h1>
              <label htmlFor="title">
                Name
                <input
                  type="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                
                />
              </label>
              <label htmlFor="title">
                Surname
                <input
                  type="Username"
                  id="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                
                />
              </label>
              <label htmlFor="title">
                Telephone
                <input
                  type="tel"
                  id="phone"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                
                  
                />
              </label>
              <label htmlFor="title">
                Email
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                
                />
              </label>
              <label htmlFor="type">
                Status
                <select
                  id="status" name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                
                >
                  <option value="Attending">Attending</option>
                  <option value="Not Attending ">Not Attending</option>
                </select>
              </label>
              <div className={styles.buttonContainer}>
                <Button type="submit" variant="primary">
                Add Attendence
                </Button>
                <Button variant="secondary"
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}  >
                  Cancel
                </Button>
              </div>
            </form>
     </div>
    </div>
      )
  )
}

export default EventModal