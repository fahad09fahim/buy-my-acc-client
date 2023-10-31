
import { useState } from "react";
import { useForm } from "react-hook-form";
import {FaHeart, FaRegHeart } from "react-icons/fa";

const MediaCard = ({ post }) => {
    const {text, image,_id,totalLove} = post;
    const { register, handleSubmit, reset } = useForm();
    const [isLoved, setIsLoved] = useState(false);
    const [loveCount, setLoveCount] = useState(0);
    const onSubmit = (data) =>{
    
        console.log(data)
    }
    // handle love count changes with api calls //
    const toggleLove = () => {
        const newLoveCount = isLoved ? loveCount - 1 : loveCount + 1;
            setLoveCount(newLoveCount);
            setIsLoved((prev) => !prev);
      
      fetch(`http://localhost:5000/post/${_id}`,
      {
          method:"PATCH",
          headers:{
              "content-type": "application/json"
          },
          body:JSON.stringify({loveCount: newLoveCount })
      }
          )
          .then(res=>res.json())
          .then(data=>{console.log(data)})
    };




  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image}  className=" p-2 rounded-lg" alt="Shoes" /></figure>
  <div className="card-body">
   
    <p className="text-center"> {text}</p>
    <div className="flex flex-col justify-center">
    
   
   {
totalLove? <button className="text-red-500 flex gap-2 my-2 justify-end"><FaHeart className="h-7 w-7"/> {totalLove}</button> :
<button
className={`${isLoved ? 'text-red-500' : 'text-black'} flex gap-2 my-2 justify-end`}
onClick={toggleLove}
>
{isLoved ? <FaHeart className="h-7 w-7"/> : <FaRegHeart className="h-7 w-7"/>}
{loveCount}
</button>
   }
    <form onSubmit={handleSubmit(onSubmit)}>
    <textarea placeholder="Comment Here"  {...register("comment",{ required: true })} className="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
    <input className="btn btn-xs btn-outline" type="submit" value="comment" />
    </form>
   <button>details</button>
    </div>
  </div>
</div>
  );
};

export default MediaCard;
