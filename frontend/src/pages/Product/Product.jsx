import React, {  useState } from 'react'
import "./Product.scss"
import useFetch from '../../hooks/useFetch';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
// import Card from '../../components/Card/Card';

const Product =()=> {

 const id = useParams().id
 const [selectedImg, setSlectedImg] =useState("img")
 const [quantity, setQuantity] =useState(1)

 const dispatch = useDispatch()

 const { data, loading} = useFetch(`/products/${id}?populate=*`);


  return (
 <div className='product'>
    <div className="container">
     {loading? "loading": (<>

        <div className="left">
         <div className="images">
          <img src={ process.env.REACT_APP_UPLOAD_URL+ data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e=>setSlectedImg("img")}/>
         </div>
         <div className="mainImg">
          <img src={ process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
         </div>
       </div>
       <div className="right">
         <h1>{data?.attributes?.title} </h1>
         {/* <span className='price'>TND{data?.attributes?.price} </span> */}
         <p>{data?.attributes?.desc} </p>
         {/* <div className="quantity">
          Quantité :
           <button onClick={()=>setQuantity(prev=>prev===1 ? 1 : prev -1)}>-</button>
           {quantity}
           <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
         </div> */}
         <div  className="add">
          
        <Link to="/reserver " className='link'>
         <button onClick={()=>dispatch(addToCart({
           id:data.id,
           title:data.attributes.title,
           desc:data.attributes.desc,
          //  price:data.attributes.price,
           img:data.attributes.img.data.attributes.url,
           quantity
         }))}>
                   Reserver un livre
         </button>
        </Link>
         
       <Link to="/calendrier"  className='link'>

       <button  onClick={()=>dispatch(addToCart({
           id:data.id,
           title:data.attributes.title,
           desc:data.attributes.desc,
          //  price:data.attributes.price,
           img:data.attributes.img.data.attributes.url,
           quantity
         }))} >
             Emprunter un livre</button>

       </Link>
         </div>
         <div className="links">
            <div className="item">
                   Ajouter ce livre  dans vos favoris
            </div>
            <hr />
            <div className="item">
              contactez-nous
            </div>
         </div>
       
       
       

      </div>
      
      </>
   )}
  </div>


   


</div>
  )
}

export default Product
