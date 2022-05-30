import './App.css';
import Header from './components/Header';
import style from './styles/modules/app.module.scss';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import EventDetails from './components/EventDetails';
import About from './components/About';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
    <div>
     <Header/>
     <Routes> 
     <Route path="/" element={<Dashboard/>}/>
     <Route path="/addAttedees" element={<MainPage/>}/>
     <Route path="/homepage" element={<Homepage/>}/>
     <Route path="/about" element={<About/>} />
     <Route path="/events/:id" element={<EventDetails/>} />
     </Routes>
    
    <Toaster toastOptions={{
      style:{
        fontSize:'1.5rem'
      }}
    }/>
    </div>
    </Router>
  );
}

export default App;
