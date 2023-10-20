import { useState } from "react";
import "./App.css";
import ImageList from "./components/ImageList/ImageList";
import LoginPanel from "./components/LoginPanel/LoginPanel";
import { ImageContext } from "./contexts/image-context";
import { UserContext } from "./contexts/user-context";
export function App() {
  const [isLarge, setIsLarge] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <UserContext.Provider value={{
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
      }}> 
        <LoginPanel />
      </UserContext.Provider> 
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <ImageContext.Provider value={imageSize}> 
        <ImageList />
      </ImageContext.Provider>
    </>
  );
}

export default App;
