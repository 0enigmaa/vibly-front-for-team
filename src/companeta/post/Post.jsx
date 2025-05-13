import React, { useState } from "react";
import "./post.scss";
import Men from "../../puplickImg/men.png";
import Announcement from "../../puplickImg/announcment.png";
import { Image, Popconfirm, message } from "antd";
import type { PopconfirmProps } from 'antd';
import { useInfoContext } from "../../context/context";

const Post = () => {
  // const [owner] = post;
    const { currentUser } = useInfoContext();
  const [isCommit, setIsCommit] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, username: "john_doe", text: "Bu juda zo'r loyiha!" },
    { id: 2, username: "coder123", text: "Dizayni yoqdi 👏" },
    { id: 3, username: "ai_master", text: "AI yordamida ishlanganmi?" },
    { id: 1, username: "john_doe", text: "Bu juda zo'r loyiha!" },
    { id: 2, username: "coder123", text: "Dizayni yoqdi 👏" },
    { id: 3, username: "ai_master", text: "AI yordamida ishlanganmi?" },
    { id: 1, username: "john_doe", text: "Bu juda zo'r loyiha!" },
    { id: 2, username: "coder123", text: "Dizayni yoqdi 👏" },
    { id: 3, username: "ai_master", text: "AI yordamida ishlanganmi?" },
    { id: 1, username: "john_doe", text: "Bu juda zo'r loyiha!" },
    { id: 2, username: "coder123", text: "Dizayni yoqdi 👏" },
    { id: 3, username: "ai_master", text: "AI yordamida ishlanganmi?" },
    { id: 1, username: "john_doe", text: "Bu juda zo'r loyiha!" },
    { id: 2, username: "coder123", text: "Dizayni yoqdi 👏" },
    { id: 3, username: "ai_master", text: "AI yordamida ishlanganmi?" },
    { id: 1, username: "john_doe", text: "Bu juda zo'r loyiha!" },
    { id: 2, username: "coder123", text: "Dizayni yoqdi 👏" },
    {
      id: 3,
      username: "ai_master",
      text: "AI yordamida ishlanganmi?AI yordamida ishlanganmi?AI yordamida ishlanganmi?AI yordamida ishlanganmi?AI yordamida ishlanganmi?AI yordamida ishlanganmi?AI yordamida ishlanganmi?",
    },
  ]);
  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <div className="post">
      <div className="post-card">
        <div className="user-info">
          <img src={Men} alt="User" className="avatar" />
          <div style={{ textAlign: "start" }}>
            <h3 className="username">Rizanur Rahman</h3>
            <p className="location">Just now · Dhaka</p>
          </div>
        </div>

        <div className="post-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            sapiente odit obcaecati ipsam labore alias, commodi dicta veritatis
            sint eligendi vel est soluta officia ducimus saepe quae
            accusantium...
          </p>
        </div>

        <div className="post-image">
          <Image src={Announcement} alt="Post" />
        </div>

        <div className="actions">
          <div className="action-btn">
            <i className="fa-regular fa-thumbs-up"></i>
            {/* <i class="fa-solid fa-thumbs-up"></i>  Bosganda o'zgaradi */}
            <span>Like</span>
          </div>
          <div className="action-btn">
            <i className="fa-solid fa-comment-dots"></i>
            <span onClick={() => setIsCommit(!isCommit)}>Comment</span>
          </div>

          <div className="action-btn">
            <i className="fa-regular fa-bookmark"></i>
            {/* <i class="fa-solid fa-bookmark"></i>  Bosganda o'zgaradi  */}
            <span>Save</span>
          </div>
        </div>
        {isCommit && (
          <div className="comments-container">
            {comments.length > 0 && (
              <div className="comments-list">
                {comments.map((comment) => (
                  <div key={comment.id} className="comment-item">
                    <img src="#" alt="foto" />
                    <strong>{comment.username}</strong>: {comment.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="comment-box gap-3">
          <input type="text" placeholder="Write your comment..." />
          <button>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
        <div
          className="d-flex  mt-3 gap-3"
        >
          <button className="btn btn-warning d-flex gap-2 align-items-center">
            <i className="fa-solid fa-pen"></i>Update Post
          </button>
          <Popconfirm
            title="Delete the post"
            description="Are you sure to delete this post?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <button className="btn btn-lg btn-danger  d-flex gap-2 align-items-center">
              <i className="fa-solid fa-trash"></i>Delete Post
            </button>
          </Popconfirm>
          </div>
        {/* {
          currentUser._id === owner.id ? 
         : ""
        } */}
      </div>
    </div>
  );
};

export default Post;
