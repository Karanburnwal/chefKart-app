import React from 'react'
import {IoIosCall} from 'react-icons/io'
import {useState} from 'react'

const month=["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const date="10 Mar 2021"
export default function SubMember( {member}) {
    const [end, setEnd]=useState("10 Apr 2021");
    function handleDate(){
        const day=10;
        const mon=month[4];
        const year=2021;
        setEnd(day+" "+mon+" "+year);
    }
    return (
        <div className='subscribed-member'>
            <p className='tag'>Premium</p>
            <div className="member-header">
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
            </div>
            <div className="subscribed-member-center">
                <div className="subscription-details">
                    <h6>Subscription-details</h6>
                    <div className="plan-date">
                        <div className="start">
                            <p>Start</p>
                            <h5>{date}</h5>
                        </div>
                        <div className="End">
                            <p>End</p>
                            <h5>{end}</h5>
                        </div>
                    </div>
                </div>
                <div className="plan-btn">
                    <button className='cancel-btn'>Cancel Plan</button>
                    <button onClick={handleDate}>Renew Plan</button>
                </div>
            </div>
            
        </div>
    )
}
