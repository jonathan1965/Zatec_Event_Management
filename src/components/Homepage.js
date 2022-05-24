import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header/home.css'
import PageTitle from './PageTitle';
import style from '../styles/modules/app.module.scss';
import AppContent from './AppContent';

function Homepage() {
  return (
    <div>
    <div className="container">
      <PageTitle>Attendence</PageTitle>
      <div className={style.app__wrapper}>
        <AppContent></AppContent>
      </div>
    </div>
    </div>
  )
}

export default Homepage