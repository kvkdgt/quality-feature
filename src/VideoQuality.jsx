import React, { useState } from 'react';

const VideoQualityDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('144p');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    // Here you can add logic to handle the selected option change
  };

  let imageUrl;
  switch (selectedOption) {
    case '144p':
      imageUrl = 'https://img.freepik.com/free-vector/yellow-crescent-geometric-shape-vector_53876-164618.jpg';
      break;
    case '360p':
      imageUrl = 'https://i.pinimg.com/736x/62/ce/9a/62ce9a5b0dd819c3c656c1fc7ae3a9f5.jpg';
      break;
    case '720p':
      imageUrl = 'https://static.vecteezy.com/system/resources/previews/011/735/525/non_2x/full-blue-moon-in-the-night-sky-vector.jpg';
      break;
    case '1920p':
      imageUrl = 'https://media.licdn.com/dms/image/D4D03AQGm2Oywf69NPg/profile-displayphoto-shrink_800_800/0/1683825569816?e=1718236800&v=beta&t=s3uRORaaoIZw0bA-kxLo3wi8r5NnvmgMKwkxgWlUPFs';
      break;
   
  }

  return (
    <div>
      <label htmlFor="videoQuality">Select Moon Quality:</label>
      <select id="videoQuality" value={selectedOption} onChange={handleSelectChange}>
        <option value="144p">144p</option>
        <option value="360p">360p</option>
        <option value="720p">720p</option>
        <option value="1920p">1920p</option>
      </select><br/> <br/> <br/>
      <img src={imageUrl} style={{height:'200px'}} alt="Video" />
    </div>
  );
};

export default VideoQualityDropdown;
