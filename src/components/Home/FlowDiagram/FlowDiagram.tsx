import './FlowDiagram.css'
import { BodyProps } from '../Body/body';
import { useState } from 'react';
import { FaGlobe, FaDiscord } from "react-icons/fa";
import { MdDone } from "react-icons/md";

function FlowDiagram({ setToggleBody }: BodyProps) {

  const [ toggleLink, setToggleLink ] = useState<boolean>(true)
  const [ discordOn, setdiscordOn ] = useState<boolean>(false)
  const [ done , setDone ] = useState<boolean>(false)

  return (
    <div className='flowDiagramDiv'>
      <div className='insideDiv'>
          <div className='joinLinks'>
                  <FaGlobe className= { toggleLink ?`icons`: `iconsDone`} />
              <hr className='hr'/>
                  <FaDiscord className= { discordOn ? `icons`: `iconsDone` }/>
              <hr className='hr'/>
              <a   onClick={() => {setToggleBody(true) }}>
                  < MdDone className= { done ? `icons` :`iconsDone` }/>
          </a>
          </div>

          <div className='gifDiv'>
          </div>
          { 
              toggleLink ?
              <div onClick={() => {setToggleLink(false); setdiscordOn(true)} } >
              <a className='redirect'  href="https://gdsc.community.dev/accounts/login/?next=/sister-nivedita-university-kolkata/" target="_blank" >
                  Become a member
              </a>
              </div> :
              discordOn ? 
              <a className='redirect' href="https://discord.com/invite/c5fEPAsjcg" target="_blank" onClick={ () => {setdiscordOn(false); setDone(true)}} >
                  Join Discord
             </a>:
             done ?
             <p className='redirect' onClick={() => {setToggleBody(true) }}> You are all set </p>
             : null
                /* <button className='closeModal'> CLOSE</button> */
          }
      </div>
    </div>
  );
}

export default FlowDiagram 
