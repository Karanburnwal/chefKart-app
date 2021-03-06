import {FaBars,FaSearch} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import {useState} from 'react'
import Subscription from './Subscription'
import Attendence from './Attendence'
import '../App.css'
import React from 'react'
import Sidebar from './Sidebar'

export default function Home() {

    const [toggle,setToggle]=useState(true);
    const [sidebar,setSidebar]=useState(false);
    const [search, setSearch] = useState(false);
    return (
        <>
        
            <div className="Home">
                
                <div className="Home-center">
                    <div className="header">
                        <div className="first">
                            { search&& <div className='search-bar'><button onClick={()=>setSearch(false)}><ImCross className='cross-search-bar'/></button><input type="text" placeholder='Search' /><FaSearch className='search'/></div>}

                            {sidebar&& <div className='sidebar'><Sidebar/><button onClick={()=>setSidebar(false)}><ImCross className='cross'/></button> </div>}

                            <button className='bars' onClick={()=>setSidebar(true)}><FaBars/></button>
                            <h2>ChefKart</h2>
                        </div>
                        <button className='search' onClick={()=>setSearch(true)} ><FaSearch/></button>
                    </div>
                    
                    <div className='link-options'>
                        <button className={!toggle?"border-btn":undefined} onClick={()=>setToggle(false)}>Attendence</button>
                        <button className={toggle?"border-btn":undefined}  onClick={()=>setToggle(true)}>Subsciption</button>
                    </div>
                </div>
                {toggle?<Subscription/>:<Attendence/>}
            </div>
            </>
    )
}
