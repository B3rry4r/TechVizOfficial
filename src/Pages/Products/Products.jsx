import React from 'react';
import './Products.scss';
import techVizIllustration from '../../Assets/AppLogos/techVizIllustration.svg'
import Product from '../../Assets/Product.json';
import Lottie from 'lottie-react';
import appLogoBW from '../../Assets/AppLogos/Techviz.svg';
import CountdownTimerContainer from '../../Components/CountdownTimerContainer/CountdownTimerContainer';
import { Link } from 'react-router-dom';



const Products = () => {
  
  const webDev = 'https://tecvizhub.github.io/tecviz-images/Assets/product-1.jpg';
  const embeddedSystems = 'https://tecvizhub.github.io/tecviz-images/Assets/image(5).jpg';
  const videography = 'https://tecvizhub.github.io/tecviz-images/Assets/videography.jpg';
  const architecture = 'https://tecvizhub.github.io/tecviz-images/Assets/architecture.jpg';
  const contentCreation = 'https://tecvizhub.github.io/tecviz-images/Assets/social-media.jpg';
  const grapgicsDesign = 'https://tecvizhub.github.io/tecviz-images/Assets/grapgics-design.jpg';
  const socialMedia = 'https://tecvizhub.github.io/tecviz-images/Assets/content-creation.jpg'
  return (
    <div className='products'>
      <div className="productTopAnimation">
        <Lottie animationData={Product} loop={true} />
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <h1>Products <span>and</span> Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti hic iste fugiat voluptas laboriosam tempore quia maiores obcaecati molestias.</p>
        </div>
        <div className="productTopRight">
          <img src={techVizIllustration} alt="" />
        </div>
      </div>

      <div className="productMainContentsContainerSectionBreakOut">
        <div className="productMainContentsContainerStickyColumn">
          <div className="top">
            <img src={appLogoBW} alt="" />
            <div className="topContent">
              <h1>TECV<span>I</span>Z<span>.</span></h1>
              <p>Product Library</p>
            </div>
          </div>
          <div className="bottom">
            <p>We're at the forefront of innovation, combining cutting-edge technology with creative thinking to deliver outstanding solutions for businesses around the globe. Whether you're looking to transform your operations, optimize your digital presence, or harness the power of artificial intelligence, we have the expertise and passion to make it happen. Explore our services and discover how we can help your business thrive in the digital age.</p>
            <button>Next Step</button>
          </div>
        </div>
        <div className="productMainContentsContainerScrollContentColumn">
          {/* <h1>What We <span>Offer</span></h1> */}
          <div className="MCProductList__Container">
            <div className="maxCardProductConentsCardC_">
              <img src={webDev} alt="" />
              <h2>Concept of Website Development</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos laborum ad illum. Aliquam ipsum atque necessitatibus reiciendis omnis consequatur pariatur ex neque similique optio dignissimos soluta dolor provident, eligendi sit officiis sint voluptates sequi et asperiores amet nulla porro. Soluta porro neque, tempore molestias voluptatum incidunt ut ratione facilis.</p>
              <div className="buttons">
                <button>Service</button>
                <Link to="/the-hub/website-development" >Visit The Hub</Link>
              </div>
            </div>
            <div className="maxCardProductConentsCardC_">
              <img src={embeddedSystems} alt="" />
              <h2>Embedded Systems Designs</h2>
              <p>An embedded system is a computer system designed to perform specific tasks or functions within a larger system. It is a 
            combination of hardware and software, tightly integrated and dedicated to a particular purpose.
          Embedded systems are all around us, powering the devices and technology we use every day. From smartphones and smartwatches
             to home appliances, medical devices, and automotive systems, embedded systems are at the heart of modern technology.</p>
              <div className="buttons">
              <button>Service</button>
                <Link to="/the-hub/embedded-systems" >Visit The Hub</Link>
              </div>
            </div>
            <div className="maxCardProductConentsCardC_">
              <img src={videography} alt="" />
              <h2>Videography</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos laborum ad illum. Aliquam ipsum atque necessitatibus reiciendis omnis consequatur pariatur ex neque similique optio dignissimos soluta dolor provident, eligendi sit officiis sint voluptates sequi et asperiores amet nulla porro. Soluta porro neque, tempore molestias voluptatum incidunt ut ratione facilis.</p>
              <div className="buttons">
                <button>Service</button>
                <button>Take A Course</button>
              </div>
            </div>
            <div className="maxCardProductConentsCardC_">
              <img src={contentCreation} alt="" />
              <h2>Content Creation And Management</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos laborum ad illum. Aliquam ipsum atque necessitatibus reiciendis omnis consequatur pariatur ex neque similique optio dignissimos soluta dolor provident, eligendi sit officiis sint voluptates sequi et asperiores amet nulla porro. Soluta porro neque, tempore molestias voluptatum incidunt ut ratione facilis.</p>
              <div className="buttons">
                <button>Service</button>
                <button>Take A Course</button>
              </div>
            </div>
            <div className="maxCardProductConentsCardC_">
              <img src={grapgicsDesign} alt="" />
              <h2>Graphics Design</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos laborum ad illum. Aliquam ipsum atque necessitatibus reiciendis omnis consequatur pariatur ex neque similique optio dignissimos soluta dolor provident, eligendi sit officiis sint voluptates sequi et asperiores amet nulla porro. Soluta porro neque, tempore molestias voluptatum incidunt ut ratione facilis.</p>
              <div className="buttons">
                <button>Service</button>
                <button>Take A Course</button>
              </div>
            </div>
            <div className="maxCardProductConentsCardC_">
              <img src={architecture} alt="" />
              <h2>Architecturing</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos laborum ad illum. Aliquam ipsum atque necessitatibus reiciendis omnis consequatur pariatur ex neque similique optio dignissimos soluta dolor provident, eligendi sit officiis sint voluptates sequi et asperiores amet nulla porro. Soluta porro neque, tempore molestias voluptatum incidunt ut ratione facilis.</p>
              <div className="buttons">
                <button>Service</button>
                <button>Take A Course</button>
              </div>
            </div>
            <div className="maxCardProductConentsCardC_">
              <img src={socialMedia} alt="" />
              <h2>Social Media Management</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos laborum ad illum. Aliquam ipsum atque necessitatibus reiciendis omnis consequatur pariatur ex neque similique optio dignissimos soluta dolor provident, eligendi sit officiis sint voluptates sequi et asperiores amet nulla porro. Soluta porro neque, tempore molestias voluptatum incidunt ut ratione facilis.</p>
              <div className="buttons">
                <button>Service</button>
                <button>Take A Course</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CountdownTimerContainer />
    </div>
  )
}

export default Products