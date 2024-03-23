import { Link, useParams } from "react-router-dom";
import usePost from "../../Hooks/usePost";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
  const [post] = usePost();
  const { id } = useParams();
  const [comments, setComments] = useState([]);
 

 
  const searchId = post.filter((p) => p._id === id);


  useEffect(() => {
    fetch(`http://localhost:5000/comment/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          return setComments(data)
         
          ;
        } else {
          alert("go back to comment on the post");
        }
      });
  }, []);

  //   console.log(searchId)

  return (
    <div className="flex justify-center">
      {searchId.map((data) => (
        <div key={data._id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={data.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Price: {data.text}$</h2>

            {user?  <Link  to={`/buyNow/${id}`} className="btn btn-primary btn-outline btn-sm">
            Buy Now
          </Link> : <Link className="btn btn-primary btn-outline btn-sm" to={'/login'}>Buy Now</Link> }
            
              <span>All Comments:</span>
              {
                comments.length === 0 ? <span>No Comments about the item.</span> : <> {comments.map((comment) => 
                  (
                    <h3 className="border border-stone-950 p-2" key={comment._id}>
                  
                      { comment.comment}
                    </h3>
                  ))}</>
              }
             

              <div className="card-actions justify-center">
                <Link  to="/media" className="btn btn-info btn-sm">Back</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;






