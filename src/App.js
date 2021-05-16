import './App.css';
import Navbar from './components/Navbar'
import Explore from './components/Explore'
import ContactUs from './components/ContactUs'
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
