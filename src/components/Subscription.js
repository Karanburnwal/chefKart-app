import React from 'react'
import {useState,useContext} from 'react'
import SubMember from './SubMember'
// import data from '../data'
import {RoomContext} from '../Context'
import {Link} from 'react-router-dom'
import BottomNav from './BottomNav'
export default function Subscription() {
    const context=useContext(RoomContext);
    const {subData,changeNav}=context;
    return (<>
        <div className='subscription'>
            <button className='subscribe_btn' onClick={()=>changeNav(1)}>+</button>
            <BottomNav/>
            <div className="subscription-center">
                <div className="subscription-header">
                <h3>My Subscription</h3>
                </div>
                {
                    subData.map((member)=>{
                        return <SubMember member={member}/>
                    })
                }
                {/* <button className='subscribe_btn'>+</button> */}
            </div>
        </div>

        </>
    )
}
