import React from "react";
import GalleryHead from "../components/GalleryHead";
import CircularGallery from "../components/CircularGallery ";

const Gallery = () => {
  return (
    <div>
      <GalleryHead />
      <div style={{ height: "600px", position: "relative" }} >
        <CircularGallery 
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </div>
  );
};

export default Gallery;
