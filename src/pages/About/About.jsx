import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const About = () => {
  const initialData = {
    name: "Md. Fahad Al Fahim",
    email: "mdfahadalfahim@gmail.com",
    university: "National University",
    address: "Bogura, Bangladesh",
  };
  const [data, setData] = useState(initialData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const modalRef = useRef(null);
  const onSubmit = (data) => {
    setData(data);
    reset();
    modalRef.current.close();
  };
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-center text-xl font-semibold">About</h1>
          <h1>
            <span>Name:</span> <span>{data.name}</span>
          </h1>
          <h1>
            <span>Email:</span> <span>{data.email}</span>
          </h1>
          <h1>
            <span>University:</span> <span>{data.university}</span>
          </h1>
          <h1>
            <span>Address:</span> <span>{data.address}</span>
          </h1>
        </div>
      </div>
      {/* modal */}

      <button
        className="btn absolute right-52"
        onClick={() => {document.getElementById("my_modal_3").showModal()
        modalRef.current.showModal();}
    }
      >
        Edit
      </button>
      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form method="dialog">
            <button onClick={()=>{
                modalRef.current.close();
            }} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* from data */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                required
                defaultValue={data.name}
                placeholder="name"
                className="input input-bordered"
                {...register("name")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                defaultValue={data.email}
                className="input input-bordered"
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">University Name:</span>
              </label>
              <input
                type="text"
                required
                defaultValue={data.university}
                placeholder="University Name"
                className="input input-bordered"
                {...register("university")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                required
                defaultValue={data.address}
                placeholder="Address"
                className="input input-bordered"
                {...register("address")}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn  btn-info">Update</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default About;
