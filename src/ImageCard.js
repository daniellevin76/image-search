const ImageCard = ({ imgData }) => {
  if (imgData[0] !== "0") {
    var imageSrcUrl = `https://farm${imgData[0]}.staticflickr.com/${imgData[1]}/${imgData[2]}_${imgData[3]}_m.jpg`;
  }

  // console.log(imgData);

  //return (imgData[0]==="0" ?  <img src={"https://via.placeholder.com/400"}/> : )

  // <img src={imageSrcUrl} alt="flickr_images" />;
  return (
    <div>
      <img
        src={
          imageSrcUrl !== "N/A"
            ? imageSrcUrl
            : "https://via.placeholder.com/400"
        }
        alt="flicker_images"
      />
    </div>
  );
};

export default ImageCard;
