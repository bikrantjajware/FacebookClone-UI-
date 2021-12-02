import React from 'react'
import './Home.css';
import Topbar from '../components/topbar/Topbar';
import Sidebar from '../components/sidebar/Sidebar';
import Feed from '../components/feed/Feed';
import Rightbar from '../components/rightbar/Rightbar';
import ChatWindow from '../components/chatwindow/ChatWindow';

const Home = () => {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />

            </div>
            <ChatWindow />
            
        </>
    )
}

export default Home
