import React from "react";

const Message = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Send Message</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            harum necessitatibus, quisquam sunt accusantium adipisci nemo minus
            officia doloribus dolore!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="email"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <textarea
                placeholder=""
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Message;
