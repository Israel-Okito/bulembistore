import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userData } from '../../helpers';
import "./Compte.scss"
import VosEmprunt from '../../components/Profile/VosReservation';
import VosReserver from '../../components/Profile/VosEmprunts';


const Compte = () => {

    const navigate = useNavigate(); 
    const deconecter= ()=>{  
       localStorage.setItem("user", "");
        navigate("/login")
      
}
const {username}= userData()
// const router = useRouter()
// const isHome = router.pathname === "/"
// const goBack = (event) => {
//   event.preventDefault()
//   router.back()
// }
// {!isHome && 
//   <div className={styles.back}>
//       <a href="#" onClick={goBack}>{"<"} Back </a>
//   </div>
// }
const [click, setClick] = useState(false);
const [click1, setClick1] = useState(false);


  return (
    <div className='compte'>
       <div className="main1">
          <div className='menu-container' >
                <button  onClick={()=> setClick1(!click1)} className='link'>Vos Emprunts</button> 
                <button onClick={()=> setClick(!click)}  className='link'>Vos Réservation</button>
                <button   className='link'>Vos favoris</button> 
                <button   className='menu-logout' onClick={deconecter}>Se deconnecter</button>     
      
          
          </div>
        </div>

        <div className="main2">
            <h2>Bienvenue <span>👉️ {username}  </span> </h2>
          <div className='main3'>
          {click && <VosEmprunt/>}
          {click1 && <VosReserver/>}
          </div>
        </div>
    </div>
  )
};

export default Compte;




