import './Footer.scss';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <div className='footer'>
      <div className="fMain">
        <div className="mainCenter">
          <div className="mainContent">
            <h3>Products</h3>
            <ul>
              <li><Link to='/website-development' >Web Development</Link></li>
              <li><Link to='/artificial-intelligence' >Artificial Intelligence</Link></li>
              <li><Link to='/graphics-design' >Graphics Design</Link></li>
              <li><Link to='/studio-management' >Studio Management</Link></li>
              <li><Link to='/videography' >Videography</Link></li>
              <li><Link to='/architecture' >Architecture</Link></li>
            </ul>
          </div>

          <div className="mainContent">
            <h3>Company</h3>
            <ul>
              <li>Teams</li>
              <li>Events</li>
              <li>Features</li>
              <li>Developers</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className="mainContent">
            <h3>Developers</h3>
            <ul>
              <li>Api</li>
              <li>Events</li>
              <li>Features</li>
              <li>Teams</li>
            </ul>
          </div>

          <div className="mainContent">
            <h3>Social Media</h3>
            <ul>
              <li><a href="https://www.facebook.com/profile.php?id=100093466232533"><i class="fa-brands fa-facebook"></i> Facebook</a></li>
              <li><a href="https://instagram.com/tecviz_?igshid=NTc4MTIwNjQ2YQ=="><i class="fa-brands fa-instagram"></i> Instagram</a></li>
              <li><a href="https://twitter.com/tecviz_"><i class="fa-brands fa-twitter"></i> Twitter</a></li>
              <li><a href="https://github.com/TecvizHub"><i class="fa-brands fa-github"></i> Github</a></li>
              <li><a href="https://wa.me/message/VLWLZQCLQR5EF1"><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
              <li><a href="http://www.linkedin.com/in/"><i class="fa-brands fa-linkedin"></i> Linkedin</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fRightsBottom">
        <p>© 2023 copyright all rights reserved</p>
        <p>Privacy & Policy</p>
      </div>
    </div>
  )
}

export default Footer