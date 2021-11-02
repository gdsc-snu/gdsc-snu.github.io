import './footer.css'
import greenCircle from '../../svgimageFiles/greenCircle.svg'
import linkedin from '../../svgimageFiles/linkedinLogo.svg'
import youtube from '../../svgimageFiles/youtubeLogo.svg'
import twitter from '../../svgimageFiles/twitterLogo.svg'
import facebook from '../../svgimageFiles/facebookLogo.svg'


const Footer = () => {
    return (
        <div className='footerDiv'>
            <div  className='footerSubDiv'>
                <img src={linkedin} className="logo" alt="google developer student club" />
                <img src={facebook} className="logo" alt="google developer student club" />
                <img src={twitter} className="logo" alt="google developer student club" />
                <img src={youtube} className="logo" alt="google developer student club" />
            </div>
            <img src={greenCircle} className="greenCircle" alt="google developer student club" />

        </div>
    )
}

export default Footer