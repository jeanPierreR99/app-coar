import React, { useEffect, useRef, useState } from "react";
import AdminProfile from "./admin/AdminProfile";
import ListUser from "../components/ListUser";
import {
  useCollectionPostLimit,
  useUser,
} from "../services/context/Context.provider";
import ProfilePublication from "../components/ProfilePublication";
import { Col, Row } from "antd";
import { getDataOnScroll } from "../services/firebase/Functions";

const StudentNotice = () => {
  const { collectionPostLimit, setCollectionPostLimit } =
    useCollectionPostLimit();
  const { userLog } = useUser();
  const [loading, setLoading] = useState(true);

  const handleScroll = async () => {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollTop;
    const totalDocumentHeight = document.documentElement.offsetHeight - 200;

    if (windowHeight + scrollHeight >= totalDocumentHeight) {
      setLoading(false);
      await getDataOnScroll(collectionPostLimit, setCollectionPostLimit, 3);
      return;
    }

    setLoading(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <Row gutter={10} style={{ background: "rgb(245,245,245)" }}>
      <Col md={12}>
        <ListUser></ListUser>
      </Col>
      <Col md={12}>
        {collectionPostLimit &&
          collectionPostLimit.map((data, index) => (
            <ProfilePublication
              key={index}
              userMain={userLog && userLog.user}
              idPost={data.post_id}
              userPost={data.user_id}
              descriptionPost={data.post_description}
              urlPhoto={"222222222222"}
              datePost={data.post_date}
              urlPost={data.post_image_url}
              comentario={data.comments}
              urlMain={userLog.url_avatar}
            ></ProfilePublication>
          ))}
      </Col>
      {!loading && <h1>pedir</h1>}
    </Row>
  );
};
export default StudentNotice;
