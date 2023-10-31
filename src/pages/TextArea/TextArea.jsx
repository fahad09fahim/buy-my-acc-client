const TextArea = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const image = e.target.image.value;
    console.log(text,image);
  };
  return (
    <div className="flex justify-center">
      <div className="  p-0 md:p-12 w-full md:w-1/2 border border-stone-800 rounded-xl">
        <form
          className="flex flex-col justify-center  items-center gap-2"
          onSubmit={handleForm}
        >
          <textarea
            placeholder="Share your thought..."
            name="text"
            className="textarea textarea-accent textarea-bordered textarea-lg w-full max-w-sm h-fit md:h-52"
          ></textarea>
          <input
            type="file"
            name="image"
            className="file-input file-input-bordered file-input-info file-input-xs w-full max-w-xs"
          />
          <input
            className="btn btn-info font-semibold"
            type="submit"
            value={"Post"}
          />
        </form>
      </div>
    </div>
  );
};

export default TextArea;
