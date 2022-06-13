import { useRef } from 'react'
import LogoT from '../../../assets/images/logo-t.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

 

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoT}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
