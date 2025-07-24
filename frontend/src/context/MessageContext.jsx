import { createContext, useState } from "react";
export const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [id,setId] = useState(8);
  return (
    <MessageContext.Provider value={{ data, setData,id,setId }}>
      {children}
    </MessageContext.Provider>
  );
};
export default MessageProvider;