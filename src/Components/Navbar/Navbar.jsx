import React, { useEffect, useRef, useState } from 'react';
import './Navbar.scss';


const Navbar = () => {

  const [navbarColor, setNavbarColor] = useState('transparent');
  const [navbarClass, setNavbarClass] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleClickOutside = (event) => {
    event.preventDefault();
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

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
      <div className="center">
        <ul>
          <li>Products</li>
          <li>Forum</li>
          <li>Research</li>
          <li>Developers</li>
          <li ref={dropdownRef}>
            <a href='#' onClick={toggleDropdown}>Company</a>
            {isDropdownOpen ? (
              <ul className={`dropdown-content `} style={{ backgroundColor: navbarColor }}>
                <li><a href="#">Forum</a></li>
                <li><a href="#">Research</a></li>
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
    </nav>
  )
}

export default Navbar



