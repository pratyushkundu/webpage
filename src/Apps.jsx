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

                        <h2 id="proff1" style={{ color: "#fff" }}>Proff.Shantanu T behera</h2>
                        <p id="para" style={{ color: "#fff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                            quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                            reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                        </p>
                    </div>
                </a>
                <a href="/blog1" style={{ textDecoration: "none" }}>
                    <div className="img_1">
                        <img id="peacock" src="images/FF2.png" alt="mypic" />

                        <h2 id="proff1" style={{ color: "#fff" }}>Proff.Ranjan Das</h2>
                        <p id="para" style={{ color: "#fff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
                            quos labore autem dolores, pariatur laborum voluptates quaerat? Voluptas quidem, provident doloribus
                            reiciendis nesciunt voluptates doloremque voluptatibus voluptatum. Ipsam, aspernatur ad.
                        </p>
                    </div>
                </a>
                <a href="/blog2" style={{ textDecoration: "none" }}>
                    <div className="img_1">
                        <img id="peacock" src="images/FF3.png" alt="mypic" />

                        <h2 id="proff1" style={{ color: "#fff" }}>Proff.Beda Mohanty</h2>
                        <p id="para" style={{ color: "#fff" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil cupiditate quae culpa,
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
    // const functiondeal3 = () => {
    //     const width2 = 700;
    //     if (window.screen.width >= width2) {
    //         return <>
    //             <div className="logo_part">
    //                 <div className="img_3">
    //                     <a href=""><img src="images/facebook.png" style={{ height: "60px" }} alt="mypic" /></a>
    //                 </div>
    //                 <div className="img_3">
    //                     <a href="https://instagram.com/nitr_ics?utm_medium=copy_link"><img src="images/instagram.png" style={{ height: "60px" }} alt="mypic" /></a>
    //                 </div>
    //                 <div className="img_3">
    //                     <a href="https://www.linkedin.com/company/incers-nitr"><img src="images/linkedin.png" style={{ height: "60px" }} alt="mypic" /></a>
    //                 </div>
    //             </div>
    //         </>
    //     }
    //     else {
    //         <div className="logo_part">
    //             <div className="img_3">
    //                 <a href=""><img src="images/facebook.png" style={{ height: "60px" }} alt="mypic" /></a>
    //             </div>
    //             <div className="img_3">
    //                 <a href="https://instagram.com/nitr_ics?utm_medium=copy_link"><img src="images/instagram.png" style={{ height: "60px" }} alt="mypic" /></a>
    //             </div>
    //             <div className="img_3">
    //                 <a href="https://www.linkedin.com/company/incers-nitr"><img src="images/linkedin.png" style={{ height: "60px" }} alt="mypic" /></a>
    //             </div>
    //         </div>

    //     }
    // }

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
                    <div id="logo" style={{ cursor: "pointer" }}>NITR ICS</div>
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
                        <h1 style={{ color: "#fff" }}>FLASHBACK FRIDAY</h1>
                        <div className="underline"></div>
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
                        <h1 style={{ color: "#fff" }}>MORE ON THIS.....</h1>
                        <div className="underline"></div>
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
                        <h1 style={{ color: "#fff" }}>MONDAY MATTER</h1>
                        <div className="underline"></div>
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
                        <h1 style={{ color: "#fff" }}>MORE ON THIS....</h1>
                        <div className="underline"></div>
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
                <div className="logo_part">
                    <div className="img_3">
                        <a href=""><img src="images/facebook.png" id="logoimg" alt="mypic"/></a>
                    </div>
                    <div className="img_3">
                        <a href="https://instagram.com/nitr_ics?utm_medium=copy_link"><img src="images/instagram.png" id="logoimg"  alt="mypic" /></a>
                    </div>
                    <div className="img_3">
                        <a href="https://www.linkedin.com/company/incers-nitr"><img src="images/linkedin.png" id="logoimg"  alt="mypic" /></a>
                    </div>
                </div>
                <div className="end_bar">
                    <Navbar1 />
                </div>
            </div>
        </div></>);
}

export default Apps;