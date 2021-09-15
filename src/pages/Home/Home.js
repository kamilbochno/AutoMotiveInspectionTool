import React from 'react';
import Logo from './assets/logo.png';
import Hero_image from './assets/hero-image.jpg';
import About_image from './assets/about.jpg';
import TestimonialsSlider from './components/slider';
import ClientSlider from './components/clientSlider';
import Team1 from '../Home/assets/team1.jpg';
import Team2 from '../Home/assets/team2.jpg';
import Team3 from '../Home/assets/team3.jpg';
import Team4 from '../Home/assets/team4.jpg';
import Blog1 from '../Home/assets/blog1.jpg';
import Blog2 from '../Home/assets/blog2.jpg';
import Blog3 from '../Home/assets/blog3.jpg';
import Blog_img from '../Home/assets/blog_img.jfif';
import Recent1 from '../Home/assets/recent1.jpg';
import Recent2 from '../Home/assets/recent2.jpg';
import { VscArrowUp } from 'react-icons/vsc';
import { GiTurbine } from 'react-icons/gi';
import { GiFlatTire } from 'react-icons/gi';
import { GiGears } from 'react-icons/gi';
import { CgNotes } from 'react-icons/cg';
import { GiCarBattery } from 'react-icons/gi';
import { GiTireTracks } from 'react-icons/gi';
import { GrUserWorker } from 'react-icons/gr';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoTimerOutline } from 'react-icons/io5';
import { IoCarSportOutline } from 'react-icons/io5';
import { ContactForm } from './components/contact.js';
import './Home.css';
import IdleTimerContainer from '../LoggedIn/components/IdleTimerContainer';
const Home = () => {
return (
  <div className="Home" id="scroll">
    <IdleTimerContainer/>
    <div className="fixed-navbar">
      </div>
      	<section className="hero hero-static-image-2">
          <div className="container">
              <div className="row">
                  <div className="col col-lg-6 col-md-7 slide-caption">
                      <div className="slide-title">
                          <h2>
                            Best Car Repairing Services
                          </h2>
                      </div>
                      <div className="slide-subtitle">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt sem a diam interdum laoreet. Vestibulum quis velit mauris.</p>
                      </div>
                      <div className="btns">
                            <a className="theme-btn-s2" href="#contact">
                                Contact Us
                            </a>
                            </div>
                            <div className="hero-image-2">
                                <img src={Hero_image} alt=""></img>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-section-2" id="about">
                <div className="content-area">
                    <div className="left-content">
                        <img src={About_image} alt=""/>
                    </div>
                    <div className="right-content">
                        <div className="about-content">
                            <div className="section-title">
                                <span>About Our Company</span>
                                <h2>
                                    How We Can Help you
                                </h2>
                            </div>
                            <div className="details">
                                <p>Nullam tincidunt pellentesque nulla vitae imperdiet. Ut sit amet lorem dictum, efficitur justo ac, cursus turpis. Duis tempus elit et sapien posuere, at ultricies velit faucibus. Etiam elementum tempus sem, quis sodales metus scelerisque eget. Pellentesque ut sagittis nisi, a vehicula enim. Proin a suscipit urna.</p>
                                <p>Suspendisse malesuada, orci cursus lacinia eleifend, magna tortor condimentum dolor, at interdum felis mi vitae tortor.</p>
                                <a className="theme-btn-s3" href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="service-style-1 section-padding" id="services">
                <div className="container">
                    <div className="col-12">
                        <div className="section-title-s2 text-center">
                            <span>What We Do</span>
                            <h2>
                                Our Services
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-wrap">
                                <div className="service-icon">
                                    <div  className="icon">
                                        <GiTurbine/>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h2>Engine Repair</h2>
                                    <p>Donec efficitur vulputate dictum. Cras sed lectus tempor, suscipit quam ut, pretium erat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-wrap">
                                <div className="service-icon-2">
                                    <div className="icon">
                                        <GiFlatTire/>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h2>Tires Replacement</h2>
                                    <p>Donec efficitur vulputate dictum. Cras sed lectus tempor, suscipit quam ut, pretium erat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-wrap">
                                <div className="service-icon-3">
                                    <div className="icon">
                                        <GiGears/>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h2>Transmission</h2>
                                    <p>Donec efficitur vulputate dictum. Cras sed lectus tempor, suscipit quam ut, pretium erat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-wrap">
                                <div className="service-icon-4">
                                    <div className="icon">
                                        <CgNotes/>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h2>Diagnostic</h2>
                                    <p>Donec efficitur vulputate dictum. Cras sed lectus tempor, suscipit quam ut, pretium erat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-wrap">
                                <div className="service-icon-5">
                                    <div className="icon">
                                        <GiCarBattery/>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h2>Batteries</h2>
                                    <p>Donec efficitur vulputate dictum. Cras sed lectus tempor, suscipit quam ut, pretium erat.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-wrap">
                                <div className="service-icon-6">
                                    <div className="icon">
                                        <GiTireTracks/>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h2>Brakes</h2>
                                    <p>Donec efficitur vulputate dictum. Cras sed lectus tempor, suscipit quam ut, pretium erat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fun-fact-section-s2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="fun-fact-grids">
                                <div className="grid">
                                    <div className="hx-counter-icon">
                                        <GrUserWorker/>
                                    </div>
                                    <h2>300+</h2>
                                    <p>Expert Technicians</p>
                                </div>
                                <div className="grid">
                                    <div className="hx-counter-icon">
                                        <BsFillPeopleFill/>
                                    </div>
                                    <h2>1037</h2>
                                    <p>Satisified Clients</p>
                                </div>
                                <div className="grid">
                                    <div className="hx-counter-icon">
                                        <IoTimerOutline/>
                                    </div>
                                    <h2>20+</h2>
                                    <p>Years Experience</p>
                                </div>
                                <div className="grid">
                                    <div className="hx-counter-icon">
                                        <IoCarSportOutline/>
                                    </div>
                                    <h2>3150</h2>
                                    <p>Completed Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            <div className="testimonial-area">
            <div className="container">
            <TestimonialsSlider/>
            </div>
            </div>
            <div className="hx-team-area section-padding" id="team">
                <div className="container">
                    <div className="col-12">
                        <div className="section-title-s2 text-center">
                            <span>Meet Our Expertise</span>
                            <h2>Our Awesome Team</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12 col-g">
                            <div className="hx-team-single">
                                <div className="hx-team-img">
                                    <img src={Team1} alt=""/>
                                    <div className="SocialIcons">
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </div>
                                    <div className="profileInfo">
                                        <h3>John Smith</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 col-g">
                            <div className="hx-team-single">
                                <div className="hx-team-img">
                                    <img src={Team2} alt=""/>
                                    <div className="SocialIcons">
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </div>
                                    <div className="profileInfo">
                                        <h3>Maria Dandy</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 col-g">
                            <div className="hx-team-single">
                                <div className="hx-team-img">
                                    <img src={Team3} alt=""/>
                                    <div className="SocialIcons">
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </div>
                                    <div className="profileInfo">
                                        <h3>Patrick Sent</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 col-g">
                            <div className="hx-team-single">
                                <div className="hx-team-img">
                                    <img src={Team4} alt=""/>
                                    <div className="SocialIcons">
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </div>
                                    <div className="profileInfo">
                                        <h3>Emma Sand</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="blog-section section-padding" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title-s2 text-center">
                                <span>Our blog</span>
                                <h2>Latest News</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="blog-grids clearfix">
                                <div className="grid">
                                    <div className="entry-media">
                                        <img src={Blog1} alt=""/>
                                    </div>
                                    <div className="details">
                                        <h3>
                                            <a href="#">Important tips for your favourite car.</a>
                                        </h3>
                                        <ul className="entry-meta">
                                            <li>
                                                <img src={Blog_img} alt=""/>
                                                By <a href="#">Lilly Anne</a>
                                            </li>
                                            <li>October 15,2020</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="entry-media">
                                        <img src={Blog2} alt=""/>
                                    </div>
                                    <div className="details">
                                        <h3>
                                            <a href="#">Important tips for your favourite car.</a>
                                        </h3>
                                        <ul className="entry-meta">
                                            <li>
                                                <img src={Blog_img} alt=""/>
                                                By <a href="#">Lilly Anne</a>
                                            </li>
                                            <li>October 15,2020</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="entry-media">
                                        <img src={Blog3} alt=""/>
                                    </div>
                                    <div className="details">
                                        <h3>
                                            <a href="#">Important tips for your favourite car.</a>
                                        </h3>
                                        <ul className="entry-meta">
                                            <li>
                                                <img src={Blog_img} alt=""/>
                                                By <a href="#">Lilly Anne</a>
                                            </li>
                                            <li>October 15,2020</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="hx-contact-area" id="contact">
                <div className="container">
                    <div className="row">
                        <ContactForm/>
                        
                    </div>
                </div>
                <div className="hx-client-area">
                    <div className="container">
                        <div className="hx-client-item">
                            <ClientSlider/>
                        </div>
                    </div>
                </div>
                <div className="hx-site-footer-area">
                    <div className="hx-site-footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 footer-t">
                                    <div className="hx-site-footer-text">
                                        <div className="hx-site-logo">
                                            <img src={Logo} alt=""/>
                                        </div>
                                        <p>Simply dummy text of the printing and typesetting industry.Lorem Ipsum</p>
                                        <div className="social">
                                            <ul className="d-flex">
                                                <li>
                                                    <a href="/">
                                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-mg-6 col-sm-12 footer-t">
                                    <div className="hx-site-footer-link">
                                        <h3>Recent post</h3>
                                        <div className="hx-latest-section">
                                            <div className="posts">
                                                <div className="post">
                                                    <div className="img-holder">
                                                        <img src={Recent1} alt=""></img>
                                                    </div>
                                                    <div className="details">
                                                        <p><a href="/">Most important issue for your car.</a></p>
                                                        <span>24 May 2019</span>
                                                    </div>
                                                </div>
                                                <div className="post">
                                                    <div className="img-holder">
                                                        <img src={Recent2} alt=""></img>
                                                    </div>
                                                    <div className="details">
                                                        <p><a href="/">Most important issue for your car.</a></p>
                                                        <span>24 May 2019</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 footer-t">
                                    <div className="hx-site-footer-address">
                                        <h3>Address</h3>
                                        <div className="adress-section">
                                            <ul>
                                                <li>Head Office Address:</li>
                                                <li>123 King Street, Melbourne West, </li>
                                                <li>Australia</li>
                                            </ul>
                                            <ul className="ad">
                                                <li><span>Phone:</span> 888 123-4578</li>
                                                <li><span>Email:</span> info@example.com</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12 footer-t">
                                    <div className="hx-site-footer-service">
                                        <h3>Services</h3>
                                        <div className="service-section">
                                            <ul>
                                                <li>
                                                    <a href="#about">About</a>
                                                </li>
                                                <li>
                                                    <a href="#services">Services</a>
                                                </li>
                                                <li>
                                                    <a href="#testimonials">Testimonials</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hx-site-footer-bottom">
                        <div className="container">
                            <div className="hx-site-footer-bottom-content">
                                <div className="row">
                                    <div className="col-12">
                                        <span>
                                            Privacy Policy | © 2021 <a href="/">AutomotiveInspectionTool</a> All rights reserved
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="header-menu">
                        <ul className="smothscroll">
                            <li>
                                <a href="#scroll">
                                    <div className="arrow">
                                        <VscArrowUp/>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        
        
);
}
export default Home; 