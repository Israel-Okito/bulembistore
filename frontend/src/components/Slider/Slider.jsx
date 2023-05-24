import React from "react";
import "./Slider.scss"
import { Link } from 'react-router-dom';
const Slider = () => {




  return (
    <div className='slider'>   
       
        <div className="main"style={{background:'rgb(37, 115, 200)'}}>
          <div className="desc">
             <h3>Dernières sorties de nos Bouquins</h3>
             <p>Des Livres  qui sont commandé  tous les jours chez nos nouveaux étudiant(e)s et reserver en toute sécurité! Assurez-vous de nous suivre pour  toutes les nouvelles sorties.</p>
             <Link to="/products/1">
                <button>Voir tous les livres</button>
             </Link>
          </div> 
          <div className="images">
            {/* <h3>MitBook</h3> */}
             <img src="./img/silde.jpg"   alt="livre" />
          </div>
        </div>
 
     
    </div>
  )
}

export default Slider
