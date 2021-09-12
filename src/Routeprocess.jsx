import React from 'react';
import { Switch,Route,Redirect } from 'react-router';
import Apps from './Apps';
import About from './About';
import Contact from './Contact';
import Members from './Members'
import Navbar from './Navbar';
// import Navbar from './Navbar';


const Routing = ()=>{
      return(<>
          {/* <Switch> */}
              <Route exact path="/" component={Apps}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/members" component={Members}/>
              <Route exact path="/contact" component={Contact}/>
          {/* </Switch> */}
      </>);
}

export default Routing;