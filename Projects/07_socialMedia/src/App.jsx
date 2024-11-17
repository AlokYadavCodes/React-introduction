import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import './App.css'
import CreatePost from "./components/CreatePost.jsx";
import Home from "./components/Home.jsx";
import PostListProvider from "./store/post-list-store.jsx";
import {Outlet} from "react-router-dom";


function App(){
    const [selectedTab, setSelectedTab] = useState("Home")

    function handleTabClick(tab){
        setSelectedTab(tab)
    }

    return (
        <PostListProvider>
        <div className='app-container'>
            <Sidebar
                selectedTab={selectedTab}
                onTabClick={handleTabClick}
            />
            <div className='content'>
                <Header/>
                <Outlet/>
                {/*{selectedTab==="Home" &&*/}
                {/*    <Home/>*/}
                {/*}*/}
                {/*{selectedTab==="Create Post" &&*/}
                {/*    <CreatePost/>*/}
                {/*}*/}
                <Footer/>
            </div>
        </div>
        </PostListProvider>
    )
}

export default App;