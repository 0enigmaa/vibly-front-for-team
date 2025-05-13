import React, { useState } from "react";
import "./searchUser.scss";
import { useInfoContext } from "../../context/context";
import userDefaultImg from "../../puplickImg/men.png";
const SearchUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { allUsers } = useInfoContext();
  const filteredUsers = (allUsers || []).filter((user) => {
    const name = user.name || "";
    const email = user.email || "";
    return (
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="search-user-container">
      <a className="back_home" href="/">
        {" "}
        <i className="fa-solid fa-arrow-left"></i> Back home
      </a>
      <div
        id="search-input-box"
        className="w-75 d-flex align-items-center justify-content-between"
      >
        <h1 className="search-header"> Find Users</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="user-table-wrapper">
        {filteredUsers.length > 0 ? (
          <table className="user-table">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (                
                <tr key={user.id}>
                  <td>
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.surname}
                        className="user-avatar"
                      />
                    ) : (
                      <img
                        src={userDefaultImg}
                        alt={user.name}
                        className="user-avatar"
                      />
                    )}
                  </td>
                  <td>{user.surname + " " + user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-primary">Follow</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-results">No users found</div>
        )}
      </div>
    </div>
  );
};

export default SearchUser;
