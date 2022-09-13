import React from 'react';
import "./Home.css";
import logo from "../../Assets/Logo.png";
import heroimg from "../../Assets/hero-img.png";
import righticon from "../../Assets/circle-check-regular.png";
import serviceiconone from "../../Assets/s-1.png";
import serviceicontwo from "../../Assets/s-2.png";
import serviceiconthree from "../../Assets/s-3.png";
import serviceiconfour from "../../Assets/s-4.png";
import aboutimg from "../../Assets/about-img.png";
import feature from "../../Assets/hospital.png";
import fone from "../../Assets/f-1.png";
import ftwo from "../../Assets/f-2.png";
import fthree from "../../Assets/f-3.png";
import ffour from "../../Assets/f-4.png";
import sliderimg from '../../Assets/testi.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import plus from "../../Assets/plus.png";
import star from "../../Assets/star.png";
import faqimg from "../../Assets/faq.png";
import img3 from '../../Assets/contact.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
const Home = () => {
    const settings = {
        dots: false,
        centerPadding: "60px",
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: false,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
        <div className='main-bg'>
            {/* navbar start */}
            <nav className='container mx-auto'>
                <div class="navbar">
                    <div class="navbar-start">
                        <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a className='text-color'>Home</a></li>
                            <li><a className='text-color'>About</a></li> 
                            <li><a className='text-color'>Departments</a></li> 
                            <li><a className='text-color'>Pages</a></li> 
                            <li><a className='text-color'>Blog</a></li> 
                            <li><a className='text-color'>Contacts</a></li> 
                        </ul>
                        </div>
                        <a class="normal-case text-xl"><img src={logo}></img></a>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                        <li><a  className='text-color'>Home</a></li>
                            <li><a className='text-color'>About</a></li> 
                            <li><a  className='text-color'>Departments</a></li> 
                            <li><a  className='text-color'>Pages</a></li> 
                            <li><a  className='text-color'>Blog</a></li> 
                            <li><a className='text-color'>Contacts</a></li> 
                        </ul>
                    </div>
                    <div class="navbar-end">
                        <a className='btn btn-primary text-white'>Free Consulation</a>
                    </div>
                </div>
            </nav>
            {/* navbar end */}

            {/* Hero area start fro here */}
            <section className='px-mobile container mx-auto md:flex lg:flex lg:flex-row  justify-between pt-14 pb-14 flex flex-col'>
                <div>
                    <h1 className='text-center lg:text-left md:text-left lg:text-6xl md:text-5xl text-3xl w-full lg:w-9/12 md:w-9/12 font-medium hero-heading text-[#1E1E1E]'>Your <span className='text-[#2D89FF] '>Health</span> Is Our Top <span className='text-[#642DFF]'>Priority</span></h1>
                    <p className='text-base text-[#575757] hero-paragraph '>There are many variations of passages of lpsum available, but the majority hae suffered.</p>
                    <div className='hero-btn-wrapper'><a href='#' className='hero-btn hover:bg-[#642DFF] transition duration-150 ease-out text-white mt-5'>Meet Our Specialist</a></div>
                    <div className='flex flex-col lg:flex-row md:flex-row pt-10'>
                        <div className='text-center pb-5 pr-0 md:pr-11 lg:pr-11'>
                            <h3 className='text-[#642DFF] font-semibold text-2xl'>262k+</h3>
                            <p className='text-[#575757] text-sm'>Recovered Patients</p>
                        </div>
                        <div className='text-center pb-5 pr-0 md:pr-11 lg:pr-11'>
                            <h3 className='text-[#642DFF] font-semibold text-2xl'>262k+</h3>
                            <p className='text-[#575757] text-sm'>Recovered Patients</p>
                        </div>
                        <div className='text-center pb-5 lg:pb-0 md:pb-0'>
                            <h3 className='text-[#642DFF] font-semibold text-2xl'>262k+</h3>
                            <p className='text-[#575757] text-sm'>Recovered Patients</p>
                        </div>
                    </div>
                </div>
                <div className='hero-column-two'>
                    <div className='hero-image-wrapper'><img src={heroimg} alt=""></img></div>
                    {/* <div><button className='hero-second-column-btn text-white'><img src={righticon} alt=""></img>Regular Checkup</button></div> */}
                </div>
            </section>

            {/* service-area-start */}
            <section className='px-mobile container mx-auto pt-14 pb-14'>
                <h3 className='text-base font-medium text-[#642DFF] text-center'>Our Services</h3>
                <h2 className='lg:text-3xl text-2xl text-[#1E1E1E] font-medium text-center pt-3'>Services For Your Health</h2>
                <div className='service-cad-wrapper grid lg:grid-cols-4 gap-10 pt-10 md:grid-cols-2 grid-cols-1 lg:px-0 md:px-0 px-8'>
                    <div className='service-card bg-white'>
                        <div className='service-icon-wrapper'><img src={serviceiconone} alt=''></img></div>
                        <h4 className='font-normal service-box-heading text-xs text-[#1E1E1E]'>Cardiology</h4>
                        <h3 className='font-normal text-base text-[#1E1E1E] w-4/5 py-3'>Seduahag perspiciati under omnised atused error.</h3>
                        <a className='service-btn transition duration-150 ease-out hover:ease-in hover:text-[#2D89FF] text-lg text-[#1E1E1E] font-medium' href='#'>Explore Now</a>
                    </div>
                    <div className='service-card bg-white'>
                        <div className='service-icon-wrapper'><img src={serviceicontwo} alt=''></img></div>
                        <h4 className='font-normal service-box-heading text-xs text-[#1E1E1E]'>Monthly Check Up</h4>
                        <h3 className='font-normal text-base text-[#1E1E1E] w-4/5 py-3'>Seduahag perspiciati under omnised atused error.</h3>
                        <a className='service-btn transition duration-150 ease-out hover:ease-in hover:text-[#2D89FF] text-lg text-[#1E1E1E] font-medium' href='#'>Explore Now</a>
                    </div>
                    <div className='service-card bg-white'>
                        <div className='service-icon-wrapper'><img src={serviceiconthree} alt=''></img></div>
                        <h4 className='font-normal service-box-heading text-xs text-[#1E1E1E]'>Dental Care</h4>
                        <h3 className='font-normal text-base text-[#1E1E1E] w-4/5 py-3'>Seduahag perspiciati under omnised atused error.</h3>
                        <a className='service-btn transition duration-150 ease-out hover:ease-in hover:text-[#2D89FF] text-lg text-[#1E1E1E] font-medium' href='#'>Explore Now</a>
                    </div>
                    <div className='service-card bg-white'>
                        <div className='service-icon-wrapper'><img src={serviceiconfour} alt=''></img></div>
                        <h4 className='font-normal service-box-heading text-xs text-[#1E1E1E]'>Opthalmology</h4>
                        <h3 className='font-normal text-base text-[#1E1E1E] w-4/5 py-3'>Seduahag perspiciati under omnised atused error.</h3>
                        <a className='transition duration-150 ease-out hover:ease-in hover:text-[#2D89FF] text-lg text-[#1E1E1E] font-medium service-btn' href='#'>Explore Now</a>
                    </div>
                </div>
            </section>

            {/* about-us */}
            <section className='container mx-auto pt-14 pb-14 px-mobile'>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1'>
                    <div>
                        <h3 className='text-[#642DFF] text-base font-normal text-center lg:text-left md:text-left'>16+ Years Experiences </h3>
                        <h2 className='text-[#1E1E1E] lg:text-3xl md:text-3xl  text-2xl font-medium py-3 text-center lg:text-left md:text-left'>We Are Always ensure Best Medical Treatment For Your Health</h2>
                        <p className='text-[#575757] text-sm font-normal text-center lg:text-left md:text-left'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>
                    </div>
                    <div className='about-img-wrapper lg:pt-0 md:pt-5 pt-10'>
                        <img src={aboutimg} alt=""></img>
                    </div>
                </div>
            </section>

            <section className='container mx-auto pt-14 pb-14 px-mobile'>
                <div className='grid grid-cols-3 gap-4 feature-area'>
                    <div className='feature-image-wrapper'><img src={feature} alt=""></img></div>
                    <div className='col-span-2'>
                        <h3 className='text-[#642DFF] text-base font-normal text-center lg:text-left md:text-left'>Our Hospital Feature </h3>
                        <h2 className='text-[#1E1E1E] lg:text-3xl md:text-3xl  text-2xl font-medium py-3 text-center pb-10 lg:text-left md:text-left'>Make An Appointment Easy And Fast Services </h2>
                        <div className='feature-wrapper-card grid lg:grid-cols-2 md:grid-cols-2 gap-10 grid-cols-1'>
                            <div className='feature-card bg-white'>
                                <div className='feature-icon-wrapper'><img src={fone} alt=''></img></div>
                                <h4 className='font-normal feature-box-heading text-xs text-[#1E1E1E]'>24 Hours Doctor Support</h4>
                                <h3 className='font-normal text-base text-[#575757] w-4/5 py-3'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h3>
                            </div>
                            <div className='feature-card bg-white'>
                                <div className='feature-icon-wrapper'><img src={ftwo} alt=''></img></div>
                                <h4 className='font-normal feature-box-heading text-xs text-[#1E1E1E]'>24 Hours Doctor Support</h4>
                                <h3 className='font-normal text-base text-[#1E1E1E] w-4/5 py-3'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h3>
                            </div>
                            <div className='feature-card bg-white'>
                                <div className='feature-icon-wrapper'><img src={fthree} alt=''></img></div>
                                <h4 className='font-normal feature-box-heading text-xs text-[#1E1E1E]'>24 Hours Doctor Support</h4>
                                <h3 className='font-normal text-base text-[#1E1E1E] w-4/5 py-3'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h3>
                            </div>
                            <div className='feature-card bg-white'>
                                <div className='feature-icon-wrapper'><img src={ffour} alt=''></img></div>
                                <h4 className='font-normal feature-box-heading text-xs text-[#1E1E1E]'>24 Hours Doctor Support</h4>
                                <h3 className='font-normal text-base text-[#1E1E1E] w-4/5 py-3'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container mx-auto pt-5 pb-0 px-mobile'>
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div>
                        <h3 className='text-[#642DFF] lg:text-base text-sm font-normal lg:text-left md:text-left text-center'>FAQ Questions</h3>
                        <h4 className='text-[#1E1E1E] lg:text-4xl text-2xl font-medium py-3 lg:text-left md:text-left text-center'>Get Your General Answer </h4>
                        <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        Get Your General Answer                          
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className='text-[#1E1E1E]'>
                            Exercitation in fugiat est ut ad ea cupidatat ut in
                            cupidatat occaecat ut occaecat consequat est minim minim
                            esse tempor laborum consequat esse adipisicing eu
                            reprehenderit enim.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        Will I always see my own doctor?             
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p  className='text-[#1E1E1E]'>
                            In ad velit in ex nostrud dolore cupidatat consectetur
                            ea in ut nostrud velit in irure cillum tempor laboris
                            sed adipisicing eu esse duis nulla non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        What is evidence based medicine?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p  className='text-[#1E1E1E]'>
                            In ad velit in ex nostrud dolore cupidatat consectetur
                            ea in ut nostrud velit in irure cillum tempor laboris
                            sed adipisicing eu esse duis nulla non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        What is an academic medical center?                     
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p  className='text-[#1E1E1E]'>
                            In ad velit in ex nostrud dolore cupidatat consectetur
                            ea in ut nostrud velit in irure cillum tempor laboris
                            sed adipisicing eu esse duis nulla non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is one Medical’s care?               
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p  className='text-[#1E1E1E]'>
                            In ad velit in ex nostrud dolore cupidatat consectetur
                            ea in ut nostrud velit in irure cillum tempor laboris
                            sed adipisicing eu esse duis nulla non.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                        </Accordion>
                    </div>
                    <div>
                        <img src={faqimg} alt=""></img>
                    </div>
                </div>
            </section>
            <section className='container mx-auto pt-0 pb-14 px-mobile'>
                <div className='slider-wrapper'>
                    <Slider {...settings}>
                    <div className='py-5 px-2 custom-slider rounded-xl'>
                        <div className='grid  lg:grid-cols-3 md:grid-cols-3 grid-cols-1 z-50'>
                        <div className='col-span-2 p-5 z-50'>
                            <h3 className='text-[#222222] text-base'>David Jeams</h3>
                            <h4 className='text-[#000000] text-sm py-3'>Pratient</h4>
                            <p className='text-base text-[#575757]'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                        </div>
                        <div className='z-50 slider-main-img'>
                            <img src={sliderimg} alt=''></img>
                        </div>
                        </div>
                        <img className='slider-image' src={plus} alt=""></img>
                        <img className='slider-image-star' src={star} alt=""></img>
                    </div>
                    <div className='py-5 px-2 custom-slider rounded-xl'>
                        <div className='grid  lg:grid-cols-3 md:grid-cols-3 grid-cols-1 z-50'>
                        <div className='col-span-2 p-5 z-50'>
                            <h3 className='text-[#222222] text-base'>David Jeams</h3>
                            <h4 className='text-[#000000] text-sm py-3'>Pratient</h4>
                            <p className='text-base text-[#575757]'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                        </div>
                        <div className='z-50 slider-main-img'>
                            <img src={sliderimg} alt=''></img>
                        </div>
                        </div>
                        <img className='slider-image' src={plus} alt=""></img>
                        <img className='slider-image-star' src={star} alt=""></img>
                    </div>
                    
                    </Slider>
                </div>
            </section>

            <section>
                <div className="bg-[#63a7ff] text-base-100 py-14 mt-16">
                    <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 py-14">
                        <div className="relative px-3 md:px-0">
                        {/* <img className="contact-img1" src={img1} alt="" /> */}
                        <form className="contact-home w-full md:w-3/4 py-14 px-10 z-10 relative mx-auto">
                            <label className="pt-5">Full Name</label>
                            <br />
                            <input
                            type="text"
                            placeholder="Type here"
                            className="input w-full  mb-5 home-contact-input "
                            />
                            <br />
                            <label className="pt-5">Phone number</label>
                            <br />
                            <input
                            type="text"
                            placeholder="Type here"
                            className="input w-full  mb-5 home-contact-input"
                            />
                            <br />
                            <label className="pt-5">Message</label>
                            <br />
                            <input
                            type="text"
                            placeholder="Type here"
                            className="input w-full  mb-5 home-contact-input"
                            />
                            <div className="">
                            <input className="btn border-0 text-white bg-[#2D89FF]" type="Submit" />
                            </div>
                        </form>
                        {/* <img className="contact-img2" src={img2} alt="" /> */}
                        </div>

                        <div className="mx-auto">
                        <img src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;