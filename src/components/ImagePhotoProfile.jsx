import React from "react";
import { Image } from "antd";
const ImagePhotoProfile = () => (
  <div  className="custom-profile">
  <Image
  width={"100%"}
  height={"100%"}
    style={{
      borderRadius: "50%",
    }}
    src="https://i.pinimg.com/236x/6d/5e/38/6d5e38d19bf4c0c9554b1e6beab75952.jpg"
  />
  <span className="custom-name">Anggie Castillo</span>
  </div>
);
export default ImagePhotoProfile;
