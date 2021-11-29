import React, { useEffect, useState } from 'react'
import './Share.css';
import {connect} from 'react-redux';
import {Videocam,Collections,InsertEmoticon,Cancel,AttachFile} from '@material-ui/icons';
import { getUser } from '../../actions/userActions';
import { addPost } from '../../actions/postActions';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';

const Share = ({user:{loading,user},getUser,addPost}) => {

    const [modalIsOpen,setModalIsOpen] = useState(false)
    const [caption,setCaption] = useState('')
    const [media,setMedia] = useState(null);
    
    useEffect( () => {
        getUser();
    },[getUser])


    const changeCaption = (e) => {
        setCaption(e.target.value);
    }

    const changeMedia = (e) => {
        setMedia(e.target.files[0]);
    }

    const onSubmit = (e) => {
       if(media === null && caption === '' )
        return console.log("Invalid Data");
    
        const post = {
            user: user,
            caption: caption,
            media: media && URL.createObjectURL(media),
            timestamp: new Date()
        }
        
         addPost(post); 
         setCaption('')
         setMedia(null); 
         setModalIsOpen(false);
    }



    const openModal = () => {
        setModalIsOpen(true);
        setCaption('')
        setMedia(null);
    }
    const closeModal = () => {
        setModalIsOpen(false);
        setCaption('')
        setMedia(null);
    }
    
    const modalStyles = {
        content: {
            width: '500px',
            height: 'match-content',
            top: '40%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    }
    

   
    if(loading || user === null)
        return <h3>loading...</h3>

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="profileImg" src={user.picture} alt="profile" />    
                    <input onClick={openModal} type="text" className="shareInput" placeholder="Whats on your mind?" />
                </div>
                <Modal 
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="modal"
                        style={modalStyles} >
                        <div className="modalTop">
                            <h3 className="modalTitle">Create Post</h3>
                            <span ><Cancel onClick={closeModal} /></span>
                        </div>
                        <hr />
                        <div>
                            <form >
                                <div className="userInfo">
                                    <img className="profileImg" src={user.picture} alt="profile" />    
                                    <span className="modalUsername">{user.name}</span>
                                </div>
                                <textarea onChange={changeCaption} placeholder={`What's on your mind, ${user.name}? `} className="postTextInput" ></textarea>
                                {media && <img src={URL.createObjectURL(media)} id="previewMedia" className="mediaPreview" alt="media-preview" />}
                                <label className="postFileInputLabel" htmlFor="file-input">Add to your post  <span className="fileIcone"><AttachFile/> </span></label>
                                
                                <input onChange={changeMedia} type="file" id="file-input" className="postFileInput"   />
                                <Button className="submitButton"  style={caption ==='' ? { fontWeight: 'bold' } : {backgroundColor:'blue',color:'white'} }onClick={onSubmit}>Post</Button>
                            </form>

                        </div>
                        

                </Modal>
                <hr className="shareHr" />
                <div className="sharebottom">
                        <div className="shareOptions">
                                <div className="shareOption">
                                    <Videocam className="shareOptionIcon" />
                                    <span className="shareOptionText">Live video</span>
                                </div>
                                <div className="shareOption">
                                    <Collections className="shareOptionIcon"/>
                                    <span className="shareOptionText">Photo/Video</span>
                                </div>
                                <div className="shareOption">
                                    <InsertEmoticon className="shareOptionIcon"/>
                                    <span className="shareOptionText">Feeling/Activity</span>
                                </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
Share.propTypes = {
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
    user: state.user,
})
export default connect(mapStateToProps,{getUser,addPost})(Share);
