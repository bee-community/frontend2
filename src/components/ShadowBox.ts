import styled from '@emotion/styled';

export const MobileShadowBox = styled.form`
  padding: 25px 25px 20px 25px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  .inputWrapper {
    display: flex;
    font-size: 1rem;
    height: 1.5rem;
    width: 100%;
    min-width: 90px;
    padding: 0px 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    overflow-x: scroll;
  }
  .inputWrapper::-webkit-scrollbar {
    display: none;
  }

  .test {
    white-space: nowrap;
  }

  .inputWrapper input {
    width: 100%;
    min-width: 90px;
    padding: 7px 5px;
    border-radius: 5px;
    border: none;

    &::placeholder {
      font-family: NotoSansCJKKR;
      font-weight: 300;
      color: #777;
    }

    &:focus {
      outline: none;
    }
  }

  .inputWrapper .tag {
    /* height: 20px; */
    margin: 0px;
    padding: 0px 6px;
    /* border: 1px solid #ccc; */
    border-radius: 3px;
    border: 1px solid #ffe576;
    background: #ffe576;
    display: flex;
    align-items: center;
    color: #333;
    min-height: 24px;
    /* box-shadow: 0 0 4px rgba(0, 0, 0, 0.2), inset 0 1px 1px #fff; */
    cursor: default;
  }

  select {
    font-size: 1rem;
    width: 30%;
    margin-right: 10px;
    padding: 7px 5px;
    border-radius: 5px;
    border: solid 1px #ddd;
  }
  select option[value=''][disabled] {
    display: none;
  }
  select:invalid {
    font-family: NotoSansCJKKR;
    font-weight: 300;
    color: #777;
  }
`;

export const ShadowBox = styled.article`
  margin: 30px;
  margin-bottom: 35px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.screenSize.lg}) {
    margin: 5px;
    margin-bottom: 35px;
  }

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    box-shadow: none;
    background-color: white;
    margin-bottom: 20px;
    padding: 20px;
  }
`;
