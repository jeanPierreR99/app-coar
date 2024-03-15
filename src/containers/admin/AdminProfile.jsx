import React, { useEffect, useRef, useState } from "react";
import ImageProfile from "../../components/ImageProfile";
import ImagePhotoProfile from "../../components/ImagePhotoProfile";
import MenuProfile from "../../components/MenuProfile";
import { Col, Row } from "antd";
import {
  useCollectionFile,
  useCollectionPostOne,
  useCollectionUserOne,
} from "../../services/context/Context.provider";
import {
  getCollectionFile,
  getCollectionPost,
  getCollectionUserOne,
} from "../../services/firebase/Functions";
import { useLocation } from "react-router-dom";

const AdminProfile = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userId = params.get("id");
  const [load, setLoad] = useState(true);

  const { collectionUserOne, setCollectionUserOne } = useCollectionUserOne();
  const { collectionPostOne, setCollectionPostOne } = useCollectionPostOne();
  const { collectionFile, setCollectionFile } = useCollectionFile();

  const loading = () => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false);
    }, 500);
  };
  const getPost = async () => {
    await getCollectionPost(setCollectionPostOne, userId);
  };
  const getFile = async () => {
    await getCollectionFile(setCollectionFile, userId);
  };
  const getProfile = async () => {
    await getCollectionUserOne(userId, setCollectionUserOne);
  };
  useEffect(() => {
    loading();
    getPost();
    getFile()
    getProfile();
  }, [userId]);

  return load ? (
    <h1>loading</h1>
  ) : (
    <Row style={{ background: "rgb(245,245,245)" }}>
      <Col xs={24} className="custom-image">
        <ImageProfile></ImageProfile>
        <ImagePhotoProfile></ImagePhotoProfile>
      </Col>
      <Col xl={24}>
        <MenuProfile></MenuProfile>
      </Col>{" "}
    </Row>
  );
};
export default AdminProfile;
