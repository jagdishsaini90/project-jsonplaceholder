import React, { useEffect, useState } from "react";

const Avatar = ({ id, width, height }) => {
  const [image, setImage] = useState("");
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/photos/${id ? id : 1}`)
      .then((res) => res.json())
      .then((res) => setImage(res.url))
      .catch((error) => console.log(error));
  setLoading(false)
  }, [id]);

  if (loading) {
    return <p>loading...</p>
  }
  return (
    <img
      src={image}
      alt=""
      width={width}
      height={height}
      style={{
        borderRadius: "50%",
      }}
    />
  );
};

export default Avatar;
