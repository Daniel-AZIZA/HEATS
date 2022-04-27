import React from 'react'

import {DisplayImage} from '../../tools/display.js'

import photo_1 from '../../image/photo_1.jpg'
import photo_2 from '../../image/photo_2.jpg'
import photo_3 from '../../image/photo_3.jpg'
import logoAlone from '../../image/logo_heats_seul.png'

function Container2Mini () {
  return (
    <div className="Container2Mini" id="Container2">
      <h2 className="titleContainer2">NOS ENGAGEMENTS</h2>
      <div className="block">
        <div className="headerContainer2">
          <DisplayImage src={logoAlone} alt="a" class="logoAlone"/>
        </div>
          <ul className="mainContainer2">
            <li className="feature1">
              <DisplayImage src={photo_1} alt="a" class="imgFeature1"/>
              <p className="textMainContainer2a">
                C'est la Start Up qui vous livre des <span className="SpanContainer2">plats chauds et frais</span> directement sur les pistes !
              </p>
            </li>
            <ul className="middleFeature">
              <li className="feature2">
                  <p className="textMainContainer2b">
                      Nous vous proposons des <span className="SpanContainer2">produits frais, de saison et locaux</span>
                  </p>
                  <DisplayImage src={photo_2} alt="a" class="imgFeature2"/>
              </li>
            </ul>
            <li className="feature3">
              <DisplayImage src={photo_3} alt="a" class="imgFeature3"/>
              <p className="textMainContainer2c">
                  Nos contenants vous garantissent la qualité de vos commmandes ainsi que l'expérience <span className="SpanContainer2">zéro déchet</span>
              </p>
            </li>
        </ul>
       </div>
    </div>
  )
}

function Container2Full () {
  return (
    <div className="Container2Full" id="Container2">
      <h2 className="titleContainer2">NOS ENGAGEMENTS</h2>
      <div className="block">
          <ul className="mainContainer2">
            <li className="feature1">
              <DisplayImage src={photo_1} alt="a" class="imgFeature1"/>
              <p className="textMainContainer2a">
                C'est la Start Up qui vous livre des <span className="SpanContainer2">plats chauds et frais</span> directement sur les pistes !
              </p>
            </li>
            <ul className="middleFeature">
              <DisplayImage src={logoAlone} alt="a" class="logoAlone"/>
              <li className="feature2">
                  <DisplayImage src={photo_2} alt="a" class="imgFeature2"/>
                  <p className="textMainContainer2b">
                      Nous vous proposons des <span className="SpanContainer2">produits frais, de saison et locaux</span>
                  </p>
              </li>
            </ul>
            <li className="feature3">
              <DisplayImage src={photo_3} alt="a" class="imgFeature3"/>
              <p className="textMainContainer2c">
                  Nos contenants vous garantissent la qualité de vos commmandes ainsi que l'expérience <span className="SpanContainer2">zéro déchet</span>
              </p>
            </li>
        </ul> 
       </div> 
    </div>
  )
}

function Container2 () {
  const mqLarge = window.matchMedia('(min-width : 1100px)');

  return (
    <div className="container2">
        {mqLarge.matches ? Container2Full() : Container2Mini()}
    </div>
  )
}

export default Container2;