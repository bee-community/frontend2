import styled from '@emotion/styled';

export const LogInWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.background.yellow};

  .search {
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 136px;
    font-size: 1rem;
  }
  .signup {
    font-size: ${props => props.theme.fontSize[20]};
    border-bottom: 2px solid #111;
    padding-bottom: 3px;
    font-weight: 500;
  }
`;

export const Title = styled.div`
  font-size: ${props => props.theme.fontSize[30]};
  margin: 35px 0 120px;

  #honey {
    font-weight: bold;
  }
  #bee {
    font-weight: 300;
  }
`;

export const LoginForm = styled.section`
  width: 40vw;
  min-width: 300px;
  max-width: 400px;

  input {
    box-sizing: border-box;
    width: 100%;
    font-size: 1rem;
    width: 100%;
    padding: 15px 10px 14px;
    border-radius: 5px;
    border: none;
    margin-bottom: 15px;
  }

  input:focus {
    outline: none;
  }

  button {
    font-size: 1rem;
    width: 100%;
    padding: 16px 10px 15px;
    margin-bottom: 15px;
    border: none;
    border-radius: 5px;
    background: black;
    color: white;
    cursor: pointer;
  }
`;
