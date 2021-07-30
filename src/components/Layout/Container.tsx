import React from "react";
import styled from "@emotion/styled";
import { Layout } from "antd";

const { Header, Content, Footer, Sider } = Layout;

interface ContainerProps {
  children: React.ReactNode;
}

const SideBar = styled.div`
  overflow: auto;
  width: 300px;
  height: 95vh;
  right: 1.5vw;
  position: fixed;
  background: #E0C748;
  opacity: 50%;

  ${(props) => props.theme.mq.mobile}{
  display: none;
}`;

const Container = ({ children }: ContainerProps) => (
  <Layout
    style={{
      background: "#ffffff",
      borderRadius: "10px",
      margin: "2vh 1.5vw",
      height: "95vh",
      position: "fixed",
      width: "97vw",
      display: "flex",
      justifyContent: "center",
    }}>
    {/* <Layout
      style={{
        background: "#E0A848",
      }}>
      <Header
        style={{
          background: "#FCF051",
        }}
      />
      <Content
        style={{
          background: "#FCA851",
        }}>
        {children}
      </Content>
    </Layout>
    <Sider
      style={{
        overflow: "auto",
        width: "300px",
        height: "95vh",
        right: "1.5vw",
        position: "fixed",
        background: "#E0C748",
        opacity: "50%",
      }}>
      <div>My</div>
      <div>채팅기능</div>
      <div>일간 BEST</div>
      <div>주간 BEST</div>
    </Sider>
    <Footer
      style={{
        textAlign: "center",
        bottom: "20px",
        position: "fixed",
        height: "5vh",
        width: "calc(100%-20px)",
        background: "#E0A848",
      }}>
      Bee community ©2021 Created by Bees
    </Footer> */}
    <SideBar />
  </Layout>
);

export default Container;
