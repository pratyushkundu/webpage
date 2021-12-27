import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import Navbar1 from './Navbar1';
import App1 from './App1';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { SliderData } from './component/SliderData';
import { Box, makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
    // mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 1
    // }
};
const width1 = window.screen.width;
console.log(width1);

const Apps = () => {
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
                    {/* <p id="para1" style={{ color: "#fff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                    quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                    reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                </p> */}
                </div>
            </a>
                <a href="/blog1" style={{ textDecoration: "none" }}>
                    <div className="img_2">
                        <img id="peacock_1" src="images/MM2.jpg" alt="mypic" />
                        {/* <p id="para1" style={{ color: "#fff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                    quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                    reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                </p> */}
                    </div>
                </a>
                <a href="/blog1" style={{ textDecoration: "none" }}>
                    <div className="img_2">
                        <img id="peacock_1" src="images/MM3.jpg" alt="mypic" />
                        {/* <p id="para1" style={{ color: "#fff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                    quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                    reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                </p> */}
                    </div>
                </a></>
        }
    }
    const functiondeal3 = () => {
        const width2 = 700;
        if (window.screen.width >= width2) {
            return <>
                <div className="logo_part">
                    <h2>NITR ICS </h2>
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
                        return (<Link to={product.reciever}>
                            <Box textAlign="center" className={classes.wrapper}>
                                <img src={product.image} className={classes.image} />
                            </Box>
                        </Link>)
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
            <div className="gallery_div" >
                <div>
                    <h1 className="headingname">WELCOME TO NITR ICS</h1>
                </div>

                {/* <div className="img_4"> */}
                {/* <img id="onion" src="images/img4.jpg" alt="mypic" style={{margin:"0 3px"}}  /> */}
                {/* </div> */}
            </div>
            <div className="family1">
                <div className="flash_1" style={{ backgroundcolor: "#FAFCEE" }}>
                    <div id="flash_inside">
                        <h1 style={{ color: "#000" }} class="underline">FLASHBACK FRIDAY</h1>
                        {/* <div className="underline"></div> */}
                    </div>
                </div>

                <div className="image_div_1">
                    {functiondeal1()}
                    {/* <a href="/blog" style={{ textDecoration: "none" }}>
                        <div className="img_1">
                            <img id="peacock" src="images/FF1.jpg" alt="mypic" />
                            {functiondeal1()}
                            <h2 id="proff1" style={{ color: "#fff" }}>Proff.Shnatanu T behera</h2>
                            <p id="para" style={{ color: "#fff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                                quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                                reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                            </p>
                        </div>
                    </a>
                    <a href="/blog1" style={{ textDecoration: "none" }}>
                        <div className="img_1">
                            <img id="peacock" src="images/FF2.png" alt="mypic" />
                            {functiondeal1()}
                            <h2 id="proff1" style={{ color: "#fff" }}>Proff.Shnatanu T behera</h2>
                            <p id="para" style={{ color: "#fff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                                quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                                reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                            </p>
                        </div>
                    </a>
                    <a href="/blog2" style={{ textDecoration: "none" }}>
                        <div className="img_1">
                            <img id="peacock" src="images/FF3.png" alt="mypic" />
                            {functiondeal1()}
                            <h2 id="proff1" style={{ color: "#fff" }}>Proff.Shnatanu T behera</h2>
                            <p id="para" style={{ color: "#fff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                                quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                                reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                            </p>
                        </div>
                    </a> */}
                </div>
                {/* </div> */}
                {/* <div className="family1"> */}
                <div className="flash_1" style={{ backgroundcolor: "#FAFCEE" }}>
                    <div id="flash_inside">
                        <h1 style={{ color: "#000" }} class="underline">MORE ON THIS.....</h1>
                        {/* <div className="underline"></div> */}
                    </div>
                </div>
                {functiondeal()}
                {/* <App1 /> */}
                {/* <Carousel
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
                  SliderData.map(product=>{
                      return(<Link to={product.reciever}>
                        <Box textAlign="center" className={classes.wrapper}>
                          <img src={product.image} className={classes.image} />
                          </Box>
                      </Link>)
                  })
                }
                    
                </Carousel> */}

                {/* </div> */}
                {/* <div className="family"> */}
                <div className="flash_2" style={{ backgroundcolor: "#FAFCEE" }}>
                    <div id="flash_inside" style={{ marginBottom: "40px" }}>
                        <h1 style={{ color: "#000" }} class="underline">MONDAY MATTER</h1>
                        {/* <div className="underline"></div> */}
                    </div>
                </div>

                <div className="image_div_2">
                    {functiondeal2()}
                    {/* <a href="/blog1" style={{ textDecoration: "none" }}>
                        <div className="img_2">
                            <img id="peacock_1" src="images/MM1.jpg " alt="mypic" />
                            <p id="para1" style={{ color: "#fff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                                quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                                reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                            </p>
                        </div>
                    </a>
                    <a href="/blog1" style={{ textDecoration: "none" }}>
                        <div className="img_2">
                            <img id="peacock_1" src="images/MM2.jpg" alt="mypic" />
                            <p id="para1" style={{ color: "#fff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                                quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                                reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                            </p>
                        </div>
                    </a>
                    <a href="/blog1" style={{ textDecoration: "none" }}>
                        <div className="img_2">
                            <img id="peacock_1" src="images/MM3.jpg" alt="mypic" />
                            <p id="para1" style={{ color: "#fff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                                quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                                reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                            </p>
                        </div>
                    </a> */}
                </div>
                {/* </div> */}
                {/* <div className="family"> */}
                <div className="flash_2" style={{ backgroundcolor: "#FAFCEE" }}>
                    <div id="flash_inside1">
                        <h1 style={{ color: "#000" }} class="underline">MORE ON THIS....</h1>
                        {/* <div className="underline"></div> */}
                    </div>
                </div>
                {functiondeal()}
                {/* <App1 /> */}
                {/* <Carousel
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
                  SliderData.map(product=>{
                      return(<Link to={product.reciever}>
                        <Box textAlign="center" className={classes.wrapper}>
                          <img src={product.image} className={classes.image} />
                          </Box>
                      </Link>)
                  })
                }
                    
                </Carousel> */}
            </div>

            <div className="social_media_part">
                {/* {functiondeal3()} */}
                {/* <div className="logo_part">
                    <h2>NITR ICS </h2>
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
                    <h3 style={{ display: "flex", flexDirection: "column",color:"orange", marginTop: "40px",marginRight: "-500px" }}><span><i class="fa fa-phone"  style={{marginRight:"10px",marginLeft:"10px"}}></i>Siddharth Nanda Sir:92732709727</span><span><i class="fa fa-phone" style={{marginRight:"10px",marginLeft:"10px"}}></i>Sakti Swaroop Sir:792347979</span></h3>
                </div> */}
                {/* <div className="end_bar">
                    <Navbar1 />
                </div> */}
                {/* <div className="end_bars">
                    <div className="end_bars_inside">
                        <h2>NITR ICS </h2>
                        <h3 style={{ display: "flex", flexDirection: "column" }}><span>Address:NIT ROURKELA </span><span>Pin-Code:769001</span></h3>
                    </div>
                    <div className="end_bars_inside_1">
                        <h3 style={{ display: "flex", flexDirection: "column" }}><span>xyzzzzz:92732709727</span><span>chjsgddjsg:792347979</span></h3>
                    </div>
                </div> */}


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
                            <a href="https://instagram.com/nitr_ics?utm_medium=copy_link"><i class="fa fa-instagram" style={{ fontSize: "2rem" }}></i></a>
                            <a href="https://www.linkedin.com/company/incers-nitr"><i class="fa fa-linkedin" style={{ fontSize: "2rem" }}></i></a>
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
        </div></>);
}

export default Apps;