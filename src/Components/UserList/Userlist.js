import React, { useContext } from "react";
import { userContext } from "../../App";

import "./userlist.css";
import Navbar from "../Navbar/Navbar";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { Link } from "react-router-dom";
const Userlist = () => {
  const { userData } = useContext(userContext);
  console.log(userData);
  return (
    <>
      <div className="signupNav menunav container">
        <TextSnippetIcon style={{ color: "white", marginRight: "20px" }} />
        <p style={{ color: "white" }}>Public Events</p>
        <Link to="/signin">
          <button
            type="button"
            className="btn btn-info"
            style={{ float: "right", marginLeft: "50px" }}
          >
            GO BACK
          </button>
        </Link>
      </div>
      {userData.map((ele) => (
        <div className="container menu mt-5" key={ele.id}>
          <div className="listLeft">
            <img
              src="https://images.pexels.com/photos/430215/pexels-photo-430215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            ></img>
          </div>
          <div className="listRight">
            <h4>{ele.title}</h4>
            <p>{ele.body}</p>
            <div className="userOption">
              <a href="##">Selct More</a>
              <a href="##"> More</a>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default Userlist;
