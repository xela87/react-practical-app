import React from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
    const [value, setValue] = React.useState('Hello')
    const [posts, setPosts] = React.useState([])
    const [filter, setFilter] = React.useState({sort: '', query: ''})
    const [modal, setModal] = React.useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        setPosts(await PostService.getAll());
    })
    React.useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <Counter/>
            <hr style={{margin: "15px 0"}}/>
            <ClassCounter/>
            <hr style={{margin: "15px 0"}}/>
            {/*Двусторонее связывание*/}
            <div style={{textAlign: "center"}}>
                <h1>{value}</h1>
                <MyInput type="text" value={value} onChange={event => setValue(event.target.value)}/>
            </div>
            <hr style={{margin: "15px 0"}}/>
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
                ? <div style={{display: "flex", justifyContent:"center"}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list"/>
            }
        </div>
    );
}

export default App;
