import { createContext, useState } from "react";
export const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [id,setId] = useState(
    Math.floor(Math.random()*10000000000)+1
  );
  return (
    <MessageContext.Provider value={{ data, setData,id,setId }}>
      {children}
    </MessageContext.Provider>
  );
};
export default MessageProvider;