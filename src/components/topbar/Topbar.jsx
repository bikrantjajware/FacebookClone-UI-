import React from 'react'
import './Topbar.css';
import {Search,Chat,Notifications,Home,OndemandVideo,Group,Games,Storefront} from '@material-ui/icons';
import { connect } from 'react-redux';


const Topbar = ({user: {user}}) => {
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
                    {user && <img className="profileImg" src={user.picture} alt="profile" />}
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

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(Topbar);
