import React from "react";
import { Image } from "antd";
import { useCollectionUserOne } from "../services/context/Context.provider";
const ImagePhotoProfile = () => {
  const {collectionUserOne} = useCollectionUserOne()
  console.log(collectionUserOne)
  
  return(
  <div className="custom-profile">
    <Image
      width={"100%"}
      height={"100%"}
      style={{
        borderRadius: "50%",
      }}
      src={collectionUserOne&&collectionUserOne[0].user_url_avatar}
    />
    <span className="custom-name">{collectionUserOne&&collectionUserOne[0].user_name}</span>
  </div>);
};
export default ImagePhotoProfile;
