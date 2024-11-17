import {PostList} from '../store/post-list-store.jsx'
import {useContext, useRef} from "react";
import {useNavigate} from "react-router-dom";


function CreatePost() {
    const navigate=useNavigate()
    const inputRef = useRef();
    const postContext=useContext(PostList)
    const addPost= postContext.addPost;
    const deletePost= postContext.deletePost;

    function handleFormSubmit(e) {
        e.preventDefault();
        const message = e.target[0].value
        const newPost={
            id: message.length,
            msg:message
        }
        addPost(newPost)
        inputRef.current.value=''
        navigate('/')
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input ref={inputRef} type="textarea" name="message" id="messagee"/>
                <button>Send</button>
            </form>
        </>
    )
}

export default CreatePost;