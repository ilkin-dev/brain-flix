import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoUploadPage.css';
import uploadImage from '../../assets/images/Upload-video-preview.jpg';
import Divider from '../../components/Divider/Divider';
import Button from '../../components/Button/Button';
import icons from '../../config/icons';

const VideoUploadPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Video uploaded successfully!');
        navigate('/video');
    };

    return (
        <>
            <Divider />
            <div className="upload-page component section">
                <h1 className="upload-page__title headline page-header">Upload Video</h1>
                <Divider clsName='upload-page__dividerBelowTitle' />
                <form className="upload-page__form" onSubmit={handleSubmit}>
                    <div className='upload-page__thumbnailAndDetails'>
                        <div className='upload-page__thumbnailContainer'>
                            <label className="upload-page__label silver-text text-demi">VIDEO THUMBNAIL</label>
                            <div className="upload-page__thumbnail">
                                <img src={uploadImage} alt="Video Thumbnail" />
                            </div>
                        </div>
                        <div className="upload-page__details">
                            <div className="upload-page__input-group">
                                <label htmlFor="title" className="upload-page__label silver-text text-demi">TITLE YOUR VIDEO</label>
                                <input type="text" id="title" className="upload-page__input form-field  body-copy" placeholder="Add a title to your video" />
                            </div>
                            <div className="upload-page__input-group">
                                <label htmlFor="description" className="upload-page__label silver-text text-demi">ADD A VIDEO DESCRIPTION</label>
                                <textarea id="description" className="upload-page__textarea form-field  body-copy" placeholder="Add a description to your video"></textarea>
                            </div>
                        </div>
                    </div>
                    <Divider clsName='upload-page__dividerOverButtons' />
                    <div className="upload-page__buttons">
                        <Button type='button' className='button-2 upload-page__button--cancel' onClick={() => navigate('/video')} text='CANCEL' />
                        <Button type='submit' className='button-1 upload-page__button--publish' icon={icons.publish} text='PUBLISH' />
                    </div>
                </form>
            </div >
        </>
    );
};

export default VideoUploadPage;

