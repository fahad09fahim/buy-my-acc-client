import React from "react";
import usePost from "../../../Hooks/usePost";
import { FaHeart } from "react-icons/fa";

const PopularPost = () => {
  const [post] = usePost();
  post.sort((a, b) => b.count - a.count);
  const popularPost = post.slice(0, 3);
  
  

  return (

    <>
      <h1 className="text-xl text-center">Top Posts</h1>
    <div className="flex flex-col md:flex-row justify-center items-center pt-5 gap-5">
        
        {popularPost.map((post) => (
          <div key={post._id} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
          <figure>
          <img src={post.image} className=" p-2 rounded-lg" alt="Shoes" />
        </figure>
        <h2>Price: {post.text}$</h2>
        <span className="flex items-center gap-3"><FaHeart className="text-red-700 h-7 w-7"/> {post.count}</span>
          </div>
          </div>
        ))}
      </div></>
  );
};

export default PopularPost;















