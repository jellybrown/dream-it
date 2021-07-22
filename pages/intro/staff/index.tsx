import React from "react";
import Layout, { CommonWrapper } from "../../../components/Layout/Layout";
import { ImageArea, Name, Row, Text } from "./index.style";

const Staff = () => {
  return (
    <Layout title="운영진 소개">
      <CommonWrapper>
        <Row>
          <ImageArea>
            <img src="http://via.placeholder.com/300" />
            <Name>김멍멍</Name>
          </ImageArea>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            possimus sit fugit iusto quibusdam quas optio sapiente sequi dolore
            animi. Dignissimos beatae dolores iure id incidunt culpa mollitia
            voluptates dolorum?
          </Text>
        </Row>
        <Row>
          <ImageArea>
            <img src="http://via.placeholder.com/300" />
            <Name>김멍멍</Name>
          </ImageArea>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            possimus sit fugit iusto quibusdam quas optio sapiente sequi dolore
            animi. Dignissimos beatae dolores iure id incidunt culpa mollitia
            voluptates dolorum?
          </Text>
        </Row>
        <Row>
          <ImageArea>
            <img src="http://via.placeholder.com/300" />
            <Name>김멍멍</Name>
          </ImageArea>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            possimus sit fugit iusto quibusdam quas optio sapiente sequi dolore
            animi. Dignissimos beatae dolores iure id incidunt culpa mollitia
            voluptates dolorum?
          </Text>
        </Row>
      </CommonWrapper>
    </Layout>
  );
};

export default Staff;
