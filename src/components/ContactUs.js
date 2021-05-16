import React,{useState} from 'react'
import { FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import BottomNav from './BottomNav'
import Sidebar from './Sidebar'
export default function ContactUs() {
    const [sidebar,setSidebar]=useState(false);
    // const [search, setSearch] = useState(false);
    return (
        <div>
            <div className='explore contactUs'>
            <BottomNav/>
            <div className="explore-center">
                <div className="header perfect-header">
                        <div className="first">

                            {sidebar&& <div className='sidebar'><Sidebar/><button onClick={()=>setSidebar(false)}><ImCross className='cross'/></button> </div>}

                            <button className='bars' onClick={()=>setSidebar(true)}><FaBars/></button>
                            <h2>ChefKart</h2>
                        </div>
                    </div>
                
            </div>
            <div className="contact-Us-body">
                    Contact Us <br />
                <input type="text" placeholder='email'/> <br />
                <input type="text" placeholder='Phone-no.'/> <br />
                <button>Submit</button>
                <p>We will contact you soon.</p>
            </div>
        </div>
        </div>
    )
}
