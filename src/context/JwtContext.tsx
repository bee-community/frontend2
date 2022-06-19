// import { createContext, FC, useState } from 'react';
// const JwtContext = createContext({});
// export const JwtProvider: FC = ({ children }) => {
//   const [jwt, setJwt] = useState<string>('');
//   return (
//     <JwtContext.Provider
//       value={{
//         jwt,
//         setJwt,
//       }}>
//       {children}
//     </JwtContext.Provider>
//   );
// };
// export default JwtContext;
import { createContext, FC, useReducer } from 'react';

const reducer = (jwt: any, action: any) => {
  switch (action.type) {
    case 'CHANGE':
      return action.value;
    default:
      return jwt;
  }
};

export const JwtStateContext = createContext('');
export const DispatchContext = createContext<any>(null);
// const ChatJwtContext = createContext({});
export const JwtProvider: FC = ({ children }) => {
  //   const [jwt, setJwt] = useState<any>('');
  const [jwt, dispatch] = useReducer(reducer, '');
  return (
    <DispatchContext.Provider value={dispatch}>
      <JwtStateContext.Provider value={jwt}>
        {children}
      </JwtStateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default JwtProvider;
