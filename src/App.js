import './App.css';
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Explore from './components/Explore'
import ContactUs from './components/ContactUs'
import BottomNav from './components/BottomNav';
import {RoomContext} from './Context'
import {useContext} from 'react'
function App() {
  const context=useContext(RoomContext);
    const {nav}=context;
  let page=<Navbar/>
  if(nav===0){
    page=<Navbar/>
  }else if(nav===1){
    page=<Explore/>
  }else{
    page=<ContactUs/>
  }
  return (
    <>
      <div className="app">
        {page}
      </div>
    </>
  );
}

export default App;
