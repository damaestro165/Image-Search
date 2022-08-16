import React from "react";
import ImageCard from "./ImageCard";

function ImageList(props) {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <div className=" flex flex-col items-center justify-center md:grid md:grid-flow-row md:auto-row-[10px] md:gap-x-2 gap-y-2 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
      {images}
    </div>
  );
}

export default ImageList;
