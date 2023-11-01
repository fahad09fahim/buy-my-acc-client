import { Link, useParams } from "react-router-dom";
import usePost from "../../Hooks/usePost";
import { useEffect, useState } from "react";

const Details = () => {
  const [post] = usePost();
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  console.log(comments);
  const searchId = post.filter((p) => p._id === id);

  useEffect(() => {
    fetch(`https://share-wave-server.vercel.app/comment/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          return setComments(data);
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
              <h2 className="card-title">{data.text}</h2>
              <span>All Comments:</span>
              {comments.map((comment) => (
                <h3 className="border border-stone-950 p-2" key={comment._id}>
                  {comment.comment}
                </h3>
              ))}

              <div className="card-actions justify-center">
                <Link  to="/media" className="btn btn-info btn-sm">Media</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;






