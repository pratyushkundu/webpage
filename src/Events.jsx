import React from 'react';
import Navbar from './Navbar';


const Events = () => {
    return (<>
        <div className='main_div'>
            <div class="top_div">
                <div>
                    <div id="logo" style={{ cursor: "pointer" }}><img src="images/logo1.jpg" style={{ height: "48px", width: "55px", background: "100% 100%", borderRadius: "0px", padding: "2px" }} /></div>
                </div>
                <Navbar />
            </div>
        </div></>);
}

export default Events
