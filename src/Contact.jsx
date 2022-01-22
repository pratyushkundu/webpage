import React from 'react';
import Navbar from './Navbar';
import Navbar1 from './Navbar1';

const Contact = () => {
    return (
        <><div class="main_div">
            <div class="top_div">
                <div>
                    <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo1.jpg" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                </div>
                <Navbar />
            </div>
            <section id="candy" class="our-webcoderskull padding-lg">
                <div class="container">
                    <div class="row heading heading-icon">
                        <h2 style={{ fontSize: "30px", color: "black", fontWeight: "bolder" }}>HEY ! REACH OUT TO US</h2>
                    </div>
                    <ul class="row">
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: " 355px" }}>
                                <figure><img src="images/SB.jfif" class="img-responsive" alt="" /></figure>
                                <h3><a href="https://www.linkedin.com/in/shanbehera/">Prof. Shantanu Behera</a></h3>
                                <p>Department of ceramic Engineering</p>
                                <p>mail id; beherash@nitrkl.ac.in</p>
                                <p>Contact no: +91 8328928574</p>
                                <ul class="follow-us clearfix">
                                    {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li> */}
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: " 355px" }}>
                                <figure><img src="images/SN.jpg" class="img-responsive" alt="" /></figure>
                                <h3><a href="https://www.linkedin.com/in/siddhartha-nanda-2000/">Siddhartha Nanda</a></h3>
                                <p>Dual Degree - Ceramic Engineering</p>
                                <p>mail id; nanda.siddhartha2018@gmail.com</p>
                                <p>Contact no: +91 8093308828</p>
                                <ul class="follow-us clearfix">
                                    {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li> */}
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: " 355px" }}>
                                <figure><img src="images/SS.jpg" class="img-responsive" alt="" /></figure>
                                <h3><a href="#">Sakti swaroop</a></h3>
                                <p>B.Tech - Ceramic Engineering</p>
                                <p>mail id; sakti.ssm9080@gmail.com</p>
                                <p>Contact no: +91 9337318011</p>
                                <ul class="follow-us clearfix">
                                    {/* <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li> */}
                                    {/* <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li> */}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <div class="social_media_part">
                <footer>
                    <div class="top_header">
                        <section>
                            <span><i class="fa fa-map-marker"></i></span>
                            <span>NIT ROAD, Sector-2, Odisha, India, 769015</span>
                        </section>
                        <section>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Siddharth Nanda 734597839</span>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Sakti Swaroop 8936498379</span>
                        </section>
                        <section>
                            <span><i class="fa fa-envelope"></i></span>
                            <span>info@websitename.com</span>
                        </section>
                    </div>
                    <span class="border-shape"></span>
                    <div class="bottom_content">
                        <section>
                            <a href="#"><i class="fa fa-facebook" style={{ fontSize: "2rem" }}></i></a>
                            <a href="#"><i class="fa fa-instagram" style={{ fontSize: "2rem" }}></i></a>
                            <a href="#"><i class="fa fa-linkedin" style={{ fontSize: "2rem" }}></i></a>
                            {/* <a href="#"><i class="fa fa-telegram"></i></a> */}
                        </section>
                        <section>
                            <a href="/" style={{ fontSize: "1.1rem" }}>Home</a>
                            <a href="/about" style={{ fontSize: "1.1rem" }}>About</a>
                            <a href="/contact" style={{ fontSize: "1.1rem" }}>Contact</a>
                            <a href="/members" style={{ fontSize: "1.1rem" }}>Members</a>
                        </section>
                    </div>
                    <div class="copyright">
                        Copyright © 2021 NITRICS - All rights reserved
                    </div>
                </footer>
            </div>
        </div>
        </>
    );
}
export default Contact;