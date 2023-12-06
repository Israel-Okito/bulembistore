
import React  from 'react'
import useAlex from '../../hooks/useAlex';
import { userData } from '../../helpers';
const VosReserver = () => {
  // const[datas, setDatas] = useState(null)
  // const {jwt}= userData()
  
  // useEffect(()=>{

  //    try{
    
  //       const res =  fetch(`${process.env.REACT_APP_API_URL}/calendars`, {
  //           method: "GET",
  //           headers: {
  //             'Content-type': 'application/json',
  //             Authorization:`Bearer ${jwt}`
  //           },
  //         })
  //         setDatas(res.datas.data)
  //       console.log(datas)
  //      } catch(err){
  //          console.log(err)
  //      }
  
  //    },[]);

  const { data } = useAlex(
    `/emprunts`
  );
const {username} = userData()

  return (

    <div >
      <h1 style={{textAlign:"center"}}>{username} voici votre liste des emprunts</h1>
      {data?.map((emprunt)=>(
                <div className="mz" style={{borderBottom:"1px solid #999"}} key={emprunt.id}>
                    <p >email : {emprunt?.attributes?.email}</p>
                    <p >adresse : {emprunt?.attributes?.title}</p>
                    <p >Nom du livre : {emprunt?.attributes?.desc}</p>
                    <p >date de debut de l'emprunt : {emprunt?.attributes?.debut}</p>
                    <p >date de fin de l'emprunt : {emprunt?.attributes?.fin}</p>
                    <p style={{backgroundColor:"rgb(44, 111, 212)" , color:"white", textAlign:"center"}}>{emprunt?.attributes?.confirmation}</p>
                    <p style={{backgroundColor:"#ee5d1f" , color:"white", textAlign:"center"}}>{emprunt?.attributes?.encours}</p>
                    <p style={{backgroundColor:"red" , color:"white", textAlign:"center"}}>{emprunt?.attributes?.annuler}</p>
                </div> 
            ))} 
            
    </div>
  )
 }

export default VosReserver