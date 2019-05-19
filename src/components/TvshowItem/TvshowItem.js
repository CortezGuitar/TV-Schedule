import React, { useState, Fragment } from 'react';

import './TvshowItem.css';

const TvshowItem = ({ title, premiered, image, season, episode }) => {
  const [imageOriginal, setImage] = useState(false);

  return (
    <div className="TvshowItem-container">
      {imageOriginal ? (
        <img
          className="TvshowItem-image__original"
          src={image.original}
          alt={title}
          onClick={() => setImage(!imageOriginal)}
        />
      ) : (
        <Fragment>
          <div className="TvshowItem-image-container">
            {image && (
              <img
                className="TvshowItem-image"
                src={image.medium}
                alt={title}
                onClick={() => setImage(!imageOriginal)}
              />
            )}
          </div>
          <div className="TvshowItem-info-container">
            <div>
              <h5>{title}</h5>
              <h6>{premiered.slice(0, 4)}</h6>
            </div>
            <div className="TvshowItem-info-season">
              <p>
                Season: {season} Episode: {episode}
              </p>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default TvshowItem;
