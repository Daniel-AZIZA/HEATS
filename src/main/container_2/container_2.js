import React from 'react'

import {DisplayImage} from '../../tools/display.js'

import photo_1 from '../../image/photo_1.png'
import photo_2 from '../../image/photo_2.png'
import photo_3 from '../../image/photo_3.png'
import logoAlone from '../../image/logo_heats_seul.png'

function Container2 () {
  return (
    <div className="container2">
       <h2 className="titleContainer2">NOS ENGAGEMENTS</h2>
       <ul className="mainContainer2">
          <li className="feature1">
            <DisplayImage src={photo_1} alt="" class="imgFeature1"/>
            <p className="textMainContainer2">
              C'est la Start Up qui vous permet de vous faire livrer des plats chauds et frais directement sur les pistes
            </p>
          </li>
          <ul className="middleFeature" >
            <DisplayImage src={logoAlone} alt="" class="logoAlone"/>
            <li className="feature2">
                <DisplayImage src={photo_2} alt="" class="imgFeature2"/>
                <p className="textMainContainer2">
                    Nous vous proposons des produits frais de saison et locaux
                </p>
            </li>
          </ul>
          <li className="feature3">
            <DisplayImage src={photo_3} alt="" class="imgFeature3"/>
            <p className="textMainContainer2">
                Nos contenants vous garantissent la qualité de vos commmandes ainsi que l'expérience 0 déchets 
            </p>
          </li>
       </ul>
    </div>
  )
}

export default Container2;