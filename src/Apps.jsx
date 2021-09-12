import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import Navbar1 from './Navbar1';
const Apps = () => {

    // const Home= ()=>{

    //     console.log("happy;")
    // }
    return (
        <><div class="main_div">
            <div class="top_div">
                <div>
                    <div id="logo" style={{ cursor: "pointer" }}>NITR ICS</div>
                </div>

                {/* <div className="nav_bar">
                    <h2 className="nav_hover">Home</h2>
                    <h2 className="nav_hover">AboutSociety</h2>
                    <h2 className="nav_hover" >Members</h2>
                    <h2 className="nav_hover">ContactUs</h2>
                </div> */}
                <Navbar/>
            </div>
            <div className="gallery_div">
                <div className="img_4">
                    <img src="images/img4.jpg" alt="mypic" />
                </div>
            </div>
            <div className="flash_1" style={{ backgroundcolor: "#FAFCEE" }}>
                <div id="flash_inside"><h1>FLASHBACK FRIDAY</h1></div>
            </div>
            <div className="image_div_1">
                <div className="img_1">
                    <img id="peacock" src="images/img1.jpeg" alt="mypic" />
                    <h2 id="proff1">Proff.Shnatanu T behera</h2>
                    <p id="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                        quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                        reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                    </p>
                </div>
                <div className="img_1">
                    <img id="peacock" src="images/img2.jpeg" alt="mypic" />
                    <h2 id="proff1">Proff.Shnatanu T behera</h2>
                    <p id="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                        quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                        reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                    </p>
                </div>
                <div className="img_1">
                    <img id="peacock" src="images/img3.jpeg" alt="mypic" />
                    <h2 id="proff1">Proff.Shnatanu T behera</h2>
                    <p id="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                        quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                        reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                    </p>
                </div>
            </div>
            <div className="flash_2" style={{ backgroundcolor: "#FAFCEE" }}>
                <h1>MONDAY MORNING</h1>
            </div>

            <div className="image_div_2">
                <div className="img_2">
                    <img id="peacock_1" src="images/monday1.jpeg " alt="mypic" />
                    <p id="para1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                        quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                        reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                    </p>
                </div>
                <div className="img_2">
                    <img id="peacock_1" src="images/monday2.jpeg" alt="mypic" />
                    <p id="para1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                        quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                        reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                    </p>
                </div>
                <div className="img_2">
                    <img id="peacock_1" src="images/monday3.jpeg" alt="mypic" />
                    <p id="para1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                        quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                        reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                    </p>
                </div>
            </div>
            <div className="social_media_part">
                <div className="logo_part">
                    <div className="img_3">
                        <img src="images/facebook.png" style={{ height: "70px" }} alt="mypic" />
                    </div>
                    <div className="img_3">
                        <img src="images/instagram.png" style={{ height: "70px" }} alt="mypic" />
                    </div>
                    <div className="img_3">
                        <img src="images/linkedin.png" style={{ height: "70px" }} alt="mypic" />
                    </div>
                </div>
                <div className="end_bar">
                    {/* <div className="info_div">
                        <h2 className="nav_hover_1" >Home</h2>
                        <h2 className="nav_hover_1" >AboutSociety</h2>
                        <h2 className="nav_hover_1" >Members</h2>
                        <h2 className="nav_hover_1">ContactUs</h2>
                    </div> */}
                    <Navbar1/>
                </div>
            </div>
        </div></>);
}

export default Apps;