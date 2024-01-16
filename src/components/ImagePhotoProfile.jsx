import React from "react";
import { Image } from "antd";
const ImagePhotoProfile = () => (
  <div  style={{
    borderRadius: "50%",
    position: "absolute",
    bottom: "-40px",
    left: "20px",
    border:"5px white solid"
  }}>
  <Image
    width={150}
    height={150}
    style={{
      borderRadius: "50%",
    }}
    src="https://img.freepik.com/foto-gratis/leon-melena-arcoiris-ojos-azules_1340-39421.jpg"
  />
  <span style={{position:"absolute", bottom:"45px", left:"160px",color:"white", width:"400px", fontSize:".9rem"}}>Reyes Frisancho Kevin Jean Pierre</span>
  </div>
);
export default ImagePhotoProfile;
