import { Col, Row } from "antd";
import InfoPorofile from "./InfoProfile";
import ListTeacher from "./ListTeacher";
import ButtonPublication from "./ButtonPublication";
import ProfilePublication from "./ProfilePublication";
import {
  useCollectionUserOne,
  useCollectionPostOne,
  useUser,
  useCollectionFile,
} from "../services/context/Context.provider";
import ListUser from "./ListUser";
import ButtonCourses from "./ButtonCourses";
import ProfileFile from "./ProfileFile";

const TapContentCourses = () => {
  const { collectionFile } = useCollectionFile();
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
          <ButtonCourses></ButtonCourses>
        )}
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between",gap:10}}>
        {collectionFile &&
          collectionFile.map((data, index) => (
            <ProfileFile
              key={index}
              title={data.file_description}
              url={data.file_image_url}
              date={data.file_date}
            />
          ))}
          </div>
      </Col>
    </Row>
  );
};

export default TapContentCourses;
