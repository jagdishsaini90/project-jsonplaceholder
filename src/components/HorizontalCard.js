import React from "react";
import Avatar from "./Avatar";

const HorizontalCard = ({ doc ,deletePost}) => {
  const date = new Date().toUTCString();


  return (
    <div
      className="d-flex justify-content-center align-items-center mb-3"
    >
      <li
        className="list-group-item d-flex justify-content-start align-items-center border  shadow p-3 bg-white"
        style={{
          borderRadius: "15px",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Avatar id={doc.id && doc.id} width="60px" height="60px" />
        <div
          style={{
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              marginBottom: 0,
              marginLeft: "10px",
            }}
          >
            {doc.title}
          </p>
          <p
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "13px",
              color: "grey",
              margin: "0 0 0 10px",
            }}
          >
            {doc.body}
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "grey",
              marginTop: 0,
              marginLeft: "10px",
              marginBottom: 0,
            }}
          >
            {date}
          </p>
        </div>
      </li>
      <button
        className="btn shadow-lg p-auto  rounded-circle"
        style={{
          marginLeft: "15px",
          color: "red",
          background: "white",
        }}
        onClick={() => deletePost(doc.id)}
      >
        X
      </button>
    </div>
  );
};

export default HorizontalCard;
