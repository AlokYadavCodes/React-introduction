import {createContext, useReducer, useState} from "react";

export const PostList=createContext({
    postList: [],
    addPost: ()=>{},
    deletePost: ()=>{}
});

const tempList=[
    {
        id: 1,
        msg: "first message"
    },
    {
        id: 2,
        msg: "second message"
    }
    ]

function PostListReducer(currentPostList, action){
    let newPostList=currentPostList;
    if (action.type==='addPost'){
        newPostList=[...newPostList,action.payload.post];
    } else if (action.type==='deletePost'){
        newPostList=newPostList.filter(item=>item.id !== action.payload.postId);
    }

    return newPostList;
}

function PostListProvider({children}){
    const [postList, dispatchPostList] = useReducer(PostListReducer, tempList);

    function addPost(post){
        const action = {
            type: 'addPost',
            payload: {post:post},
        }
        dispatchPostList(action)
    }

    function deletePost(id){
        const action = {
            type: 'deletePost',
            payload: {postId:id},
        }
        dispatchPostList(action)

    }


    return (<PostList.Provider value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
    }}
    >{children}
    </PostList.Provider>)

}

export default PostListProvider;
