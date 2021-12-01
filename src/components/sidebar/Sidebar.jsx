import React, { useEffect } from 'react'
import './Sidebar.css';
import { Group,PlayCircleFilledOutlined,Flag  } from '@material-ui/icons'
import {Groups,Storefront,History,ArrowDownwardRounded } from '@mui/icons-material';
import SidebarItem from '../sidebarItem/SidebarItem';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../../actions/userActions';

const Sidebar = ({user: {user,loading},getUser}) => {


    useEffect(()=> {
        getUser();
    } ,[getUser])
    
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                

                <ul className="sidebarList">
                
                
                    <li className="sidebarListItem">
                           { 
                                user &&  <>
                                                <img className="profileImg" src={user.picture} alt="profile" />    
                                                <span>{user.name}</span>
                                            </>
                            }
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

Sidebar.propTypes = {
    user: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    user: state.user

})
export default connect(mapStateToProps,{getUser})(Sidebar);
