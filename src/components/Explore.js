import React,{useState,useContext} from 'react'
import {FaBars,FaSearch} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import data from '../data'
import {IoIosCall} from 'react-icons/io'
import {RoomContext} from '../Context'
import BottomNav from './BottomNav'
import Sidebar from './Sidebar'
export default function Explore() {
    const context=useContext(RoomContext);
    const {addSubscription}=context;
    const [sidebar,setSidebar]=useState(false);
    const [search, setSearch] = useState(false);
    return (
        <div className='explore'>
            <BottomNav/>
            <div className="explore-center">
                <div className="header perfect-header">
                        <div className="first">
                            { search&& <div className='search-bar'><button onClick={()=>setSearch(false)}><ImCross className='cross-search-bar'/></button><input type="text" placeholder='Search' /><FaSearch className='search'/></div>}

                            {sidebar&& <div className='sidebar'><Sidebar/><button onClick={()=>setSidebar(false)}><ImCross className='cross'/></button> </div>}

                            <button className='bars' onClick={()=>setSidebar(true)}><FaBars/></button>
                            <h2>ChefKart</h2>
                        </div>
                        <button className='search' onClick={()=>setSearch(true)} ><FaSearch/></button>
                    </div>
                {
                    
                    data.map((member,index)=>{
                        onclick=(e)=>{
                            addSubscription(index);
                            member.mark=true;
                        }
                        return (
                            <div key={index}>
                                <div className="member-header explore-member-header">
                                    <div className="image">
                                        <img src={member.img} alt="" />
                                    </div>
                                    <div className="details">
                                        <h5>{member.name}</h5>
                                        <div className="phone-no">
                                            <IoIosCall/>
                                            <p>{member.contact}</p>
                                        </div>
                                    </div>
                                    <button name='submit' value={index} onClick={onclick}>{member.mark?<p className='added'>ADDED</p>:<p>ADD</p>}</button>
                                </div>
                            </div>
                        )
                    })
                }
                {/* <button className='subscribe_btn' onClick={changePage}>+</button> */}
            </div>
            <div className="dummy-tag"></div>
        </div>
    )
}
