import { Col, Row } from "antd";
import InfoPorofile from "./InfoProfile";
import ListTeacher from "./ListTeacher";
import ButtonPublication from "./ButtonPublication";
import ProfilePublication from "./ProfilePublication";
import {
  useCollectionUserOne,
  useCollectionPostOne,
  useUser,
} from "../services/context/Context.provider";
import ListUser from "./ListUser";

const TapContentPost = () => {
  const { collectionPostOne } = useCollectionPostOne();
  const { collectionUserOne } = useCollectionUserOne();
  const { userLog } = useUser();

  return (
    <Row gutter={20}>
      <Col xs={24} md={12} lg={9} xl={12}>
        <InfoPorofile></InfoPorofile>
        <br />
        <ListUser></ListUser>
      </Col>
      <Col xs={24} md={12} lg={15} xl={12}>
        {userLog && userLog.role !== "student" && (
          <ButtonPublication></ButtonPublication>
        )}
        {collectionPostOne &&
          collectionPostOne.map((data, index) => (
            <ProfilePublication
              key={index}
              userMain={userLog && userLog.user}
              idPost={data.post_id}
              userPost={collectionUserOne && collectionUserOne[0].user_name}
              descriptionPost={data.post_description}
              urlPhoto={
                collectionUserOne && collectionUserOne[0].user_url_avatar
              }
              datePost={data.post_date}
              urlPost={data.post_image_url}
              comentario={data.comments}
              urlMain={userLog.url_avatar}
            ></ProfilePublication>
          ))}
      </Col>
    </Row>
  );
};

export default TapContentPost;
