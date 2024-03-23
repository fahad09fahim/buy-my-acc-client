import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePost from "../../Hooks/usePost";
import { AuthContext } from "../../Provider/AuthProvider";

const BuyNow = () => {
  const [post] = usePost();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [price,setPrice] = useState('')
  console.log(user);
  const findWithId = post.filter((p) => p._id === id);

  useEffect(()=>{
    if (findWithId.length > 0) {
        const price = findWithId[0].text;
        setPrice(price);
      }
  },[findWithId])

  return (
    <div className="flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <div className="card-actions justify-end">
            <button className="btn btn-square btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="text-center">Conformation Field</p>
          <div className="flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2">
              Name:
              <input type="text" className="grow font-semiboldm" Value={user?.displayName}  disabled/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email:
              <input
                type="text"
                className="grow font-semibold"
                value={user?.email}
                disabled
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Price
              <input
                type="text"
                className="grow font-semibold text-black"
                value={`${price} $`}
                disabled
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
