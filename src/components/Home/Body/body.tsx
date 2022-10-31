import logo from '../../../svgimageFiles/logo.svg'
import topcircle from '../../../svgimageFiles/top-circle.svg';
import orangecircle from '../../../svgimageFiles/leftOrangeCircle.svg';
import dottedDesign from '../../../svgimageFiles/dottedDesign.svg'
//import { Redirect } from "react-router-dom";

import "./body.css";

export interface BodyProps{
    setToggleBody:(b: boolean) => void,
}

const joinGDSC = () => {
    window.open("https://gdsc.community.dev/sister-nivedita-university-kolkata/", "_blank");
}

const contactGDSC = () => {
    window.open("https://discord.com/invite/c5fEPAsjcg", "_blank");
}
const Body = ( {setToggleBody} :BodyProps) => {
    return (
        <div className='bodyDiv' >
            <div className='bodySubDiv'> 
            <div>
            <img src={topcircle} className="topCircle" alt="google developer student club" />

                <h1 className='bodyHead'> Welcome to <br /> GDSC SNU </h1> 
                <p className='bodyText'>Google Developer Student Club (GDSC) is a Google
                      Developers program for university students to learn 
                      web, mobile, and google technologies in a peer-to-peer 
                      learning environment. 
                </p> 
                {/* <button onClick={ () => setToggleBody(false)}className='bodyLink'> Join Us</button>
                <a className='bodyLinkContact' href="https://discord.com/invite/c5fEPAsjcg" target="_blank" rel="noreferrer"> Contact Us</a>
                <br />
                <img src={dottedDesign} className="dottedDesign" alt="google developer student club" /> */}
                <div className='buttonArea'>
                  
                  <button className='joinusbtn' onClick={joinGDSC}>Join Us</button>
                  <button className='contactusbtn' onClick={contactGDSC}>Contact Us</button>

                </div>

          <br />
          <img
            src={dottedDesign}
            className="dottedDesign"
            alt="google developer student club"
          />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <img
          src={orangecircle}
          className="orangeCircle"
          alt="google developer student club"
        />
      </div>
      <img src={logo} className="App-logo2" alt="logo" />
    </div>
  );
};

export default Body;
