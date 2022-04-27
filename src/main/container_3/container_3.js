import React from 'react'

import {DisplayImage} from '../../tools/display.js'
import {DisplayIcon} from '../../tools/display.js'

import iphone from '../../image/iphone_Heats.png'

function Container3 () {
    return (
        <div className="container3">
            <div className="blockContainer3">
            <DisplayImage src={iphone} alt="iphone" class="iphone_heats"/>
            <div className="headerContainer3">
                <h2 className="h2HeaderContainer3">Heats</h2>
                <h3 className="h3Container3">By montain lovers</h3>
            </div>
            <h2 className="h2HeaderMainContainer3">Prêt.e pour l'aventure ?</h2>
            <p className="PMainContainer3">Faites-vous livrer des plats bons et chauds à 2000m d'altitude !<br/>
                C'est 100% Local et zéro déchet<br/> 
                Pour en savoir plus contactez nous !</p>
            <a href="mailto:Heats.contact@gmail.com" className="buttonMainContainer3">Contactez-nous</a>
            <footer className="footer">
                <a href="https://www.instagram.com/heats_fr/" target="_blank">
                    <DisplayIcon IclassName="fa-brands fa-instagram" array={[]}/>
                </a>
                <a href="https://www.facebook.com/Heats.fr/" target="_blank">
                    <DisplayIcon IclassName="fa-brands fa-facebook-square" array={[]}/>
                </a>
                <p className="PfooterMain">@Heats_fr</p>
            </footer>
            </div>
        </div>
    )
}

export default Container3;