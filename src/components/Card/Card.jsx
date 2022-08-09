import React, { useState, useRef, useEffect, useCallback } from "react";
import "./style.scss";

import CardSkeleton from "./CardSkeleton";

const Card = ({ id, url, width, height }) => {
  console.log("Image height", height);
  console.log("image width", width);
  const [loaded, setLoaded] = useState(false);

  const imageRef = useRef();

  const handleImageLoaded = useCallback(() => {
    if (!loaded) {
      console.log("Image loaded");
      setLoaded(true);
    }
  }, [loaded]);

  useEffect(() => {
    if (imageRef.current && imageRef.complete) {
      handleImageLoaded();
    }
  }, [imageRef, handleImageLoaded]);

  return (
    <div className="card">
      <div className="card-image">
        {!loaded && <CardSkeleton />}
        <img
          ref={imageRef}
          src={url}
          alt={`cats-${id}`}
          width={width}
          height={height}
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Card;
