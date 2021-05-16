import React from 'react'
import { FaBars} from 'react-icons/fa'
import BottomNav from './BottomNav'

export default function ContactUs() {
    return (
        <div>
            <div className='explore contactUs'>
            <BottomNav/>
            <div className="explore-center">
                <div className="header perfect-header">
                        <div className="first">
                            <button className='bars'><FaBars/></button>
                            <h2>ChefKart</h2>
                        </div>
                        {/* <button className='search'><FaSearch/></button> */}
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
