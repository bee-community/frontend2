import React from "react";
import Button from "components/Button";
import Feed from "components/Feed";
import Container from "components/Layout/Container";

import { Header, MenuBar, Title } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header>
        <MenuBar />
        <Title />
        <Button />
      </Header>
      <Feed />
    </Container>
  );
};

export default Home;
