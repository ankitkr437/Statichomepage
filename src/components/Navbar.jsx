import React from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Routes , Route , NavLink} from "react-router-dom";
import './Navbar.css';
import {FaEllipsisV , FaBars,FaTimes} from "react-icons/fa"

const Home = () => {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  };
  
  const About = () => {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  };
  const Blog = () => {
    return (
      <div>
        <h1>Blog</h1>
      </div>
    );
  };
  const Contact = () => {
    return (
      <div>
        <h1>Contact Us</h1>
      </div>
    );
  };
  

function NavBar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
    return (
      <div>
       <div className={click ? "main-container2" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              NIT
              <span style={{color:"#3695e1"}}> Jamshedpur</span>
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                 Information Flyer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About NIT JSR
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
            {
                click ? <FaTimes /> : <FaEllipsisV />
            }
            </div>
          </div>
        </nav>
      </div>
    );
}
function TopBar() {

   
    return (
        <>
         
           <Router>
            <NavBar />
    
            <div className="pages">
              <Routes>
                <Route exact path="/" element={Home} />
                <Route path="/about" element={About} />
                <Route path="/blog" element={Blog} />
                <Route path="/contact" element={Contact} />
              </Routes>
            </div>
          </Router>
        </>
      );
}

export default TopBar