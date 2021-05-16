import React,{useContext} from 'react'
import {FaBars,FaSearch} from 'react-icons/fa'
import data from '../data'
import {IoIosCall} from 'react-icons/io'
import {RoomContext} from '../Context'
import BottomNav from './BottomNav'

export default function Explore() {
    const context=useContext(RoomContext);
    const {addSubscription}=context;

    return (
        <div className='explore'>
            <BottomNav/>
            <div className="explore-center">
                <div className="header perfect-header">
                        <div className="first">
                            <button className='bars'><FaBars/></button>
                            <h2>ChefKart</h2>
                        </div>
                        <button className='search'><FaSearch/></button>
                </div>
                {
                    
                    data.map((member,index)=>{
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
                                    <button name='submit' value={index} onClick={()=>addSubscription(index)}>ADD</button>
                                </div>
                            </div>
                        )
                    })
                }
                {/* <button className='subscribe_btn' onClick={changePage}>+</button> */}
            </div>
        </div>
    )
}
