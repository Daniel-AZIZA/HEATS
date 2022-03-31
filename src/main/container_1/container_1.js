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
            B3a: "Nos produits sont locaux et de saisons"
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
        <h1 className="titleB1">Le service de livraison sur les pistes</h1>
        <p className="descriptionB1">Grâce au <span className="spanDescriptionB1">système de consigne</span> nous visons à améliorer les
            pauses <span className="spanDescriptionB1">déjeuner des professionnel</span> et offrir un service
            supplémentaire à <span className="spanDescriptionB1">la clientèle de montagne</span>.
        </p>
    </div>
    <MainB1 ulClassName="mainB1" features={features}/>
    <div className="hr_bottom"/>
  </div>
  )
}

export default Container1;

    {/* <ul className="mainB1">
            <li className="featureMainB1a">
              <p className="B1a">100%</p>
              <p className="B2a">LOCAL</p>
              <p className="B3a">Nos produits sont locaux et de saisons</p>
            </li>
            <li className="featureMainB1b">
              <p className="B1b">100%</p>
              <p className="B2b">DE PLAISIR</p>
              <p className="B3b">Nos contenants vous garantissent des plats chauds et frais</p>
            </li>
            <li className="featureMainB1c">
              <p className="B1c">0%</p>
              <p className="B2c">DE DÉCHETS</p>
              <p className="B3c">Grâce à notre système de consigne</p>
            </li>
        </ul> */}