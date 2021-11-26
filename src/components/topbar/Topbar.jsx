import React from 'react'
import './Topbar.css';
import {Search,Chat,Notifications,Home,OndemandVideo,Group,Games,Storefront} from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <div className="logoContainer">
                    <span className="logo">fb</span>
                </div>
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input type="text" placeholder="search facebook" className="searchInput" />
                </div>
            </div>
            
            <div className="topbar-center">
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                            <Home />
                    </div>
                    <div className="topbarIconItem">
                            <OndemandVideo />
                            {/* <span className="topbarIconBadge">2</span> */}
                    </div>
                    <div className="topbarIconItem">
                            <Storefront />
                            {/* <span className="topbarIconBadge">2</span> */}
                    </div>
                    <div className="topbarIconItem">
                            <Group />
                            {/* <span className="topbarIconBadge">2</span> */}
                    </div>
                    <div className="topbarIconItem">
                            <Games />
                            {/* <span className="topbarIconBadge">2</span> */}
                    </div>

                </div>
            </div>
            <div className="topbar-right">
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                    <img className="profileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEOEHLo5T0laBB8JKDrMY2fpVYeYNHUnDMA&usqp=CAU" alt="profile" />
                            <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                            <Chat />
                            
                    </div>
                    <div className="topbarIconItem">
                            <Notifications />
                            <span className="topbarIconBadge">2</span>
                    </div>

                </div>
                
            </div>
            
        </div>
    )
}

export default Topbar
