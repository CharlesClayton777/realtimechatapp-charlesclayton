import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import { Messages } from "./Messages";
import { Input } from "./Input";
//import Input from "./Input";
//import { ChatContext } from "../context/ChatContext";

export const Chat = () => {

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Placeholder</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
        </div>
        <Messages/>
        <Input/>
    </div>
  );
};
