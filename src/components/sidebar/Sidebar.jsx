import React from 'react'
import './Sidebar.css';
import { Group,PlayCircleFilledOutlined,Flag  } from '@material-ui/icons'
import {Groups,Storefront,History,ArrowDownwardRounded } from '@mui/icons-material';
import SidebarItem from '../sidebarItem/SidebarItem';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                

                <ul className="sidebarList">
                
                
                    <li className="sidebarListItem">
                            <img className="profileImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEOEHLo5T0laBB8JKDrMY2fpVYeYNHUnDMA&usqp=CAU" alt="profile" />    
                            <span>User Name</span>
                    </li>
                    
                    <SidebarItem Component={Group} name={"Friends"} />
                    <SidebarItem Component={Groups} name={"Groups"} />
                    <SidebarItem Component={Storefront} name={"Marketplace"} />
                    <SidebarItem Component={PlayCircleFilledOutlined} name={"Watch"} />
                    <SidebarItem Component={History} name={"Memories"} />
                    <SidebarItem Component={Flag} name={"Pages"} />
                    <SidebarItem Component={ArrowDownwardRounded} name={"See More"} />
                </ul>
                <hr className="sidebarHr" />
            </div>
        </div>
    )
}

export default Sidebar
