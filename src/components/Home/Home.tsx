import Body from './Body/body';
import Footer from './Footer/footer';
import Header from './/Header/header';
import { useState } from 'react';
import FlowDiagram from './FlowDiagram/FlowDiagram';
import './Body/body.css'
import './FlowDiagram/FlowDiagram.css'


function Home() {

  const [toggleBody, setToggleBody ] = useState<boolean>(true)

  return (
    <>
        <Header/>
        <Body setToggleBody={setToggleBody}/>
        {toggleBody? null :
            <div className='overlay' >
                <FlowDiagram setToggleBody={setToggleBody}/> 
            </div>
        }
        <Footer/>
        
    </>
  );
}

export default Home
