import image from '../../Assets/plRight copy.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={image} alt="" />
      <div className="fMain">
        <div className="fLogo">
          {/* <h1>TECV<span>I</span>Z<span>.</span></h1> */}
        </div>
        <div className="mainCenter">
          <div className="mainContent">
            <h3>Products</h3>
            <ul>
              <li>Web Development</li>
              <li>Artificial Intelligence (Ai)</li>
              <li>Graphics Design</li>
              <li>Studio Management</li>
              <li>Videography</li>
              <li>Architecture</li>
            </ul>
          </div>

          <div className="mainContent">
            <h3>Company</h3>
            <ul>
              <li>Home</li>
              <li>Events</li>
              <li>Features</li>
              <li>Contact us</li>
              <li>Developers</li>
              <li>Teams</li>
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
              <li><i class="fa-brands fa-facebook"></i> Facebook</li>
              <li><a href="https://instagram.com/tecviz_?igshid=NTc4MTIwNjQ2YQ=="><i class="fa-brands fa-instagram"></i> Instagram</a></li>
              <li><i class="fa-brands fa-twitter"></i> Twitter</li>
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