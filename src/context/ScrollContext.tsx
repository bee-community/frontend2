import { createContext, FC, useRef } from 'react';

const ScrollContext = createContext({});

export const ScrollProvider: FC = ({ children }) => {
  const scrollBarRef = useRef<any>(null);
  // const [jwt, setJwt] = useState<string>('');
  return (
    <ScrollContext.Provider
      value={{
        scrollBarRef,
      }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
