import React, { useEffect, useRef, useState } from 'react';
import './Navbar.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  const [navbarColor, setNavbarColor] = useState('transparent');
  const [navbarClass, setNavbarClass] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentUser = false;


  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

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
    const handleClickOutside = (event) => {
      // event.preventDefault();
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (event.target.tagName.toLowerCase() === 'a') {
          return; // Clicked on <a> tag, skip handling
        }
        setDropdownOpen(false);
      }
    };

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
            <NavLink to="/the-hub" activeClassName="active" >
              The-Hub
            </NavLink>
          </li>
          <li>
            <NavLink to="/404" activeClassName="active" >
              Developers
            </NavLink>
          </li>
          <li ref={dropdownRef}>
            <p onClick={toggleDropdown} className={` ${isDropdownOpen ? 'active' : ''} `}>Company</p>
            {isDropdownOpen ? (
              <ul className={`dropdown-content`} style={{ backgroundColor: navbarColor }}>
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
      {/* <div className="right">
        {
          currentUser ? (
            <p>Search</p>
          ) : (
            <div>
              <Link to='/' >Sign In</Link>
              <Link to='/sign-up' >Sign Up</Link>
            </div>
          )
        }
      </div> */}
      {/* mobile */}
      <div className="mobileV">
        <div className={`mobile-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {
          isMenuOpen ? (
            <div>
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
                  <NavLink to="/the-hub" activeClassName="active" onClick={toggleMenu}>
                    The-Hub
                  </NavLink>
                </li>
                <li onClick={toggleMenu} >Developers</li>
                <li ref={dropdownRef}>
                  <a href='#' >Company</a>
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
              <ul className='forms'>
                <li>
                  <Link to='/sign-up' >Sign Up</Link>
                </li>
                <li>
                  <Link to='/sign-in' >Sign In</Link>
                </li>
              </ul>

            </div>
          ) : (
            ''
          )
        }
      </div>
    </nav>
  )
}

export default Navbar


@import "../../style.scss";

.onScrollActive {
    color: black !important;
    border-bottom: 1px solid #c2c2c2;

    .center {

        ul {
            li {
                .active {
                    &:after {
                        position: absolute;
                        content: "";
                        width: 100%;
                        height: 2px;
                        bottom: -5px;
                        left: 0;
                        background-color: black !important;
                    }
                }

                &:after {
                    background-color: black !important;
                }

                .dropdown-content {
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                }

                a {
                    color: black !important;


                }

            }

        }

    }

    .right {

        p {
            border: 2px solid rgb(124, 124, 124) !important;
        }

        div {

            a {
                color: black !important;
                border: 2px solid black !important;

                &:hover {
                    color: #F58125 !important;
                    border: 2px solid #F58125 !important;
                }

            }
        }
    }

    .mobileV {
        .mobile-toggle {
            cursor: pointer;

            span {
                background-color: #000 !important;
            }
        }
            ul {
                background-color: rgba(0, 0, 0, .8) !important;

                li {
                    background-color: rgba(255, 255, 255, .9) !important;
                    color: black !important;

                    a {
                        color: black !important;
                    }
                }
            }

    }
}


.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
    background-size: cover;
    color: white;
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 2000;
    transition: all .4s ease-in-out;


    .left {


        h1 {
            font-family: 'Montserrat', sans-serif;
            cursor: pointer;
            // color: #17234D;

            span {
                color: rgb(245, 129, 37);
            }
        }
    }

    .center {
        @include mobile {
            display: none;
        }

        ul {
            text-decoration: none;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 25px;

            li {
                font-family: 'Montserrat', sans-serif;
                font-weight: 500;
                cursor: pointer;
                position: relative;

                .active {
                    &:after {
                        position: absolute;
                        content: "";
                        width: 100%;
                        height: 2px;
                        bottom: -5px;
                        left: 0;
                        background-color: #fff;
                    }
                }

                a {
                    text-decoration: none;
                    color: #fff;
                }

                &:after {
                    position: absolute;
                    content: "";
                    width: 0%;
                    transition: 0.4s;
                    height: 2px;
                    bottom: -5px;
                    left: 50%;
                    background-color: #fff;
                }

                .dropdown-content {
                    display: flex;
                    padding: 30px;
                    flex-direction: column;
                    position: absolute;
                    top: 60px;
                    gap: 20px;
                    min-width: auto;
                    // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    z-index: 1;

                    li {

                        &:hover {
                            display: block;

                        }

                        a {
                            text-decoration: none;
                            color: white;
                            text-decoration: none;
                        }
                    }
                }

                &:hover::after {
                    width: 100%;
                    left: 0;
                }
            }

        }
    }

    .right {
        @include tablet {
            display: none;
        }

        @include mobile {
            display: none;
        }

        p {
            font-family: 'Montserrat', sans-serif;
            padding: 5px 15px;
            border: 2px solid white;
            cursor: pointer;
        }

        div {
            display: flex;
            gap: 30px;

            a {
                padding: 6px 18px;
                color: white;
                border: 2px solid white;
                cursor: pointer;
                transition: all .4s ease-in-out;

                &:hover {
                    background-color: white;
                    color: #F58125;
                }
            }
        }
    }

    .mobileV {
        position: absolute;

        @include mobile {
            position: static;
        }



        .forms{
            position: absolute;
            top: 70vh;
            // top: 0;
            height: auto !important;
        }

        ul {
            background-color: transparent;
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            margin: auto;
            height: 700px;
            width: 100vw;
            padding: 40px;
            list-style: none;

            @include mobile {
                height: 100vh;
            }

            li {
                display: flex;
                font-family: 'Montserrat', sans-serif;
                flex-direction: column;
                gap: 10px;
                padding: 20px 10px;
                background-color: rgba(0, 0, 0, 0.5);
                color: white;

                @include mobile {
                    max-height: 60px;
                }

                a {
                    font-family: 'Montserrat', sans-serif;
                    color: white;
                    text-decoration: none;
                }

                .dropdown-content {
                    height: 0;
                    padding: 0;
                    border: none;
                    position: static;
                    display: block;
                    padding: 10px;

                    @include mobile {
                        width: 90%;
                        margin-top: 10px;
                        background-color: transparent !important;
                    }

                    li {
                        border: none;
                    }

                }
            }
        }

        .mobile-toggle {
            display: none; // Hide the toggle button by default on larger screens

            // Mobile toggle button styles...
            span {
                display: block;
                width: 25px;
                height: 3px;
                background-color: #fff;
                margin-bottom: 5px;
                transition: transform 0.3s ease-in-out;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            &.open {

                // Styles for open/toggled state of the button
                span {
                    &:first-child {
                        transform: translateY(8px) rotate(45deg);
                    }

                    &:nth-child(2) {
                        opacity: 0;
                    }

                    &:last-child {
                        transform: translateY(-8px) rotate(-45deg);
                    }
                }
            }
        }

        @media (max-width: 768px) {
            .mobile-toggle {
                display: block; // Show the toggle button on smaller screens
            }
        }
    }

}