import { createContext } from "react";
export const StoreInputValForCart = createContext({});
const PostListProvider = ({ children }) => {
  return (
    <StoreInputValForCart.Provider value={[]}>
      {children}
    </StoreInputValForCart.Provider>
  );
};
export default PostListProvider;
