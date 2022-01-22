import React from 'react';
import Navbar from './Navbar';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { SliderData } from './component/SliderData';
import { SliderData1 } from './component/SliderData1';
import { Box, makeStyles } from "@material-ui/core";

import App1 from './App1';
const useStyles = makeStyles({
    image: {
        height: 500,
        width: 320,
    },
    wrapper: {
        padding: "55px 55px",
    },
})
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1100 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1100, min: 602 },
        items: 2
    },

};

const Events = () => {
      const classes = useStyles();
    const functiondeal1 = () => {
        const width2 = 700;
        if (window.screen.width >= width2) {
            return <>
                <a href="/blog" style={{ textDecoration: "none" }}>
                    <div className="img_1">
                        <img id="peacock" src="images/FF1.jpg" alt="mypic" />

                        <h2 id="proff1" style={{ color: "#000" }}>Proff.Shantanu T behera</h2>
                        <p id="para" style={{ color: "#000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                            quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                            reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                        </p>
                    </div>
                </a>
                <a href="/blog1" style={{ textDecoration: "none" }}>
                    <div className="img_1">
                        <img id="peacock" src="images/FF2.png" alt="mypic" />

                        <h2 id="proff1" style={{ color: "#000" }}>Proff.Ranjan Das</h2>
                        <p id="para" style={{ color: "#000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                            quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                            reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                        </p>
                    </div>
                </a>
                <a href="/blog2" style={{ textDecoration: "none" }}>
                    <div className="img_1">
                        <img id="peacock" src="images/FF3.png" alt="mypic" />

                        <h2 id="proff1" style={{ color: "#000" }}>Proff.Beda Mohanty</h2>
                        <p id="para" style={{ color: "#000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                            quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                            reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                        </p>
                    </div>
                </a></>

        }
        else {
            return <>
                <a href="/blog" style={{ textDecoration: "none" }}>
                    <div className="img_1">
                        <img id="peacock" src="images/FF1.jpg" alt="mypic" />

                    </div>
                </a>
                <a href="/blog1" style={{ textDecoration: "none" }}>
                    <div className="img_1">
                        <img id="peacock" src="images/FF2.png" alt="mypic" />

                    </div>
                </a>
                <a href="/blog2" style={{ textDecoration: "none" }}>
                    <div className="img_1">
                        <img id="peacock" src="images/FF3.png" alt="mypic" />

                    </div>
                </a></>
        }
    }
    const functiondeal2 = () => {
        const width2 = 700;
        if (window.screen.width >= width2) {
            return <><a href="/blog1" style={{ textDecoration: "none" }}>
                <div className="img_2">
                    <img id="peacock_1" src="images/MM1.jpg " alt="mypic" />
                    <p id="para1" style={{ color: "#000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                        quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                        reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                    </p>
                </div>
            </a>
                <a href="/blog1" style={{ textDecoration: "none" }}>
                    <div className="img_2">
                        <img id="peacock_1" src="images/MM2.jpg" alt="mypic" />
                        <p id="para1" style={{ color: "#000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                            quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                            reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                        </p>
                    </div>
                </a>
                <a href="/blog1" style={{ textDecoration: "none" }}>
                    <div className="img_2">
                        <img id="peacock_1" src="images/MM3.jpg" alt="mypic" />
                        <p id="para1" style={{ color: "#000" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                            quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                            reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                        </p>
                    </div>
                </a></>
        }
        else {
            return <><a href="/blog1" style={{ textDecoration: "none" }}>
                <div className="img_2">
                    <img id="peacock_1" src="images/MM1.jpg " alt="mypic" />
                </div>
            </a>
                <a href="/blog1" style={{ textDecoration: "none" }}>
                    <div className="img_2">
                        <img id="peacock_1" src="images/MM2.jpg" alt="mypic" />
                    </div>
                </a>
                <a href="/blog1" style={{ textDecoration: "none" }}>
                    <div className="img_2">
                        <img id="peacock_1" src="images/MM3.jpg" alt="mypic" />
                    </div>
                </a></>
        }
    }
    const functiondeal3 = () => {
        const width2 = 700;
        if (window.screen.width >= width2) {
            return <>
                <div className="logo_part">
                    <h2>NITR ICS</h2>
                    <h3 style={{ display: "flex", flexDirection: "column", marginLeft: "-550px", color: "orange", marginTop: "40px" }}><span>Address:NIT ROURKELA </span><span>Pin-Code:769001</span></h3>
                    <div className="img_3">
                        <a href="">
                            <i className="fa fa-facebook"></i></a>
                    </div>
                    <div className="img_3">
                        <a href="https://instagram.com/nitr_ics?utm_medium=copy_link">  <i class="fa fa-instagram"></i></a>
                    </div>
                    <div className="img_3">
                        <a href="https://www.linkedin.com/company/incers-nitr"><i class="fa fa-linkedin"></i></a>
                    </div>
                    <h3 style={{ display: "flex", flexDirection: "column", color: "orange", marginTop: "40px", marginRight: "-500px" }}><span><i class="fa fa-phone" style={{ marginRight: "10px", marginLeft: "10px" }}></i>Siddharth Nanda Sir:92732709727</span><span><i class="fa fa-phone" style={{ marginRight: "10px", marginLeft: "10px" }}></i>Sakti Swaroop Sir:792347979</span></h3>
                </div>
            </>
        }
        else {
            return <>
                <div className="logo_part">
                    <div className="img_3">
                        <a href="">
                            <i className="fa fa-facebook"></i></a>
                    </div>
                    <div className="img_3">
                        <a href="https://instagram.com/nitr_ics?utm_medium=copy_link">  <i className="fa fa-instagram"></i></a>
                    </div>
                    <div className="img_3">
                        <a href="https://www.linkedin.com/company/incers-nitr"><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </>

        }
    }

    const functiondeal = () => {
        const width2 = 700;
        if (window.screen.width <= width2) {
            return <App1 />
        }
        else {
            return <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                {
                    SliderData.map(product => {
                        return (<a href={product.reciever}>
                            <Box textAlign="center" className={classes.wrapper}>
                                <img src={product.image} className={classes.image} />
                            </Box>
                        </a>)
                    })
                }
            </Carousel>
        }
    }
    const functiondeals = () => {
        const width2 = 700;
        if (window.screen.width <= width2) {
            return <App1 />
        }
        else {
            return <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                {
                    SliderData1.map(product => {
                        return (<a href={product.reciever}>
                            <Box textAlign="center" className={classes.wrapper}>
                                <img src={product.image} className={classes.image} />
                            </Box>
                        </a>)
                    })
                }
            </Carousel>
        }
    }
    return (
        <><div class="main_div">
            <div class="top_div">
                <div>
                    <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo1.png" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                </div>
                <Navbar />
            </div>
            <div className="gallery_div_placement"  style={{marginBottom:"50px"}}>
                
            </div>
            <div className="gallery_placement">
            {/* <div className="family1"> */}
                {/* <div className="flash_1" style={{ backgroundcolor: "#FAFCEE" }}>
                    <div id="flash_inside">
                        <h1 style={{ color: "#000" }} class="underline">FLASHBACK FRIDAY</h1>
                    </div>
                </div> */}

               
                <div id="gallerydiv">
                <h1 id="heading" style={{}}>PLACEMENT DIARIES</h1>
                    <div id="paragraph" style={{ textAlign: "justify" }}>
                        <p>Memories are meant to be remembered, because even the bad memories are usually part of something we once thought was good.Memory is more indelible than ink. Life must be lived forwards, but it can only be understood backwards, through the experience of oneself and others. There is no definitive roadmap to follow for success, while the road is a huge game of Tetris. The inputs that we manage to get, must be arranged in a suitable way to make them advantageous to us. But it is the inputs that are sometimes very difficult to get owing to certain reasons.

                            To help everyone in this regard, NITR-ICS is going to collect such experiences and words of wisdom from successful ceramists, material scientists and industrialists who have excelled in their fields. It will be a conglomeration of important events in their journey from college to where they are now. All the information will be shared fortnightly through the label “Flashback Friday”. Stay tuned for further information.
                        </p>
                    </div>
                </div>
                {functiondeal()}
            </div>

            <div class="social_media_part">
                <footer>
                    <div class="top_header">
                        <section>
                            <span><i class="fa fa-map-marker"></i></span>
                            <span>NATIONAL INSTITUTE OF TECHNOLOGY ROURKELA, Odisha, India, 769008</span>
                        </section>
                        <section>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Siddharth Nanda +91 8093308828</span>
                            <span><i class="fa fa-phone"></i></span>
                            <span>Sakti Swaroop +91 9337318011</span>
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
        </div></>)
}

export default Events
