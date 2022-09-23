import { useState, useEffect, useReducer, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Signin from "./Components/SignIn/Signin";
import Signup from "./Components/SignUp/Signup";
import Userlist from "./Components/UserList/Userlist";
import axios from "axios";

const initialState = {
  isSignIn: false,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        isSignIn: true,
      };
    case "SIGNUP":
      return {
        ...state,
        isSignIn: false,
      };
    default:
      return state;
  }
};

export const userContext = createContext();

function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => setUserData(resp.data));
  }, []);
  return (
    <userContext.Provider value={{ state, dispatch, userData }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Signup />}></Route>
            <Route path="signin" element={<Signin />}></Route>
            <Route path="login" element={<Userlist />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
