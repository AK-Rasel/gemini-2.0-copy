import "./sidebar.css";
import { assets } from "../../assets/assets.js";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt="menu_icon" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus_icon" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p className="resent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="message_icon" />
            <p>What is React ...</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question_icon" />
          <p>Help</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history_icon" />
          <p>Activity</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting_icon" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;