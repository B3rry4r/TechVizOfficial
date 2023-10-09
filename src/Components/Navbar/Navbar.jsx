import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'; // Import React Spring
import './Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.querySelector('.products')?.classList.add('blurOnNav');
      document.querySelector('.home')?.classList.add('blurOnNav');
      document.querySelector('.theHub')?.classList.add('blurOnNav');
      document.querySelector('.es')?.classList.add('blurOnNav');
      document.querySelector('.wd')?.classList.add('blurOnNav');
    } else {
      document.querySelector('.products')?.classList.remove('blurOnNav');
      document.querySelector('.home')?.classList.remove('blurOnNav');
      document.querySelector('.theHub')?.classList.remove('blurOnNav');
      document.querySelector('.es')?.classList.remove('blurOnNav');
      document.querySelector('.wd')?.classList.remove('blurOnNav');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('disable-scroll');
    } else {
      document.body.classList.remove('disable-scroll');
    }

    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, [isMenuOpen]);




  useEffect(() => {
    const nav = document.querySelector('.scroll-navigation');
    const tecviz = document.querySelector('.tecviz')
    const showNav = () => {
      if (window.scrollY > 220) {
        nav.classList.add('scale');
        tecviz.classList.add('scale');
      } else {
        nav.classList.remove('scale');
        tecviz.classList.remove('scale');

      }
    };

    window.addEventListener('scroll', showNav);

    return () => {
      window.removeEventListener('scroll', showNav);
    };
  }, []);

  const openMenu = () => {
    setisMenuOpen(!isMenuOpen)
    const navFull = document.querySelector('.navbar-fullscreen');
    navFull.classList.toggle('animate');
  };

  const divStyle = {
    position: 'absolute',
    zIndex: 100,
    color: 'white',
    top: 0,
    width: '100%',
    padding: '60px',
    overflow: 'hidden'
  };

  return (
    <div className='navbar' style={divStyle} >
      {/* Navbar at the Top */}
      <div className="top">
        <div className="title">
          <h1>TECV<span>I</span>Z<span>.</span> </h1>
        </div>
        <div className="nav-contents">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active" >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active" >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/the-hub" activeClassName="active" >
                The-Hub
              </NavLink>
            </li>
            <li>
              <NavLink to="/404" activeClassName="active" >
                Developers
              </NavLink>
            </li>
            <li>
              <NavLink to="/404" activeClassName="active" >
                Company
              </NavLink>
            </li>
            <li>
              <NavLink to="/sign-up" activeClassName="active" >
                Sign-Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Navbar at it's fixed position */}
      <div className="sticky-navigation">
        <div
          className="tecviz">
          <h1>TECV<span>I</span>Z<span>.</span> </h1>
          <div className="cover"></div>
        </div>
        <div
          className="scroll-navigation"
          onClick={openMenu}          >
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      {/* Navbar on full screen */}
      <div className="navbar-fullscreen">
        <div className="container">
          <div className="left">
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active" onClick={openMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" activeClassName="active" onClick={openMenu}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/the-hub" activeClassName="active" onClick={openMenu}>
                  The-Hub
                </NavLink>
              </li>
              <li>
                <NavLink to="/404" activeClassName="active" onClick={openMenu}>
                  Developers
                </NavLink>
              </li>
              <li>
                <NavLink to="/404" activeClassName="active" onClick={openMenu}>
                  Company
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="buttons">
              <Link to="/sign-in" >Sign-In</Link>
              <Link to="/sign-up" className='white'>Sign-Up</Link>
            </div>
            <div className="social-media">
              <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100093466232533"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://instagram.com/tecviz_?igshid=NTc4MTIwNjQ2YQ=="><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://twitter.com/tecviz_"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://wa.me/message/VLWLZQCLQR5EF1"><i class="fa-brands fa-whatsapp"></i></a></li>
                <li><a href="http://www.linkedin.com/in/"><i class="fa-brands fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
