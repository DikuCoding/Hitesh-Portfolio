import React from "react";
import Contact from './Contact';

// import './script.js'
import './style.css'
// import potrait from './images/potrait.png'
import Footer from './Footer';

const Home = () => {
  

  return (
    <>
    <div className="infocontainer">
      <div className="myinfo">
        <div className="hello Animate">Hi, my name is</div>
        <div className="secondHello Animate">Hitesh Vaidya. </div>
        <div className="secondHello Animate">I am an artist.
        </div>
          <div className="secondHello Animate">I am. ........</div>
          <div className=" message Animate">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum pariatur quos hic tenetur veritatis, porro quidem id eaque labore earum, voluptatibus odio consequatur laboriosam et nostrum dolorem totam aspernatur, omnis molestiae cupiditate rem odit! Nostrum, commodi.</div>
        {/* <div className="buttons">
          <a href="https://drive.google.com/uc?export=download&id=1hTgmGQhAZA_IiIKGCAjRfr571jGWQ6mk" target="_blank">
            <button className="btns">Download CV</button>
          </a>
        </div> */}
      </div>
      <div className="mypic">
        {/* <img src={potrait} alt="Dikesh Khagi" /> */}
      </div>
       
    </div>
        <div className="contact-redirect-block r">
            <div className="image-container">
          <a href="/contact1" className="link-wrap aos-animate image" target="_blank">

          <img src="https://squareme.si/wp-content/uploads/2019/10/big-bubble.svg" className="forHover" alt="" />
          <h2 className="h2 overlay-text">Let's
          <strong> talk</strong>
          .
          </h2>
          </a>
            </div>
        </div>
         <div className="Contact">

      <Contact/>
        </div>
        <Footer/>
    </>
  );
};

export default Home;
