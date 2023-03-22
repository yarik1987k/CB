import React, { useState } from 'react';

const MediaUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [media, setMedia] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    setUploading(true);

    // Replace "YOUR_API_ROUTE_HERE" with the actual route to your media API endpoint
    fetch('YOUR_API_ROUTE_HERE', {
      method: 'POST',
      body: file,
    })
      .then((response) => response.json())
      .then((data) => {
        setMedia(data);
        setUploading(false);
      })
      .catch((error) => {
        setError(error);
        setUploading(false);
      });
  };

  return (
    <div>
      {error && <div>{error.message}</div>}
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {media && <img src={media.url} alt={media.name} />}
    </div>
  );
};

export default MediaUploader;