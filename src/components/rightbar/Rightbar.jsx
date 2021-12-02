import React, { useEffect } from 'react'
import './Rightbar.css';
import FriendItem from '../friendItem/FriendItem';
import { getUsers } from '../../actions/usersAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Rightbar = ({getUsers,users: {users,loading}}) => {

    useEffect( () =>{
        getUsers();
    },[getUsers]);
    
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                
                

                <ul style={{listStyle: 'none'}}  className="rightbarList">
                <div className="rightbarTitle">
                    <img className="birthdayImg" src="assets/gift.png" alt="gift" />
                     <strong className="rightbarTitle"> Birthday's</strong>
                </div>
                <li className="rightbarFriend">
                    <span className="birthdayText" > <strong>Tom Cruise</strong>'s birthday is today.</span>
                </li>


                
                <span className="contact-heading">Contacts</span>
                <hr className="rightbarHr" />
                {console.log('ulen=',users.length)}
                {
                    (loading || users.length > 0 ) ?  users.map( user => <li key={user.id} className=""> 
                                                      <FriendItem id={user.id} username={user.name} profilePicture={user.picture} /> 
                                                      </li> )
                                                    :
                                                    <h3>Loading..</h3>
                }
                </ul>
            </div>
        </div>
    )
}

Rightbar.propTypes = {
    users: PropTypes.object.isRequired,
}

const stateToProps = (state) => ({
    users: state.users
})

export default connect(stateToProps,{getUsers})(Rightbar);
