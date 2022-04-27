import React from 'react'
import {DisplayImage} from '../tools/display.js'
import {DisplayIcon} from '../tools/display.js'
import mainLogo from '../image/logo_V2.png';



function NavBar (props) {
  const {ulClassName, liClassName, linkFeatures, isSideBar, features} = props;
  const [isDisplay, setDisplay] = [...props.array];
  return (
    <nav>
      {isSideBar && <DisplayIcon IclassName="fa-solid fa-xmark" array={props.array}/>}
      <ul className={ulClassName}>
        {features.map((feature, index) =>
        <li key={index}><a href={linkFeatures[index]} className={liClassName} onClick={(props) => setDisplay(!isDisplay)}>{feature}</a></li>)}
      </ul>
    </nav>
  )
}

function Header () {
  const features = ["Nos engagements", "Nous contacter"];
  const linkFeatures = ["#Container2", "mailto:Heats.contact@gmail.com"];
  const [isDisplay, setDisplay] = React.useState(false);
  const mqLarge = window.matchMedia('(min-width : 1100px)');

  return (
    <header className="header">
      <DisplayImage src={mainLogo} alt="mainLogo" class="mainLogo"/>
      {!mqLarge.matches && <DisplayIcon IclassName="fa-solid fa-bars" array={[isDisplay, setDisplay]}/>}
      {isDisplay && <NavBar ulClassName="sideBar" liClassName="featureSB" linkFeatures={linkFeatures} array={[isDisplay, setDisplay]} isSideBar={true} features={features}/>}
      {mqLarge.matches && <NavBar ulClassName="navBar" liClassName="featureNB" linkFeatures={linkFeatures} array={[]} isSideBar={false} features={features}/>}
      {isDisplay ? (document.getElementsByTagName('body')[0].style.overflow = 'hidden') : (document.getElementsByTagName('body')[0].style.overflow = '')}
    </header>
  )
}

export default Header;