import { useLoaderData } from "react-router-dom";
import MediaCard from "./MediaCard";
import usePost from "../../Hooks/usePost";


const Media = () => {
    const [post] = usePost()
  
    return (
        <div className="flex flex-col justify-center items-center gap-3 p-6">
        {
            post.map(post=><MediaCard key={post._id}
            post={post}
            ></MediaCard>)
        }
       
        </div>
    );
};

export default Media;