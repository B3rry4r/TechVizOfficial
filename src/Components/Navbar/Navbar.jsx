import React, { useEffect, useRef, useState } from 'react';
import './Navbar.scss';
import { NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  const [navbarColor, setNavbarColor] = useState('transparent');
  const [navbarClass, setNavbarClass] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    event.preventDefault();
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.querySelector('.products')?.classList.add('blurOnNav');
    } else {
      document.querySelector('.products')?.classList.remove('blurOnNav');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY > 0) {
        setNavbarClass('onScrollActive'); //Set class
        setNavbarColor('#fff'); // Change to desired color when scrolled
      } else {
        setNavbarColor('transparent'); // Change to initial color when at the top
        setNavbarClass('');//Set class back to initial empty string
      }
    };

    window.addEventListener('scroll', changeNavbarColor);

    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

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
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar ${navbarClass}`} id='nav' style={{ backgroundColor: navbarColor }}>
      <div className="left">
        <h1>TECV<span>I</span>Z<span>.</span> </h1>
      </div>
      <div className={`center ${isMenuOpen ? 'display' : ''}`}>
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
            <NavLink to="/research" activeClassName="active" >
              Research
            </NavLink>
          </li>
          <li>Developers</li>
          <li ref={dropdownRef}>
            <a href='#'>Company</a>
            {isDropdownOpen ? (
              <ul className={`dropdown-content `} style={{ backgroundColor: navbarColor }}>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Developers</a></li>
              </ul>
            ) : (
              ''
            )
            }
          </li>
        </ul>
      </div>
      <div className="right">
        <p>Search</p>
      </div>
      <div className="mobileV">
        <div className={`mobile-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {
          isMenuOpen ? (
            <ul>
          <li>
            <NavLink exact to="/" activeClassName="active" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active" onClick={toggleMenu}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/research" activeClassName="active" onClick={toggleMenu}>
              Research
            </NavLink>
          </li>
          <li onClick={toggleMenu} >Developers</li>
          <li ref={dropdownRef}>
            <a href='#' onClick={toggleDropdown}>Company</a>
            {isDropdownOpen ? (
              <ul className={`dropdown-content `} style={{ backgroundColor: navbarColor }}>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Developers</a></li>
              </ul>
            ) : (
              ''
            )
            }
          </li>

        </ul>
          ) : (
            ''
          )
        }         
      </div>
    </nav>
  )
}

export default Navbar



