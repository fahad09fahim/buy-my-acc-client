import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "./../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const MediaCard = ({ post }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { text, image, _id } = post;
  const { register, handleSubmit, reset } = useForm();

  const [loveCount, setLoveCount] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/reaction/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        const id = data.result.id;
        const totalCount = data.result.sum;
        if (id === _id) {
          setLoveCount(totalCount);
          const loveCount = {count: totalCount, id:_id}
  
        //  save love reaction data into All post Database
          fetch(`http://localhost:5000/post`,{
            method:"PATCH",
            headers:{
              "content-type": "application/json"
            },
            body: JSON.stringify(loveCount)
          })
          .then(res=>res.json())
          .then(data=>console.log(data))

         
        }
      });
  }, [_id]);

  const handleLoveClick = () => {
    if (user) {
      const storeLoveCount = { count: 1, id: _id, email: user.email };
      fetch("http://localhost:5000/reaction", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(storeLoveCount),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.message) {
            setLoveCount(loveCount + 1);
            alert("you loved the post");
          } else {
            alert("already Loved This post");
          }
        });
    } else {
      navigate("/login");
    }
  };

  const onSubmit = (data) => {
    const comment = data.comment;
    const newData = { id: _id, comment: comment };
    fetch(`http://localhost:5000/comment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        alert('comments added in details page')
        console.log(data);
      });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} className=" p-2 rounded-lg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="text-center"> {text}</p>
        <div>
          <button
            className="text-red-500 flex gap-2 my-2 justify-end"
            onClick={handleLoveClick}
          >
            <FaHeart className="h-7 w-7" />
          </button>
          <span className="ml-2">{loveCount} Loves</span>
        </div>
        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              placeholder="Comment Here"
              {...register("comment", { required: true })}
              className="textarea textarea-bordered textarea-xs w-full max-w-xs"
              disabled={!user}
            ></textarea>
            {user ? (
              <input
                className="btn btn-xs btn-outline"
                type="submit"
                value="comment"
              />
            ) : (
              <Link className="btn btn-xs btn-outline" to="/login">
                comment
              </Link>
            )}
          </form>
          <Link to={`/details/${_id}`} className="btn btn-xs btn-outline my-2">
            details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
