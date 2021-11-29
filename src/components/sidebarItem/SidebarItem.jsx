import React from 'react'
import './SidebarItem.css';

const SidebarItem = ({ Component,name}) => {
    return (
        <>
            <li className="sidebarListItem">
                    <Component className="sidebarListIcon"/>
                    <span>{name}</span>
            </li>
        </>
    )
}

export default SidebarItem
