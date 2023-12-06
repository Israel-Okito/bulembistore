
import React  from 'react'
import useAlex from '../../hooks/useAlex';
import { userData } from '../../helpers';
import './VosReserve.scss'
const  VosEmprunt= () => {

  const { data } = useAlex(
    `/reservations`
  );
const {username} = userData()

  return (

    <div >
      <h1 style={{textAlign:"center"}}>{username} voici votre liste des reservations</h1>
      {data?.map((reservation)=>(
                <div className="mz" style={{borderBottom:"1px solid #999"}} key={reservation.id}>
                    <p >email : {reservation?.attributes?.email}</p>
                    <p >adresse : {reservation?.attributes?.title}</p>
                    <p >Nom du livre : {reservation?.attributes?.desc}</p>
                    <h4 style={{backgroundColor:"rgb(44, 111, 212)" , color:"white", textAlign:"center"}}>{reservation?.attributes?.confirmation}</h4>
                    <h4 style={{backgroundColor:"#ee5d1f" , color:"white", textAlign:"center"}}>{reservation?.attributes?.encours}</h4>
                    <h4 style={{backgroundColor:"#ee5d1f" , color:"white", textAlign:"center"}}>{reservation?.attributes?.annuler}</h4>
                </div> 
            ))} 
            
    </div>
  )
 }

export default VosEmprunt