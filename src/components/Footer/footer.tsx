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
                <a  href="https://www.linkedin.com/company/gdsc-snu/" target="_blank">
                    <img src={linkedin} className="logo" alt="google developer student club" />
                </a>
                <a href="https://www.facebook.com/gdscsnu" target="_blank">
                    <img src={facebook} className="logo" alt="google developer student club" />
                </a>
                <a  href="https://twitter.com/gdscsnu" target="_blank">
                    <img src={twitter} className="logo" alt="google developer student club" />
                </a>
                <a  href="https://www.youtube.com/channel/UCTCtURT5tHNngMwkBz-MUBA" target="_blank">
                    <img src={youtube} className="logo" alt="google developer student club" />
                </a>
            </div>
            <img src={greenCircle} className="greenCircle" alt="google developer student club" />

        </div>
    )
} 

export default Footer