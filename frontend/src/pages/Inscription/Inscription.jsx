import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Inscription.scss'
import { storeUser } from '../../helpers';
const initialUser = {password:"", email:"", username:""}

const  Inscription = () => {

  const [user, setUser]=  useState(initialUser);
  const navigate = useNavigate();
   
  const  handleUserChange = ({target})=>{   
    const {name,value} = target;
    setUser((currentUser) => ({
    ...currentUser,
    [name]:value,
    }));
   
  }


  const signUp= async (event)=>{
    event.preventDefault();
   
    try {
      const url =`http://localhost:1337/api/auth/local/register`;
      if (user.username && user.email && user.password){
        const {data } = await axios.post(url , user)       
        if (data){
          setUser(initialUser);
          storeUser(data)
          navigate("/login");
        }
        console.log(data);
      }
      
    } catch (error) {
     console.log(error)
    }
  
 } 
 


  return (
  <div className='register'>
    <div className="register_main">

      <div className="login_top">        
        <h2>S'inscrire</h2>
    
     </div> 

      <form className="login_form" action="" onSubmit={ signUp}>
      
       <input
         type="text"
         name="username"
         value={user.username}
         onChange={handleUserChange}    
         placeholder="your name"
       />
       <input
         type="email"
         name="email"  
         value={user.email}
         onChange={handleUserChange}    
         placeholder="your email"
       />
       <input 
         type="password"
         name="password" 
         value={user.password}
         onChange={handleUserChange}
         placeholder="your password"
       />

       <button >s'enregistrer</button>
   
       </form>
       
       <h6>cliquez  sur <Link to='/login' className='link'>Se connecter</Link> si vous avez déjà un compte</h6>
    </div>
 </div>
  )
}

export default  Inscription
