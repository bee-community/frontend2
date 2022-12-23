import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  border-top: solid 1px #aaa;
  border-bottom: solid 1px #aaa;
  text-align: left;
  border-spacing: unset;
  margin-bottom: 30px;
  font-size: 1rem;

  .border-bottom {
    border-bottom: solid 1px #ddd;
  }

  th {
    width: 20%;
    min-width: 90px;
    padding: 20px;
    background: #f4f4f4;
    vertical-align: top;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      background: white;
      padding: 20px 0px 20px 0px;
      font-size: 0.8675rem;
    }
  }

  td {
    padding: 8px 15px;

    .inputWrapper {
      display: flex;
      font-size: 1rem;
      width: 600px;
      height: 1.5rem;
      min-width: 90px;
      padding: 7px 5px;
      border-radius: 5px;
      border: solid 1px #ddd;
      overflow-x: scroll;
    }
    .inputWrapper::-webkit-scrollbar {
      display: none;
    }

    .test {
      white-space: nowrap;
    }

    input {
      font-size: 1rem;
      width: 100%;
      min-width: 90px;
      padding: 7px 5px;
      border-radius: 5px;
      border: solid 1px #ddd;

      @media (max-width: ${props => props.theme.screenSize.mobileL}) {
        width: 90%;
        border: none;
        min-width: 60px;
        font-size: 0.7rem;
      }
    }

    .inputWrapper input {
      font-size: 1rem;
      width: 100%;
      min-width: 90px;
      padding: 7px 5px;
      border-radius: 5px;
      border: none;
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

    input.input-middle {
      width: 50%;
      margin-right: 10px;

      @media (max-width: ${props => props.theme.screenSize.mobileL}) {
        width: 40%;
        margin-right: 0px;
      }
    }

    textarea {
      font-family: NotoSansCJKKR;
      font-size: 1rem;
      width: 100%;
      min-height: 30vh;
      padding: 7px 5px;
      border-radius: 5px;
      border: solid 1px #ddd;
      resize: none;
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

    input:focus,
    textarea:focus,
    select:focus {
      outline: none;
    }

    input::placeholder,
    textarea::placeholder {
      font-family: NotoSansCJKKR;
      font-weight: 300;
      color: #777;
    }
  }
  .button-in-table {
    padding: 8px 5px 7px;
    border-radius: 5px;
    border: solid 1px #111;
    background: none;
    cursor: pointer;

    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      padding: 8px 5px 7px;
      font-size: 0.6675rem;
    }
  }
`;
