import React from 'react'


function MainB1 (props) {
    const {ulClassName, features} = props;
 
    return (
        <ul className={ulClassName}>
                {Object.entries(features).map(([key, value], index) => 
                    <li className={`${key}`} key={index}>
                        <p className={Object.keys(value)[1]}>{Object.values(value)[1]}</p>
                        <p className={Object.keys(value)[2]}>{Object.values(value)[2]}</p>
                        <p className={Object.keys(value)[3]}>{Object.values(value)[3]}</p>
                    </li>)}
        </ul>
    )
}

function Container1 () {
    const features = {
        featureMainB1a: 
        {
            id: 0,
            B1a: "100%",
            B2a: "LOCAL",
            B3a: "Nos produits sont locaux et de saison"
        },
        featureMainB1b: 
        {
            id: 1,
            B1b: "100%",
            B2b: "DE PLAISIR",
            B3b: "Nos contenants vous garantissent des plats chauds et frais"
        },
        featureMainB1c: 
        {
            id: 2,
            B1c: "0%",
            B2c: "DE DÉCHETS",
            B3c: "Grâce à notre système de consigne"
        }
  }

  return (
    <div className="container1">
    <div className="hr_top"/>
      <div className="headerB1">
        <h1 className="titleB1">LE SERVICE DE LIVRAISON SUR LES PISTES</h1>
        <p className="descriptionB1">Nous améliorons <span className="spanDescriptionB1">les pauses-déjeuner des professionnels</span> et offrons un
            service supplémentaire <span className="spanDescriptionB1">à la clientèle de montagne</span>. Notre
            système de consigne vous permet une <span className="spanDescriptionB1">expérience zéro déchet</span>.
        </p>
        {/* <p className="descriptionB1">Grâce au <span className="spanDescriptionB1">système de consigne</span> nous visons à améliorer les
            pauses <span className="spanDescriptionB1">déjeuner des professionnel</span> et offrir un service
            supplémentaire à <span className="spanDescriptionB1">la clientèle de montagne</span>.
        </p> */}
    </div>
    <MainB1 ulClassName="mainB1" features={features}/>
    <div className="hr_bottom"/>
  </div>
  )
}

export default Container1;