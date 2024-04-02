import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import usePost from "../../Hooks/usePost";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const BuyNow = () => {
  const [post] = usePost();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [price, setPrice] = useState(" ");

  const findWithId = post.filter((p) => p._id === id);

  useEffect(() => {
    if (findWithId.length > 0) {
      const price = findWithId[0].text;
      setPrice(price);
    }
  }, [findWithId]);

  // control from data
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center">
      <div className="card max-w-lg bg-base-100 shadow-xl ">
        <div className="card-body">
          <div className="card-actions justify-end">
            <Link to={`/details/${id}`}>
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
            </Link>
          </div>
          <p className="text-center">Conformation Field</p>
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="input input-bordered flex items-center gap-2">
              Name:
              <input
                {...register("name")}
                type="text"
                className="grow font-semibold"
                defaultValue={user?.displayName || " "}
                
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email:
              <input
                {...register("email")}
                type="text"
                className="grow font-semibold"
                defaultValue={user?.email || " "}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Price($):
              <input
                {...register("price")}
                type="text"
                className="grow font-semibold text-black"
                value={`${price}`}
                
                readOnly
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Quantity
              <input
                {...register("quantity")}
                type="number"
                className="grow font-semibold text-black"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Card Number
              <input
                {...register("card")}
                type="text"
                className="grow font-semibold text-black"
                placeholder="**************"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              CCV
              <input
                {...register("ccv")}
                type="text"
                className="grow font-semibold text-black"
                placeholder="xxx"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              M/Y
              <input
                {...register("date")}
                type="datetime"
                className="grow font-semibold text-black"
                placeholder="xx/xx"
              />
            </label>
            <input
              className="btn btn-success input input-bordered flex items-center gap-2 "
              type="submit"
              value={"confirm"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
