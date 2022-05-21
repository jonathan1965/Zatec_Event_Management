import './App.css';
import Header from './components/Header';
import PageTitle from './components/PageTitle';
import style from './styles/modules/app.module.scss';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
     <Header/>
    <div className="container">
      <PageTitle>Attendence</PageTitle>
      <div className={style.app__wrapper}>
        <AppHeader></AppHeader>
        <AppContent></AppContent>
      </div>
    </div>
    <Toaster toastOptions={{
      style:{
        fontSize:'1.5rem'
      }}
    }/>
    </div>
  );
}

export default App;
