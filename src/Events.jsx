import React from 'react';
import Navbar from './Navbar';


const Mritika = () => {
    
    return (<>
                
                <div className='main_div'>
                {/* <div class="top_div">
                    <div>
                        <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo1.jpg" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                    </div>
                    <Navbar />
                </div> */}

                    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
                        <div class="container">
                            <a class="navbar-brand" href="/">
                        <h3 class="my-heading ">NITR<span class="bg-main">ICS</span></h3>
                    </a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="fa fa-bars mfa-white"></span>
                    </button>
                    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen"/>
                <script src="//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>

                            {/* <div id="main">
                                <a href="javascript:void(0)" class="openNav"><span class="fa fa-bars" onclick="openNav()"></span></a>
                            </div> */}



                            {/* <div id="mySidenav" class="sidenav">
                        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
                        <ul class="mob-ul">
                            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">About</a></li>

                            <li class="nav-item"><a class="nav-link" href="#">Events</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Groups</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Music</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Marketplace</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Featured Artists</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Login</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Register</a></li>


                        </ul>
                    </div> */}


                            {/* <div class="collapse navbar-collapse" id="navbarResponsive">
                        <form class="form-inline my-2 my-lg-0 col-md-7">
                            <input class="myform-control mr-sm-2" type="search" placeholder="find peoples, instruments, bands and more..." aria-label="Search" />
                            <button class="btn btn-light"><i class="fa fa-search"></i></button>
                        </form>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-link">
                                <a class="btn btn-primary btn-block btn-login" href="#">Login</a>
                            </li>
                            <li class="nav-link">
                                <a class="btn btn-primary btn-block btn-register" href="#">Register</a>
                            </li>

                        </ul>
                    </div> */}

                        </div>
                    </nav>


                    <header class="masthead text-white ">
                        <div class="overlay"></div>
                        <div class="container slider-top-text">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <h3 class="my-heading">WELCOME TO MRIT<span class="bg-main">IKA</span></h3>
                                    <p class="myp-slider text-center">Where ceramists unite and become better together</p>
                                    <p class="myp text-center">SHARE YOUR MEMORIES   |   CONNECT WITH OTHERS   |   MAKE NEW FRIENDS</p>
                                    <a class="btn btn-primary btn-join" href="#">JOIN THE COMMUNITY</a>

                                </div>
                                <div class="col-md-12 text-center mt-5">
                                    <div class="scroll-down">
                                        <a class="btn btn-default btn-scroll floating-arrow" href="#gobottom" id="bottom"><i class="fa fa-angle-down"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section class="testimonials" id="gobottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4 mb-3 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="big-img">
                                        <img src="https://images.pexels.com/photos/167631/pexels-photo-167631.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid" />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="inner-section wow fadeInUp">
                                        <h3>Follow the <span class="bg-main">Next Event</span></h3>
                                        <br />
                                        <p class="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>

                                        <div class="linear-grid">
                                            <div class="row">
                                                <div class="col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s" >
                                                    <img src="https://images.pexels.com/photos/534031/pexels-photo-534031.jpeg?auto=compress&cs=tinysrgb&h=350" class="img-thumbnail" />
                                                </div>
                                                <div class=" col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s">
                                                    <img src="https://images.pexels.com/photos/258804/pexels-photo-258804.jpeg?auto=compress&cs=tinysrgb&h=350" class="img-thumbnail" />
                                                </div>
                                                <div class="col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s">
                                                    <img src="https://images.pexels.com/photos/285598/pexels-photo-285598.jpeg?auto=compress&cs=tinysrgb&h=350" class="img-thumbnail" />
                                                </div>
                                                <div class="col-sm-6 col-md-3 mb-2 wow bounceInUp" data-wow-duration="1.4s">
                                                    <img src="https://images.pexels.com/photos/167605/pexels-photo-167605.jpeg?auto=compress&cs=tinysrgb&h=350" class="img-thumbnail" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="testimonials mybg-events">

                        <div class="container">

                            <div class="row">
                                <div class="col-md-12 wow fadeInUp">
                                    <h3 class="title-heading text-center">MRITIKA EVENTS</h3>
                                    <p class="myp text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div class="row wow slideInLeft" data-wow-duration="3s">
                                <div class="col-md-4 mb-3">
                                    <div class="big-img2">
                                        <img src="https://images.pexels.com/photos/167527/pexels-photo-167527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid" />
                                    </div>

                                </div>
                                <div class="col-md-8">
                                    <div class="inner-section">
                                        <div class="my-grid">
                                            <div class="row">
                                                <div class="col-sm-6 col-md-4 mb-3">

                                                    <img src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid" />

                                                </div>
                                                <div class="col-sm-6 col-md-8 mb-3 ">

                                                    <img src=" https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid" />

                                                </div>

                                                <div class="col-md-8 mb-3">
                                                    <div class="text-block">
                                                        <h5 class="events-heading">Lorem ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                        <p class="myp-font">contrary to popular belief, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book and more recently with desktop publishing software like Aldus PageMaker.</p>
                                                    </div>
                                                </div>
                                                <div class=" col-md-4 ">

                                                    <img src="https://images.pexels.com/photos/1150837/pexels-photo-1150837.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="testimonials text-center">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 mx-auto wow fadeInUp">
                                    <h3 class="text-center font-weight-bold">MRIT<span class="bg-main">IKA</span> CONNECT</h3>
                                    <p class=" text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="card">
                                        <img class="card-img-top" src="images/SN.jpg" />
                                        <div class="card-block">

                                            <h4 class="card-title text-center">SIDDHARTH NANDA</h4>

                                            <div class="card-text text-center">
                                                <div class="social-icons">
                                                    <a href="#" class="btn btn-circle my-social-btn fb"><i class="fa fa-facebook"></i></a>
                                                    <a href="#" class="btn btn-circle my-social-btn twitter"><i class="fa fa-twitter"></i></a>
                                                    <a href="#" class="btn btn-circle my-social-btn google"><i class="fa fa-google"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer text-center">
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="card">
                                        <img class="card-img-top" src="images/SS.jpg" />
                                        <div class="card-block">

                                            <h4 class="card-title text-center">SAKTI SWAROOP</h4>

                                            <div class="card-text text-center">
                                                <div class="social-icons">
                                                    <a href="#" class="btn btn-circle my-social-btn fb"><i class="fa fa-facebook"></i></a>
                                                    <a href="#" class="btn btn-circle my-social-btn twitter"><i class="fa fa-twitter"></i></a>
                                                    <a href="#" class="btn btn-circle my-social-btn google"><i class="fa fa-google"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer text-center">
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="card">
                                        <img class="card-img-top" src="images/SG.jpeg" />
                                        <div class="card-block">

                                            <h4 class="card-title text-center">SOMDEB GANGULY</h4>

                                            <div class="card-text text-center">
                                                <div class="social-icons">
                                                    <a href="#" class="btn btn-circle my-social-btn fb"><i class="fa fa-facebook"></i></a>
                                                    <a href="#" class="btn btn-circle my-social-btn twitter"><i class="fa fa-twitter"></i></a>
                                                    <a href="#" class="btn btn-circle my-social-btn google"><i class="fa fa-google"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer text-center">
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-3 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="card">
                                        <img class="card-img-top" src="images/SS.jpg" />
                                        <div class="card-block">

                                            <h4 class="card-title text-center">SAKTI SWAROOP</h4>

                                            <div class="card-text text-center">
                                                <div class="social-icons">
                                                    <a href="#" class="btn btn-circle my-social-btn fb"><i class="fa fa-facebook"></i></a>
                                                    <a href="#" class="btn btn-circle my-social-btn twitter"><i class="fa fa-twitter"></i></a>
                                                    <a href="#" class="btn btn-circle my-social-btn google"><i class="fa fa-google"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer text-center">
                                            <small>Lorem Ipsum is simply dummy text of the printing and typesetting</small>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="testimonials text-center mybg-music">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 wow fadeInUp">
                                    <h3 class="title-heading text-center font-weight-bold">MRITIKA LATEST MUSIC</h3>
                                    <p class="myp text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/876713/pexels-photo-876713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/876713/pexels-photo-876713.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/258732/pexels-photo-258732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/258732/pexels-photo-258732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/756242/pexels-photo-756242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/756242/pexels-photo-756242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/167589/pexels-photo-167589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/167589/pexels-photo-167589.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/167626/pexels-photo-167626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/167626/pexels-photo-167626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-2 mt-4 gal-item wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="music-gal item box">
                                        <a href="https://images.pexels.com/photos/167527/pexels-photo-167527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="fancybox" rel="ligthbox">
                                            <img class="img-fluid" src="https://images.pexels.com/photos/167527/pexels-photo-167527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section class="testimonials bg-light" id="marketplace">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 mx-auto wow fadeInUp">
                                    <h3 class="text-center font-weight-bold">MRIT<span class="bg-main">IKA</span> SPONCERS</h3>
                                    <p class=" text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-md-4 col-lg-4 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="card">
                                        <img class="card-img-top h-262" src="https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        <div class="card-block">

                                            <h4 class="card-title">Lorem Ipsum Dolor Site Amet</h4>

                                            <div class="card-text">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <small>$ 170</small>
                                            <a href="#" class="pull-right">More Info</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-4 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="card">
                                        <img class="card-img-top h-262" src="https://images.pexels.com/photos/56005/fiji-beach-sand-palm-trees-56005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                        <div class="card-block">

                                            <h4 class="card-title">Lorem Ipsum Dolor Site Amet</h4>

                                            <div class="card-text">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <small>$ 170</small>
                                            <a href="#" class="pull-right">More Info</a>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-4 col-lg-4 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="card">
                                        <img class="card-img-top h-262" src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                                        <div class="card-block">

                                            <h4 class="card-title ">Lorem Ipsum Dolor Site Amet</h4>

                                            <div class="card-text ">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <small>$ 170</small>
                                            <a href="#" class="pull-right">More Info</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="testimonials text-center ">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 mx-auto wow fadeInUp">
                                    <h3 class="text-center font-weight-bold">MRIT<span class="bg-main">IKA</span> FEATURED EVENT</h3>
                                    <p class=" text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-md-4 col-lg-6 mt-4 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="big-img-3">
                                        <img src="https://images.pexels.com/photos/167480/pexels-photo-167480.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" class="img-fluid" />
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-6 mt-4">
                                    <div class="my-right-text wow fadeInUp">

                                        <p class="text-justify font-italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets. remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>

                                        <a href="#" class="link-color">SAKTI</a>
                                        <p class="text-muted">Lorem Ipsum Dolor Sit Amet</p>
                                    </div>
                                </div>

                            </div>
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
                    

                </div></>);
}

            export default Mritika
