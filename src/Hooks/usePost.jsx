import React, { useEffect, useState } from "react";

const usePost = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://share-wave-server.up.railway.app/post")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);

        setLoading(false);
      });
  }, []);

  return [post, loading];
};

export default usePost;
