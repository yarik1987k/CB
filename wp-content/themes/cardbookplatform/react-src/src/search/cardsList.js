import React, { useState, useEffect, useMemo, useContext } from "react";
import SingleCard from "./singleCard";
import { SearchContext } from "./context/searchContext";

const CardsList = () => {
  const { activeFilters } = useContext(SearchContext);
  const [totalPages, setTotalPages] = useState(1)
  const [totalPosts, setTotalPosts] = useState(0)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(10)

  const handlePageClick = (pageNum) => {
    getPosts(pageNum);
  }

  const getPosts = (page = 1) => {
    if (activeFilters.length > 0 && activeFilters.some(filter => filter.ids.length > 0)) {
      const filters = activeFilters.flatMap(filter => {
        if (filter.ids.length > 0) {
          console.log(filter);
          const ids = filter.ids.map(id => id.id).join(",");
          return [`${filter.tax}=${ids}`];
        }
        return [];
      });
      
      const apiUrl = "/wp-json/custom/v1/users-list/?";
      const url = `${apiUrl}${filters.join("&")}`;

      console.log(url)
      setCurrentUrl(url);
      setLoading(true);
      setPosts([]);
      fetch(url)
        .then((response) => {
          const totalPagesApi = response.headers.get("x-wp-totalpages");
          const totalPostsApi = response.headers.get("x-wp-total");
          setTotalPages(totalPagesApi);
          setTotalPosts(totalPostsApi);
          setCurrentPage(page);
          return response.json();
        })
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
          setLoading(false);
        });
    } else {
      setTotalPages(0);
      setTotalPosts(0);
      setLoading(false);
      setCurrentUrl("");
      setPosts([]);
      console.log(activeFilters)
    }
  };
 

  useEffect(()=>{
    if (activeFilters.length > 0 && activeFilters.some(filter => filter.ids.length > 0) ) {
      // there is at least one filter with non-empty ids array
      getPosts()
    }else{
      setTotalPages(0)
      setTotalPosts(0)
      setLoading(false)
      setCurrentUrl('')
      setPosts([])
      console.log(activeFilters)
    }
  },[activeFilters])
  
  const totalPagesArr = Array.from({length: totalPages}, (_, i) => i + 1);

  if (loading) {
    return (
      <div className="loading_animation">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  } 

  return (
    <div className="cards-list">
      {posts.map((post) => (
        <SingleCard key={post.id} post={post} />
      ))}
      <div className="pagination">
        {totalPagesArr.map(pageNum => (
          <button key={pageNum} onClick={() => handlePageClick(pageNum)}>
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardsList;