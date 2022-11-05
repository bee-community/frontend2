import axios from 'axios';
import Aside from 'components/Aside';
import Header from 'components/organisms/Header';
import { useAuthState } from 'context/Auth';
import API from 'mainAPI';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';

import { StyledTemplate, StyledMain, Main, StyledAside } from './styles';

function Template() {
  const auth = useAuthState();
  API.get('/users/self', {
    headers: {
      Authorization: `${auth.tokenType} ${auth.accessToken}`,
    },
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {});

  return (
    <StyledTemplate>
      <Header />
      <StyledMain>
        <Main>
          <Outlet />
        </Main>
        <StyledAside>
          <Aside />
        </StyledAside>
      </StyledMain>
    </StyledTemplate>
  );
}

export default Template;
