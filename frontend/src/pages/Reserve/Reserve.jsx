import React, { useState } from 'react'
import './Reserver.scss'
import {  useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { userData } from '../../helpers';


const init = {  
  email:"",
  desc:"",
  title:"",
  debut:"",
  fin:""
}
const Reserve = () => {
  const products = useSelector((state) => state.cart.products);
const [book, setBook] = useState(init)
    
  const {jwt}=userData()

    const hanndleClick = async(e)=>{
      e.preventDefault();
    
      fetch(`${process.env.REACT_APP_API_URL}/reservations`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
          Authorization:`Bearer ${jwt}`
        },
        body: JSON.stringify({data:book})
      })
      .then((res) => {
       console.log(res)
      toast(` ${username} Merci de reserver , votre reservation est en cours de traitement
        Remarque: veuillez passer à MIT avec le code de confirmation qu'on vous envoyera à la date prévue pour votre reservation sinon votre reservation sera annuler `, {
          autoClose: 10000,
          position: toast.POSITION.TOP_CENTER,
          className: 'toast-message',
          // hideProgressBar:true,
      });
      })
    }
const {username}= userData()
  return (
  <div className='calendrier'>
       <h3>salut <span>{username}</span> vous pouvez compléter ces informations pour faire une reservation</h3>
      <div className='calendar-container'>
            <div className='user'>

            <form className="login_form" action=""  onSubmit={hanndleClick}   >
            <input
                  type="email"
                  name="email"  
                  // onChange={handleChange}
                  value={book.email}
                  onChange={e => setBook({...book, email: e.target.value})}
                  placeholder="votre email"
               />
            
               
               <input
                  type="text"
                  name="title"  
                  value={book.title}
                  onChange={e => setBook({...book, title: e.target.value})}
                  placeholder="Votre adresse d'habitation "
               />
                 <input
                type="text"
                name="desc"
               value={book.desc}  
               onChange={e => setBook({...book,desc: e.target.value})}
               placeholder="Quelle est le nom du livre choisi ?"
             />
                 <label htmlFor="">la date de la reservation du livre: </label>
             
               <input type="date" 
                  name="debut"  
                  // onChange={handleChange}
                  value={book.debut}
                  onChange={e => setBook({...book, debut: e.target.value})}

               />
               <label htmlFor="">la date de retour de la reservation du livre :</label>
               <input type="date" 
                  name="fin"  
                  // onChange={handleChange}
                  value={book.fin}
                  onChange={e => setBook({...book, fin: e.target.value})}

               />
                 <button  className='button'>reserver</button>

          </form>

         </div>
            <div className='product_main'>
              {products?.map((item) => (
               <div className="item_main" key={item.id}>
                 <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                 <div className="detail_main">
                   <h1   > {item.title }</h1>
                 
                    <p>{item.desc?.substring(0, 160)}</p>
                 </div>
                
               </div>
             ))}
            </div>
        </div>
  </div>
  )
}

export default Reserve