import {PostList} from '../store/post-list-store.jsx'
import {useContext} from "react";
function Home() {
    const {postList}=useContext(PostList);
    const {deletePost}=useContext(PostList);

    return (
        <>
            <h3>Messages are:</h3>
            <ul>
                {postList.map((post, index) =>{
                    return (
                        <li key={post.id}>{post.msg}
                            <button onClick={()=>{
                                deletePost(post.id)
                            }}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Home;