import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';


// image hosting api
const image_hosting_api = import.meta.env.VITE_ImageBB;
const TextArea = () => {
 const {user} = useContext(AuthContext)
 const [disable, setDisable ] = useState(true);
  useEffect(()=>{
    if(user){
      setDisable(false);
    }
    else{
      setDisable(true);
    }
  },[user])

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
              alert("post has been published")
            }
          })

        }
       }) 
 
  }
  return (
    <div className="flex justify-center mx-3">
      <div className="  p-0 md:p-12 w-full md:w-1/2 border border-stone-800 rounded-xl">
        <form
          className="flex flex-col justify-center p-2  items-center gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Price $"
            {...register("text",{ required: true })}
            className="file-input file-input-bordered text-center file-input-info file-input-xs w-full max-w-xs"
          disabled={disable}
          type='number'
          ></input>
          <input
            type="file"
            {...register("image",{ required: true })}
            className="file-input file-input-bordered file-input-info file-input-xs w-full max-w-xs"
            disabled={disable}
          />
          {
            user? <input
            className="btn btn-info font-semibold"
            type="submit"
            value={"Post"}
          />: <Link className='btn btn-sm btn-error  font-semibold' to="login">Log in First</Link> 
          }
        </form>
      </div>
    </div>
  );
};

export default TextArea;
