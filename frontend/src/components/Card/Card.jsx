import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  // console.log(item);

  
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="card_container">
         <div  className="top"> 
           <i className="fas fa-heart"/>
           {/* <p>MitBook</p> */}
          </div>
         <div className="image">
        
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
        
        </div>
        <h2>{item?.attributes.title}</h2>
        <h4>{item?.attributes.desc.substring(0, 50)}...</h4>
        {/* <h3>TND{item?.attributes.price}</h3> */}
       
        </div>
      </div>
    </Link>
  );
};

export default Card;