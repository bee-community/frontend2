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
  }

  td {
    padding: 8px 15px;

    input {
      font-size: 1rem;
      width: 100%;
      min-width: 90px;
      padding: 7px 5px;
      border-radius: 5px;
      border: solid 1px #ddd;
    }

    input.input-middle {
      width: 50%;
      margin-right: 10px;
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
  }
`;
