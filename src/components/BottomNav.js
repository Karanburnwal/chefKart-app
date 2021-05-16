import React,{useContext} from 'react'
import {GiChefToque} from 'react-icons/gi'
import {AiOutlineCompass} from 'react-icons/ai'
import {MdHeadsetMic}  from 'react-icons/md'
import {RoomContext} from '../Context'
export default function BottomNav() {
    const context=useContext(RoomContext);
    const {nav,changeNav}=context;
    let homeBtn="homebtn",exploreBtn="",contactBtn=""
    if(nav===0){
        homeBtn="homebtn"; exploreBtn=""; contactBtn=""
    }else if(nav===1){
        homeBtn="";exploreBtn="explorebtn" ;contactBtn=""
    }else{
        homeBtn="";exploreBtn="";contactBtn="contactbtn"
    }
    return (
        <div className='bottom-nav'>
            <div className="bottom-nav-center">
                <div>
                    <button className={homeBtn} onClick={()=>changeNav(0)}><GiChefToque/></button>
                </div>
                <div>
                    <button className={exploreBtn} onClick={()=>changeNav(1)}><AiOutlineCompass/></button>
                </div>
                <div>
                    <button className={contactBtn} onClick={()=>changeNav(2)}><MdHeadsetMic/></button>
                </div>
            </div>
        </div>
    )
}
