import { useContext, useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from './../../Provider/AuthProvider';
import { Link } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
 
const MediaCard = ({ post }) => {
 const {user} = useContext(AuthContext)

    const {text, image,_id} = post;
    const { register, handleSubmit, reset } = useForm();
    const [isLoved, setIsLoved] = useState(false);
    const [loveCount, setLoveCount] = useState(0);

   
 
const handleLoveClick =()=>{

  if(!isLoved){
    
    setIsLoved(true);
    setLoveCount(1)
  }
else if(isLoved){
   setIsLoved(false)
  setLoveCount(0)
}
 

}
  
   

    const onSubmit = (data) =>{
     const comment = data.comment
       const newData =  {id:_id, comment: comment}
        fetch(`http://localhost:5000/comment`,
      {
          method:"POST",
          headers:{
              "content-type": "application/json"
          },
          body:JSON.stringify(newData)
      }
          )
          .then(res=>res.json())
          .then(data=>{
            reset()
            console.log(data)})
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image}  className=" p-2 rounded-lg" alt="Shoes" /></figure>
  <div className="card-body">
   
    <p className="text-center"> {text}</p>
    <div>
    <button
className={`${isLoved ? 'text-red-500' : 'text-black'} flex gap-2 my-2 justify-end`}
onClick={handleLoveClick}
>
{isLoved ? <FaHeart className="h-7 w-7"/> : <FaRegHeart className="h-7 w-7"/>}
</button>
      <span className="ml-2">{loveCount} Loves</span>
    </div>
    <div className="flex flex-col justify-center">
    <form onSubmit={handleSubmit(onSubmit)}>
    <textarea placeholder="Comment Here"  {...register("comment",{ required: true })} className="textarea textarea-bordered textarea-xs w-full max-w-xs" disabled={!user} ></textarea>
    {user? <input className="btn btn-xs btn-outline" type="submit" value="comment" />: <Link className="btn btn-xs btn-outline" to="/login">comment</Link>}
    </form>
   <button>details</button>
    </div>
  </div>
</div>
  );
};

export default MediaCard;
