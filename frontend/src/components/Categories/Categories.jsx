import React  from 'react'
import { Link} from 'react-router-dom'
// import useFetch from '../../hooks/useFetch';
import "./Categories.scss"



const Categories = ({type}) => {
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][type][$eq]=${type="Ventes Flash" }`
  // );


  


  return (
 <div className='categories'>
      <div className="container_title">
         <p> Catégories de livre disponible </p> 
      </div>
       
    <div className="container_categories">

     
         <div className="main11">
            <h5>Notre liste de livre préferer de nos lecteurs vous pouvez trouver cela  dans la catégorie BD et AMOUR   </h5>
             
            <Link className="link" to="/products/1">
                <div className="main121">
                     <img src="img/ordinateur.png" alt=""  />
                   <button>Voir tous les livres</button>
                </div>        
                    
            </Link>
            
          </div>
          
     
    
          <div className="main12">
            <h5> Hatez-vous d'acheter un livre de JEUNESSE sur votre premier achat et obtenez une reduction de 20%</h5>
             
            <Link className="link" to="/products/1">
                <div className="main121">
                     <img src="img/ordinateur.png" alt=""  />
                   <button>Je saisie ma chance</button>
                </div>        
               
            </Link>
            
          </div>
    
       
        </div>

    </div>
  )
}

export default Categories
