import React from 'react';
import Navbar from './Navbar';
import Navbar1 from './Navbar1';

const Contact = () => {
        return(
        <><div class="main_div">
            <div class="top_div">
                <div>
                <div id="logo" style={{ cursor: "pointer" }}>NITR ICS</div>
                </div>

                {/* <div class="nav_bar">
                    <h2 class="nav_hover">Home</h2>
                    <h2 class="nav_hover">AboutSociety</h2>
                    <h2 class="nav_hover">Members</h2>
                    <h2 class="nav_hover">ContactUs</h2>
                </div> */}
                <Navbar/>
            </div>
            
            <div class="gallery_div">
                <div class="img_4">
                    {/* <img src="images/img4.jpg" alt="mypic" /> */}
                    <h1>Contact page</h1>
                </div>
            </div>
            {/* <div class="flash_1" style={{ backgroundcolor: "#FAFCEE" }}>
                <div id="flash_inside"><h1>FLASHBACK FRIDAY</h1></div>
            </div>
            <div class="image_div_1">
                <div class="img_1">
                    <img id="peacock" src="images/img1.jpeg" alt="mypic" />
                    <h2 id="proff1">Proff.Shnatanu T behera</h2>
                    <p id="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                        quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                        reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                    </p>
                </div>
                <div class="img_1">
                    <img id="peacock" src="images/img2.jpeg" alt="mypic" />
                    <h2 id="proff1">Proff.Shnatanu T behera</h2>
                    <p id="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                        quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                        reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                    </p>
                </div>
                <div class="img_1">
                    <img id="peacock" src="images/img3.jpeg" alt="mypic" />
                    <h2 id="proff1">Proff.Shnatanu T behera</h2>
                    <p id="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                        quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                        reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                    </p>
                </div>
            </div>
            <div class="flash_2" style={{ backgroundcolor: "#FAFCEE" }}>
                <h1>MONDAY MORNING</h1>
            </div>

            <div class="image_div_2">
                <div class="img_2">
                    <img id="peacock_1" src="images/monday1.jpeg " alt="mypic" />
                    <p id="para1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                        quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                        reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                    </p>
                </div>
                <div class="img_2">
                    <img id="peacock_1" src="images/monday2.jpeg" alt="mypic" />
                    <p id="para1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                        quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                        reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                    </p>
                </div>
                <div class="img_2">
                    <img id="peacock_1" src="images/monday3.jpeg" alt="mypic" />
                    <p id="para1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                        quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                        reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                    </p>
                </div>
            </div> */}
            <div class="social_media_part">
                <div class="logo_part">
                    <div class="img_3">
                        <img src="images/facebook.png" style={{ height: "70px" }} alt="mypic" />
                    </div>
                    <div class="img_3">
                        <img src="images/instagram.png" style={{ height: "70px" }} alt="mypic" />
                    </div>
                    <div class="img_3">
                        <img src="images/linkedin.png" style={{ height: "70px" }} alt="mypic" />
                    </div>
                </div>
                <div class="end_bar">
                    {/* <div class="info_div">
                        <h2 class="nav_hover_1">Home</h2>
                        <h2 class="nav_hover_1">AboutSociety</h2>
                        <h2 class="nav_hover_1">Members</h2>
                        <h2 class="nav_hover_1">ContactUs</h2>
                    </div> */}
                    <Navbar1/>
                </div>
            </div>
        </div></>
        );
}
export default Contact;