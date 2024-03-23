// import React from 'react'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BlogSinglePage() {
  const [data, setData] = useState();
  const { id } = useParams();

  const fetchData = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    console.log(res?.data);
    setData(res?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);
  return (
    <div className="box-single-page">
      {/* <h3>{data?.id}</h3> */}
      <p>{data?.body}</p>
    </div>
  );
}

export default BlogSinglePage;
