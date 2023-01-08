import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsappIcon from '@mui/icons-material/WhatsApp'
import '../styles/Footer.css'
function Footer() {
  return (
    <div className="footer">
    <div className="socialMedia">
        <InstagramIcon/><FacebookIcon/><TwitterIcon/><LinkedInIcon/><WhatsappIcon/>
    </div>
    <p>&copy;2022 RecogLip.com</p>
    </div>
  )
}

export default Footer;
