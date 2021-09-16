import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Posts from "./Posts";
import Pagination from "./Pagination";
import SideBar from "./SideBar";

function DashBoard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(5);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current Posts

  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPage - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPage);

  // Paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Delete  a Post
  const deletePost = (id) => setPosts(posts.filter((doc) => doc.id !== id));

  const setPostsPerPAGE = (num) => setPostsPerPage(prev => num) 

  return (
      <div className="App">
        <SideBar setPostsPerPAGE={setPostsPerPAGE} />
        <div className="posts">
          <Posts
            posts={currentPosts}
            loading={loading}
            deletePost={deletePost}
          />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
          />
        </div>
      </div>
  );
}

export default DashBoard;
