import React, {useEffect, useState} from 'react';
import Counter from "../components/Counter";
import ClassCounter from "../components/ClassCounter";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../components/utils/pages";
import '../styles/App.css'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit,page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })
    useEffect(() => {
        fetchPosts(limit,page)
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit,page)
    }
    return (
        <div className="App">
            <MyButton onClick={() => {
                setModal(true)
            }}>
                Create Post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError &&
            <h1>Error</h1>
            }
            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list"/>
            }
            <Pagination page={page} totalPages={totalPages} changePage={changePage}/>
        </div>
    );
};

export default Posts;
