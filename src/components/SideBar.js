import React, { useState } from "react";
import Avatar from "./Avatar";
import "./SideBar.css";
import listTask from "../listTask.svg";
import cardHeading from "../cardHeading.svg";
import { useToggle } from "../context/toggleContext";
import Form from "./Form";

const SideBar = ({ setPostsPerPAGE }) => {
  const [selected, setSelected] = useState(false);
  const [expand, setExpand] = useState(false);
  const { toggle, handleToggle } = useToggle();

  const handleChange = (e) => {
    if (e === "vertical") {
      setPostsPerPAGE(6);
    } else {
      setPostsPerPAGE(5);
    }
    setSelected((prev) => !prev);
    handleToggle(!toggle);
  };

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div
      className={expand ? "sidebar shadow-lg expandMain" : "sidebar shadow-lg"}
    >
      <div
        className={expand ? "sidebar shadow-lg expand" : "sidebar shadow-lg"}
      >
        <div className="sidebar__box">
          <div className="content">
            <div className="avatar">
              <Avatar width="40px" height="40px" />
              <div>
                <p style={{ margin: 0 }}>Hi Reader</p>
                <p style={{ margin: 0, color: "grey" }}>Get ready </p>
              </div>
            </div>
            {expand ? null : (
              <div className="toggle">
                <h4>View Toggle</h4>
                <div>
                  <button
                    className="btn btn-outline-secondary"
                    style={{
                      marginRight: "10px",
                      background: selected ? "steelblue" : "white",
                    }}
                    onClick={() => handleChange("vertical")}
                  >
                    <img src={cardHeading} alt="" width="30px" />
                  </button>
                  <button
                    style={{
                      background: selected ? "white" : "steelblue",
                    }}
                    className="btn btn-outline-secondary"
                    onClick={() => handleChange("horizontal")}
                  >
                    <img src={listTask} alt="" width="30px" />
                  </button>
                </div>
              </div>
            )}
            <div className="toggle">
              <h4>Have a feedback</h4>
              <button
                className="btn btn-outline-secondary mb-3"
                style={{ background: "steelblue", color: "white" }}
                onClick={handleExpand}
              >
                We're listening
              </button>
            </div>
          </div>
          {expand ? <Form expand={expand} /> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
