import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
        />
      </div>
        <div className="userChat">
          <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          <div className="userChatInfo">
            <span>John</span>
          </div>
        </div>
    </div>
  );
};

export default Search;