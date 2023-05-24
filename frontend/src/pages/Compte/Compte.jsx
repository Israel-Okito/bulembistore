import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userData } from '../../helpers';
import "./Compte.scss"
import VosReserver from '../../components/Profile/VosReserver';
import Profile from '../../components/Profile/Profile';


const Compte = () => {

    const navigate = useNavigate(); 
    const deconecter= ()=>{  
       localStorage.setItem("user", "");
        navigate("/login")
      
}
const {username}= userData()
const [open,setOpen] = useState(false)
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


const [selected, setSelected] = useState('');

const handleChange = (e)=> {

};


  return (
    <div className='compte'>
       <div className="main1">
          <div className='menu-container'>
            <form action="" value={selected} onChange={handleChange}>
                <button  value="A" className='link'> Votre compte KinStore</button>
                <button  value="B"   className='link'>Vos commandes</button>
                <button   className='link'>Vos Réservation</button>
                <button   className='link'>Vos favoris</button>
                <button   className='menu-logout' onClick={deconecter}>Se deconnecter</button>     
          
            </form>
          </div>
        </div>

        <div className="main2">
            <h2>Bienvenue <span>👉️ {username}</span> </h2>
          <div>
            {selected && <VosReserver/>}
            {selected && <Profile/>}
            
          </div>
        </div>
    </div>
  )
};

export default Compte;




