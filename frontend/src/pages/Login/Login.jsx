import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import { storeUser } from '../../helpers';
import './Login.scss'
import { storeUser } from '../../helpers';

const   initialUser = { identifier:"", password:""}
const Login = () => {
  const [user, setUser]=  useState(initialUser );
  const navigate = useNavigate();


  const handleSubmit= async (event)=>{
    event.preventDefault();
   const url =`http://localhost:1337/api/auth/local`;
    try {
      if(user.identifier && user.password){
        const {data}= await axios.post(url, user)
        if(data.jwt){
          storeUser(data)
         console.log(data)
          setUser(initialUser)
          navigate("/")
        }
      }
      
    } catch (error) {
      console.log(error)
    }
  
 } 
 
  const  handleChange = ({target}) => {
    const {name,value} = target;
    setUser((currentUser) => ({
    ...currentUser,
    [name]:value,
    }));
  };




  return (
    <div className='login'>
       <div className="login_main">
       <div className="login_top">        
       <h2>Se connecter</h2>
      </div>
      <div >

        <form className="login_form" action="" onSubmit={handleSubmit}>
         <input
           type="email"
           name= "identifier" 
           value={user.identifier}
           onChange={handleChange}    
           placeholder="your email"
           required
          />
         <input 
           type="password"
           name="password" 
           value={user.password}          
           onChange={handleChange}
           placeholder="your password"
           required
          />

         <button className='btn-form' >Connexion</button>
       </form>

      </div>
      
       <h6>cliquez  sur <Link to='/inscription' className='link'>s'inscrire</Link> pour créer un compte</h6>
    
       </div>

    </div>
  )
}

export default Login
