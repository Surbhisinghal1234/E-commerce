import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleProduct() {
  const [data, setData] = useState();
  const { id } = useParams();

  const fetchData = async () => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(res?.data);
    setData(res?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  
  return <div>{data?.id}</div>; 

  //   <div>SingleProduct</div>;
}

export default SingleProduct;

