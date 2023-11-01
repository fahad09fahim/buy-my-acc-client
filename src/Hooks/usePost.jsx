import React, { useEffect, useState } from 'react';

const usePost = () => {
    const [post, setPost]=useState([])
    const [loading,setLoading]= useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/post')
        .then(res=>res.json())
        .then(data=>{
            setPost(data)
            setLoading(false)
        })
    },[])


    return [post, loading]
};

export default usePost;