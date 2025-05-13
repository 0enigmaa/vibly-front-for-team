import { useEffect } from "react";
import LeftSize from "../../companeta/left/LeftSize";
import "./home.css";
import Post from "../../companeta/post/Post";
import { useLocation, useNavigate } from "react-router-dom";
import Profil from "../profil/Profil";
import Bell from "../bell/Bell";
import SearchUser from "../searchUser/SearchUser";
import SearchPost from "../searchPost/SearchPost";
import { useInfoContext } from "../../context/context";
import Note from "../../companeta/note/Note";

const Home = ({ showModal, handleSearchUserPage }) => {
  const { isActiv, setIsActiv } = useInfoContext();

  const location = useLocation();
  const navigate = useNavigate();
  const handleIconClick = (index) => {
    localStorage.setItem("isActiv", index);
    setIsActiv(index);
  };
  useEffect(() => {
    if (location.pathname === "/") {
      localStorage.setItem("isActiv", 0);
      setIsActiv(0);
    }
  }, []);
  const handleClick = (e, pathname, funcsia) => {
    e.preventDefault(); // Sahifa refresh bo'lishini bloklaydi
    navigate(pathname); // Programmatically navigatsiya
    if (funcsia) {
      funcsia()
    }
  };
  useEffect(() => { }, [location.pathname]);
  return (
    <div>
      <header className="fb-header">
        <div className="fb-header-left">
          <a href="/" onClick={(e) => handleClick(e, "/")}>
            {" "}
            <i id="fb-logo" className="fa-brands fa-slack"></i>
            <span className="fb-logo-text">Vibly</span>
          </a>
        </div>
        <div className="fb-header-center">
          <a href="/" onClick={(e) => handleClick(e, "/")}>
            {" "}
            <div
              className={`fb-header-icon ${isActiv === 0 ? "active" : ""}`}
              onClick={() => handleIconClick(0)}
            >
              <i className="fas fa-home"></i>
            </div>
          </a>
          <a href="/searchPost" onClick={(e) => handleClick(e, "/searchPost")}>
            {" "}
            <div
              className={`fb-header-icon ${isActiv === 1 ? "active" : ""}`}
              onClick={() => handleIconClick(1)}
            >
              <i className="fas fa-tv"></i>
            </div>
          </a>
          <a href="/searchUser" onClick={(e) => handleClick(e, "/searchUser", handleSearchUserPage)}>
            <div
              className={`fb-header-icon ${isActiv === 2 ? "active" : ""}`}
              onClick={() => handleIconClick(2)}
            >
              <i className="fas fa-users"></i>
            </div>
          </a>
          <div className={"fb-header-icon"} onClick={() => showModal()}>
            <i className="fas fa-store"></i>
          </div>
          <div className="fb-header-icon" onClick={() => showModal()}>
            <i className="fas fa-gamepad"></i>
          </div>
        </div>

        <div className="fb-header-right" onClick={() => showModal()}>
          <div className="fb-circle-icon">
            <i className="fab fa-facebook-messenger"></i>
          </div>
          <a href="/bell" onClick={(e) => handleClick(e, "/bell")}>
            {" "}
            <div
              className={`fb-circle-icon ${isActiv === 3 ? "active" : ""}`}
              onClick={() => handleIconClick(3)}
            >
              <i className="fas fa-bell"></i>
            </div>
          </a>
          <a href="/profil" onClick={(e) => handleClick(e, "/profil")}>
            <div
              className={`fb-circle-icon ${isActiv === 4 ? "active" : ""}`}
              onClick={() => handleIconClick(4)}
            >
              <i className="fas fa-user-circle"></i>
            </div>
          </a>
        </div>
      </header>

      <div
        className={`fb-header-left-media ${location.pathname === "/" ? "" : "d-none"
          }`}
      >
        <i id="fb-logo" className="fa-brands fa-slack"></i>
        <span className="fb-logo-text">Vibly</span>
      </div>
      <section>
        <div className="fb-header-center-media">
          <a href="/">
            <div
              className={`fb-header-icon ${isActiv === 0 ? "active" : ""}`}
              onClick={() => handleIconClick(0)}
            >
              <i className="fas fa-home"></i>
            </div>
          </a>
          <a href="/searchPost">
            {" "}
            <div
              className={`fb-header-icon ${isActiv === 1 ? "active" : ""}`}
              onClick={() => handleIconClick(1)}
            >
              <i className="fas fa-tv"></i>
            </div>
          </a>
          <a href="/searchUser">
            <div
              className={`fb-header-icon ${isActiv === 2 ? "active" : ""}`}
              onClick={() => handleIconClick(2)}
            >
              <i className="fas fa-users"></i>
            </div>
          </a>
          <a href="/bell">
            {" "}
            <div
              className={`fb-header-icon ${isActiv === 3 ? "active" : ""}`}
              onClick={() => handleIconClick(3)}
            >
              <i className="fas fa-bell"></i>
            </div>
          </a>
          <a href="/profil">
            {" "}
            <div
              className={`fb-header-icon ${isActiv === 4 ? "active" : ""}`}
              onClick={() => handleIconClick(4)}
            >
              <i className="fas fa-user-circle"></i>
            </div>
          </a>
        </div>
      </section>
      {location.pathname === "/" && (
        <section className="d-flex">
          <LeftSize showModal={showModal} />
          <div className="w-100" style={{ background: "#f0f2f5" }}>
            <Post />
            <Post />
          </div>
        </section>
      )}
      {location.pathname === "/note" && (
        <section className="d-flex">
          <LeftSize
            showModal={showModal}
            isActiv={isActiv}
            setIsActiv={setIsActiv}
            handleClick={handleClick}
          />
          <div className="w-100" style={{ background: "#f0f2f5" }}>
            <Note />
          </div>
        </section>
      )}
      {location.pathname === "/story" && (
        <section className="d-flex">
          <LeftSize
            showModal={showModal}
            isActiv={isActiv}
            setIsActiv={setIsActiv}
            handleClick={handleClick}
          />
          <div className="w-100" style={{ background: "#f0f2f5" }}>
            <Note />
          </div>
        </section>
      )}
      <div>{location.pathname === "/profil" && <Profil />}</div>
      <div>{location.pathname === "/bell" && <Bell />}</div>
      <div>{location.pathname === "/searchUser" && <SearchUser />}</div>
      <div>{location.pathname === "/searchPost" && <SearchPost />}</div>
    </div>
  );
};

export default Home;
