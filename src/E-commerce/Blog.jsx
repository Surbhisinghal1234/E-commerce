import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Blog() {
  const [data, setData] = useState();
  // const { id } = useParams();

  const fetchData = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);

  return (
    <>
      <div className="blog">
        {data?.map((item, index) => {
          return (
            <>
              <div className="blog-single">
                <Link to={`/blogsinglepage/${item.id}`}>
                  <h3>{item.id}</h3>
                  <p>{item.title}</p>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Blog;
