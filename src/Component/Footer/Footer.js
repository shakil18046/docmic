import React from 'react';
import logo from '../../Assets/Logo.png';
import facebook from '../../Assets/facebook.png';
import insta from '../../Assets/insta.png';
import google from '../../Assets/google.png';
import twitter from '../../Assets/twitter.png';
import youtube from '../../Assets/youtube.png';
import "./Footer.css"
const Footer = () => {
    return (
        <div className='bg-[#E9EEF7]'>
            <footer className='container mx-auto pt-14 pb-14 px-mobile '>
                <div className='footer-col-wrapper grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                    <div>
                        <img src={logo} alt=""></img>
                        <p className='text-sm text-[#575757] font-normal w-4/5 py-5'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</p>
                        <ul className='social-icon-list-wrapper'>
                            <li className='social-icon-list'><a src="#"><img src={facebook} alt=''></img></a></li>
                            <li  className='social-icon-list'><a src="#"><img src={insta} alt=''></img></a></li>
                            <li  className='social-icon-list'><a src="#"><img src={google} alt=''></img></a></li>
                            <li className='social-icon-list'><a src="#"><img src={twitter} alt=''></img></a></li>
                            <li className='social-icon-list'><a src="#"><img src={youtube} alt=''></img></a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-sm font-medium text-[#642DFF]'>Quick Linls</h4>
                        <ul className='quicklink-list-wrapper'>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><a href='#'>About Us</a></li>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><a href='#'>Our Pricing</a></li>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><a href='#'>Our Gallery</a></li>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><a href='#'>Appointment</a></li>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><a href='#'>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                    <ul className='service-list-wrapper'>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><a href='#'>Services</a></li>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><a href='#'>Our Doctors</a></li>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><a href='#'>Our Latest News</a></li>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><a href='#'>Careers</a></li>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><a href='#'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                    <h4 className='text-sm font-medium text-[#642DFF]'>Opening Hours</h4>
                        <ul className='quicklink-list-wrapper'>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><span className='pr-3 text-[#2D89FF]'>Mon- Tue </span>08:00 AM- 05:00 PM</li>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><span className='pr-3 text-[#2D89FF]'>Wed- Thu</span>09:00 AM- 06:00 PM</li>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><span className='pr-3 text-[#2D89FF]'>Fri- Sat</span>10:00 AM- 07:00 PM</li>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><span className='pr-3 text-[#2D89FF]'>Sunday</span>Emergency Only</li>
                            <li className='quicklink-list text-xs text-[#1E1E1E]'><span className='pr-3 text-[#2D89FF]'>Personal</span>Mon- 05:00 PM</li>
                        </ul>
                    </div>
                </div>
                <div className='pt-10'>
                    <p className='font-normal	text-xs text-[#1E1E1E]'>Copyright @222 Medicom All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;