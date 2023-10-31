import { useLoaderData } from "react-router-dom";
import MediaCard from "./MediaCard";


const Media = () => {
    const posts = useLoaderData()
  
    return (
        <div className="flex flex-col justify-center items-center gap-3 p-6">
        {
            posts.map(post=><MediaCard key={post._id}
            post={post}
            ></MediaCard>)
        }
        </div>
    );
};

export default Media;