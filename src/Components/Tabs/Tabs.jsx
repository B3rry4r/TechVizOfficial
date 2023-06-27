import { useState } from 'react';
import image from '../../Assets/plRight.svg';
import './Tabs.scss';

const TabA = () => {
    return (
        <div>
            <h1>Programming</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cupiditate voluptatem, repudiandae reprehenderit fugit quas ut tempore fugiat ea vero!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati rerum natus sapiente, exercitationem, ullam consectetur provident fugit tempore, nobis dicta suscipit consequuntur. Praesentium sapiente, iusto recusandae ratione expedita ad sit.</p>
        </div>
    )
}

const TabB = () => {
    return (
        <div>
            <h1>Architecture</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cupiditate voluptatem, repudiandae reprehenderit fugit quas ut tempore fugiat ea vero!</p>
            <p>Lorem ipsum dolor sit amet, consectetur assumenda dolore, possimus nam alias eos atque nemo recusandae! Ratione temporibus debitis nobis illum cupiditate impedit fugit illo vitae dignissimos enim eligendi, ad at doloribus libero, eius aperiam nam, quod veniam!</p>
        </div>
    )
}

const TabC = () => {
    return (
        <div>
            <h1>Computer Hardware</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cupiditate voluptatem, repudiandae reprehenderit fugit quas ut tempore fugiat ea vero!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur voluptatum aut similique ab et dolor, adipisci nesciunt id eaque eligendi. Dolorum molestiae tenetur voluptas natus, officiis illum.</p>
        </div>
    )
}
const Tabs = () => {
    return (
      <div>
          <Tab
          config={[
              {header: "Programming", component: <TabA/> },
              {header: "Architecture", component: <TabB/> },
              {header: "Computer Hardware", component: <TabC/> }
          ]}
          
          />
      </div>
    )
  }

const Tab = ({config}) => {
    const [activeTabs, setActiveTabs] = useState(0);
    
    return (
        <div className='tab'>
            <img src={image} alt="illustration" />
            <div className="tabContainer">
            <div className="tabDesc">
            {/* <h1>TECV<span>I</span>Z</h1> */}
            {/* <span>Building the <strong>future of technology</strong></span> */}
            <span>Our <strong>fields</strong></span>
            </div>
            <div className="tabHeaders">
                {
                    config.map((entry, index) => (
                        <p 
                        className={`tabHeader ${activeTabs === index ? "active" : ""}`}
                        onClick={()=>{setActiveTabs(index)
                        console.log(index);
                        }}
                        >
                            {entry.header}
                        </p>
                    ))
                }
            </div>
            <div className="tabBody">
                {config[activeTabs]?.component}
            </div>
            <button>Read more</button>
            </div>
        </div>
    )
}


  

export default Tabs