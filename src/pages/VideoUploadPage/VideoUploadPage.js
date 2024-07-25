import React from 'react';

const VideoUploadPage = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Video uploaded successfully!');
    };

    return (
        <div>
            <h1>Upload Video</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default VideoUploadPage;
