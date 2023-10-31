import { useForm } from 'react-hook-form';


// image hosting api
const image_hosting_api = import.meta.env.VITE_ImageBB;
const TextArea = () => {
  const { register, handleSubmit, reset } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`
  const onSubmit = (data) =>{
       const formData = new FormData()
       formData.append('image',data.image[0]) 
       fetch(image_hosting_url,{
        method: 'POST',
        body: formData
       })
       .then(res=>res.json())
       .then(imageUploaded=>{
        if(imageUploaded.success){
          const imgURL = imageUploaded.data.display_url;
          const {text} = data;
          const postData= {text,image:imgURL}
          console.log(postData)
          // send data to database
          fetch("http://localhost:5000/post",{
            method: "POST",
            headers:{
              "content-type": "application/json"
            },
            body: JSON.stringify(postData)
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.insertedId){
              reset()
              alert("post has published")
            }
          })

        }
       }) 
 
  }
  return (
    <div className="flex justify-center">
      <div className="  p-0 md:p-12 w-full md:w-1/2 border border-stone-800 rounded-xl">
        <form
          className="flex flex-col justify-center  items-center gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <textarea
            placeholder="Share your thought..."
            {...register("text",{ required: true })}
            className="textarea textarea-accent textarea-bordered textarea-lg w-full max-w-sm h-fit md:h-52"
          ></textarea>
          <input
            type="file"
            {...register("image",{ required: true })}
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