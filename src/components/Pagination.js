import React, { useState } from "react";
import caretRight from '../caretRight.svg';
import caretLeft from '../caretLeft.svg'


const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const [active, setActive] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {currentPage === 1 ? null : (
        <button
          className="btn"
          onClick={() => {
            setActive((prev) => currentPage - 1);
            return paginate(currentPage - 1);
          }}
          style={{
            marginRight:"10px"
          }}
        >
          <img src={caretLeft} alt=""  />
        </button>
      )}
      <button
        className="btn btn-outline-primary shadow-lg"
        style={{
          background: active === currentPage + 1 ? "white" : "",
          borderRadius: "50%",
          marginRight:"10px"
        }}
        onClick={() => {
          setActive((prev) => currentPage + 1);
          return paginate(currentPage);
        }}
      >
        {currentPage}
      </button>
      <button
        className="btn btn-outline-primary shadow-lg"
        onClick={() => {
          setActive((prev) => currentPage + 2);
          return paginate(currentPage + 1);
        }}
        style={{
          background: active === currentPage + 2 ? "white" : "",
          borderRadius: "50%",
          marginRight:"10px"
        }}
      >
        {currentPage + 1}
      </button>
      {currentPage + 2 >= pageNumbers.length ? null : (
        <button
          className="btn btn-outline-primary shadow-lg"
          onClick={() => {
            setActive((prev) => currentPage + 3);
            return paginate(currentPage + 2);
          }}
          style={{
            backgroundColor: active === currentPage + 3 ? "white" : "",
            borderRadius: "50%",
            marginRight:"10px"
          }}
        >
          {currentPage + 2}
        </button>
      )}
      {currentPage >= pageNumbers.length ? null : (
        <button
          className="btn"
          onClick={() => {
            setActive((prev) => currentPage + 2);
            return paginate(currentPage + 1);
          }}
        >
          <img src={caretRight} alt=""  />
        </button>
      )}
    </nav>
  );
};

export default Pagination;
