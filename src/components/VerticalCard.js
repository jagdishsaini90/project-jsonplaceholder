import React, { useEffect, useState } from "react";

const VerticalCard = ({ doc, deletePost }) => {
  const date = new Date().toUTCString();

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/photos/${doc.id ? doc.id : 1}`)
      .then((res) => res.json())
      .then((res) => setImage(res.url))
      .catch((error) => console.log(error));
    setLoading(false);
  }, [doc.id]);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div
      className="card mb-2 shadow-lg"
      style={{ width: "250px", overflow: "hidden", height: "270px" }}
    >
      <button
        className="btn rounded-circle"
        style={{
          padding: "0 10px 0 0",
          color: "red",
          background: "white",
          textAlign: "right",
        }}
        onClick={() => deletePost(doc.id)}
      >
        X
      </button>
      <div className="card-body" style={{ paddingTop: "0", paddingBottom: 0 }}>
        <p
          className="card-text"
          style={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            margin: "0 0 0 10px",
          }}
        >
          {doc.title}
        </p>
        <p
          className="card-text"
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
      <div
        style={{
          width: "100%",
          maxHeight: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={image} alt="" width="85%" height="80%" />
      </div>
    </div>
  );
};

export default VerticalCard;
