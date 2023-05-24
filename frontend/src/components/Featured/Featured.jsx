
import React from "react";
import Card from "../Card/Card";
import "./Featured.scss";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Featured = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} </h1> <Link to="/products/1" className="link"><span>Tout savoir</span></Link>
       
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Featured;