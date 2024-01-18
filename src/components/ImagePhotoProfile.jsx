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
    src="https://img.freepik.com/foto-gratis/leon-melena-arcoiris-ojos-azules_1340-39421.jpg"
  />
  <span className="custom-name">Reyes Frisancho Kevin Jean Pierre</span>
  </div>
);
export default ImagePhotoProfile;
