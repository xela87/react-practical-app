import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id);
        setComments(response.data);
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h1>Post page with ID {params.id}</h1>
            {
                isLoading
                    ? <Loader/>
                    : <div>{post.id}. {post.title}</div>
            }
            <h2>Comments</h2>
            {
                isComLoading
                    ? <Loader/>
                    : <div>{comments.map(comment =>
                        <div key={comment.id} style={{marginTop: '15px'}}>
                            <h3>{comment.email}</h3>
                            <p>{comment.body}</p>
                        </div>
                    )}</div>
            }
        </div>
    );
};

export default PostIdPage;
