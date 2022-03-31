import React from 'react'
import {DisplayImage} from '../tools/display.js'
import {DisplayIcon} from '../tools/display.js'
import mainLogo from '../image/logo_V2.png';

function NavBar (props) {
  const {ulClassName, liClassName, link, array, isSideBar, features} = props;

  return (
    <nav>
      {isSideBar && <DisplayIcon IclassName="fa-solid fa-xmark" array={array}/>}
      <ul className={ulClassName}>
        {features.map((feature, index) => <li key={index}><a href={link} className={liClassName}>{feature}</a></li>)}
      </ul>
    </nav>
  )
}

export default function Header () {
  const features = ["Nos engagements", "Nous contacter"];
  const [isDisplay, setDisplay] = React.useState(false);
  const mqLarge = window.matchMedia('(min-width : 1100px)');

  return (
    <header className="header">
      <DisplayImage src={mainLogo} alt="mainLogo" class="mainLogo"/>
      {!mqLarge.matches && <DisplayIcon IclassName="fa-solid fa-bars" array={[isDisplay, setDisplay]}/>}
      {isDisplay && <NavBar ulClassName="sideBar" liClassName="featureSB" link="#" array={[isDisplay, setDisplay]} isSideBar={true} features={features}/>}
      {mqLarge.matches && <NavBar ulClassName="navBar" liClassName="featureNB" link="#" isSideBar={false} features={features}/>}
    </header>
  )
}
