import React from 'react';
import './Products.scss';
import techVizIllustration from '../../Assets/AppLogos/techVizIllustration.svg'
import Product from '../../Assets/Product.json';
import webDev from '../../Assets/product-1.jpg';
import videography from '../../Assets/videography.jpg';
import architecture from '../../Assets/architecture.jpg';
import contentCreation from '../../Assets/content-creation.jpg';
import socialMedia from '../../Assets/social-media.jpg';
import grapgicsDesign from '../../Assets/grapgics-design.jpg';
import Lottie from 'lottie-react';
import appLogoBW from '../../Assets/AppLogos/Techviz.svg';
import CountdownTimerContainer from '../../Components/CountdownTimerContainer/CountdownTimerContainer';



const Products = () => {
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
            <p>Lorem ipsum dolor sit amet conseprovident nesciunt modi, omnis eveniet quod obcaecati corporis et repudiandae fugiat accusamus fuga consequuntur alias. Laudantium officia beatae numquam itaque ut dolorum facere. Laboriosam aliquam iste pariatur doloremque quia.</p>
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
                <button>Take A Course</button>
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