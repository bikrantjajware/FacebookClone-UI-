import React from 'react'
import './Sidebar.css';
import { Group,PlayCircleFilledOutlined,Flag  } from '@material-ui/icons'
import {Groups,Storefront,History,ArrowCircleDown} from '@mui/icons-material';



const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                

                <ul className="sidebarList">
                    <li className="sidebarListItem">
                            <img className="profileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEOEHLo5T0laBB8JKDrMY2fpVYeYNHUnDMA&usqp=CAU" alt="profile" />    
                            <span>User Name</span>
                    </li>
                    <li className="sidebarListItem">
                            <Group className="sidebarListIcon"/>
                            <span>friends</span>
                    </li>
                    <li className="sidebarListItem">
                            <Groups className="sidebarListIcon"/>
                            <span>groups</span>
                    </li>
                    <li className="sidebarListItem">
                            <Storefront className="sidebarListIcon"/>
                            <span>Marketplace</span>
                    </li>
                    <li className="sidebarListItem">
                            <PlayCircleFilledOutlined className="sidebarListIcon"/>
                            <span>Watch</span>
                    </li>
                    <li className="sidebarListItem">
                            <History className="sidebarListIcon"/>
                            <span>Watch</span>
                    </li>
                    <li className="sidebarListItem">
                            <PlayCircleFilledOutlined className="sidebarListIcon"/>
                            <span>Watch</span>
                    </li>
                    <li className="sidebarListItem">
                            <Flag className="sidebarListIcon"/>
                            <span>Flag</span>
                    </li>
                    <li className="sidebarListItem">
                            <ArrowCircleDown className="ArrowCircleDownIcon"/>
                            <span>See More</span>
                    </li>
                    <li className="sidebarListItem">
                            <PlayCircleFilledOutlined className="sidebarListIcon"/>
                            <span>Watch</span>
                    </li>
                    <li className="sidebarListItem">
                            <Flag className="sidebarListIcon"/>
                            <span>Flag</span>
                    </li>
                    <li className="sidebarListItem">
                            <ArrowCircleDown className="ArrowCircleDownIcon"/>
                            <span>See More</span>
                    </li>
                    <li className="sidebarListItem">
                            <PlayCircleFilledOutlined className="sidebarListIcon"/>
                            <span>Watch</span>
                    </li>
                    <li className="sidebarListItem">
                            <Flag className="sidebarListIcon"/>
                            <span>Flag</span>
                    </li>
                    <li className="sidebarListItem">
                            <ArrowCircleDown className="ArrowCircleDownIcon"/>
                            <span>See More</span>
                    </li>
                    <li className="sidebarListItem">
                            <PlayCircleFilledOutlined className="sidebarListIcon"/>
                            <span>Watch</span>
                    </li>
                    <li className="sidebarListItem">
                            <Flag className="sidebarListIcon"/>
                            <span>Flag</span>
                    </li>
                    <li className="sidebarListItem">
                            <ArrowCircleDown className="ArrowCircleDownIcon"/>
                            <span>See More</span>
                    </li>
                </ul>
                <hr className="sidebarHr" />
            </div>
        </div>
    )
}

export default Sidebar
