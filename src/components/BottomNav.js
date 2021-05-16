import React,{useContext} from 'react'
import {GiChefToque} from 'react-icons/gi'
import {AiOutlineCompass} from 'react-icons/ai'
import {MdHeadsetMic}  from 'react-icons/md'
import {RoomContext} from '../Context'
export default function BottomNav() {
    const context=useContext(RoomContext);
    const {nav,changeNav}=context;
    return (
        <div className='bottom-nav'>
            <div className="bottom-nav-center">
                <div className="home-btn">
                    <button onClick={()=>changeNav(0)}><GiChefToque/></button>
                </div>
                <div className="explore-btn">
                    <button onClick={()=>changeNav(1)}><AiOutlineCompass/></button>
                </div>
                <div className="contact-btn">
                    <button onClick={()=>changeNav(2)}><MdHeadsetMic/></button>
                </div>
            </div>
        </div>
    )
}
