import React from "react";
import { useToggle } from "../context/toggleContext";
import HorizontalCard from "./HorizontalCard";
import VerticalCard from "./VerticalCard";
import "./SideBar.css";

const Posts = ({ posts, loading, deletePost }) => {
  const { toggle } = useToggle();

  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="postsPage">
      {toggle ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {posts.map((doc) => {
            return (
              <VerticalCard key={doc.id} doc={doc} deletePost={deletePost} />
            );
          })}
        </div>
      ) : (
        <ul className="list-group md-4">
          {posts.map((doc) => {
            return (
              <HorizontalCard key={doc.id} doc={doc} deletePost={deletePost} />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Posts;
