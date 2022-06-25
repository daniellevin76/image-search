import React, { useState, useEffect } from "react";

import ImageCard from "./ImageCard";
import SearchIcon from "./search.svg";
import "./App.css";

const App = () => {
  const [searchWord, setSearchWord] = useState("");

  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetchImages("react");
  }, []);

  //Fetch data from flickr API
  async function fetchImages(searchWord) {
    const API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a25b5f01b15dc2552c280088adf76089&text=${searchWord}&format=json&nojsoncallback=1`;

    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    //From data retrieve photo and limit to 50 entries
    var photos = data.photos.photo.slice(0, 50);

    var imageData = [];

    // farm, server, id, and secret are needed to create image src url
    photos.forEach((photo) =>
      imageData.push([photo.farm, photo.server, photo.id, photo.secret])
    );
    setImageData(imageData);
  }

  return (
    <div className="app">
      <h1>iMAGE SEAяCH</h1>
      <div className="search">
        <input
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="Search for images"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => fetchImages(searchWord)}
        />
      </div>

      {imageData?.length > 0 ? (
        <div className="container">
          {imageData.map((imgData) => (
            <ImageCard imgData={imgData} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No images found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
