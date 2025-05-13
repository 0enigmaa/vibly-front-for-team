import React, { useState } from "react";
import "./searchPost.scss";
import Post from "../../companeta/post/Post";

// Dummy manga posts data
const dummyMangaPosts = [
  {
    id: 1,
    title: "Naruto",
    genre: "Action, Adventure",
    description: "A young ninja striving to become the Hokage.",
    cover: "https://i.imgur.com/kDGAwYY.jpg",
  },
  {
    id: 2,
    title: "One Piece",
    genre: "Adventure, Fantasy",
    description: "The search for the ultimate treasure in the world of pirates.",
    cover: "https://i.imgur.com/Nc4Fu5y.jpg",
  },
  {
    id: 3,
    title: "Attack on Titan",
    genre: "Action, Drama",
    description: "Humanity's last stand against the titans.",
    cover: "https://i.imgur.com/6g5bR6b.jpg",
  },
  {
    id: 4,
    title: "My Hero Academia",
    genre: "Action, Superhero",
    description: "A world where nearly everyone has superpowers.",
    cover: "https://i.imgur.com/Zg3bCR3.jpg",
  },
];

const SearchPost = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter manga posts based on search term
  const filteredMangaPosts = dummyMangaPosts.filter((manga) =>
    manga.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-post-container">
      <a className="back_home" href="/"> 
        <i className="fa-solid fa-arrow-left"></i> Back home
      </a> 

      <div id="search-input-box" className="w-75 d-flex align-items-center justify-content-between">
        <h1 className="search-header"> Find Post</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="posts-container row m-0 p-0">
        {filteredMangaPosts.length > 0 ? (
          filteredMangaPosts.map((manga) => (
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-0"> <Post /></div>
          ))
        ) : (
          <div className="no-results">No manga posts found</div>
        )}
      </div>
    </div>
  );
};

export default SearchPost;
