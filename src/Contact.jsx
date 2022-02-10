import React from 'react';
import Navbar from './Navbar';
import Navbar1 from './Navbar1';

const functionnav = ()=>{
    const widths = 700
    if(window.screen.width <= widths){
        return(<>
             <div class="top_div">
            <div>
                <div id="logo" style={{ cursor: "pointer" }}><img src="images/pics.png" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
            </div>
            <Navbar />
        </div>
        </>)
    }
        else{
            return <Navbar />
        }
    }
const Contact = () => {
    return (
        <><div class="main_div">
            {/* <div class="top_div">
                <div>
                    <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo1.jpg" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                </div>
                <Navbar />
            </div> */}
            {functionnav()}
            <section id="candy" class="our-webcoderskull padding-lg">
                <div class="container">
                    <div style={{height:"260px"}}><div class="row heading heading-icon">
                        <h2 style={{ fontSize: "30px", color: "black", fontWeight: "bolder" }}></h2>
                    </div></div>
                    <ul class="row">
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block equal-hight" style={{ height: " 355px" }}>
                                <figure><img src="images/SB.jpg" style={{objectFit:"cover"}} class="img-responsive" alt="" /></figure>
                                <h3><a href="https://www.linkedin.com/in/shanbehera/">Prof. Shantanu Behera</a></h3>
                                <p>Department of ceramic Engineering</p>
                                <p>mail id: beherash@nitrkl.ac.in</p>
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
                                <figure><img src="images/SN.jpg" class="img-responsive" alt="" style={{objectFit:"cover"}}/></figure>
                                <h3><a href="https://www.linkedin.com/in/siddhartha-nanda-2000/">Siddhartha Nanda</a></h3>
                                <p>Department of Ceramic Engineering</p>
                                <p>mail id: nanda.siddhartha2018@gmail.com</p>
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
                                <figure><img src="images/SS.jpg" class="img-responsive" style={{objectFit:"cover"}} alt="" /></figure>
                                <h3><a href="#">Sakti Swarup Mohapatra</a></h3>
                                <p>Department of Ceramic Engineering</p>
                                <p>mail id: sakti.ssm9080@gmail.com</p>
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
                            <span>NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA, Odisha, India, 769008</span>
                        </section>
                        <section>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Siddhartha Nanda  8093308828</span>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Sakti Swarup  9337318011</span>
                        </section>
                        <section>
                            <span><i class="fa fa-envelope"></i></span>
                            <span>incersnitr@gmail.com</span>
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