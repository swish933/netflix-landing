import React from 'react';
import { Navbar, Nav} from "react-bootstrap";

const mystyle = { backgroundColor: "#fff",  width: "100%"};
 
const cstyle = {  color: "#e50914"};

const Header = () => (
  <div>
    <div className="w-100 fixed  z-1 HelveticaNeue">
      <Navbar style={mystyle} expand="lg">
        <Navbar.Brand
          className="helvetica pl6-l f2-l f4-m f4-ns flex-inline fw7"
          style={cstyle}
          href="#home">    NETFLIX
        </Navbar.Brand>
        <Nav className="mr-auto fr "></Nav>
        <Nav pullRight className="mr5-l mr2-l tr-ns  flex">
          <ul>
            <li
              className="f6-l f7 link ph3  b pv2 mb2 fw7 helvetica pointer dib white ma2-l"
              href="#"
              style={cstyle}
            >
              
              Sign In
            </li>
            <li
              className="f6-l f7 link ph3 pv2  br2 helvetica pointer fw7 dib white tc ma2-l"
              style={{ backgroundColor: "#e50914" }}
              href="#"
            >
              {" "}
              Sign Up
            </li>
          </ul>
        </Nav>
      </Navbar>
    </div>
  </div>
);
    







export default Header;