import React from "react";
import { Button, Modal, Upload } from "antd";
import { Input, Form } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Post from "../post/Post";
const ProfilBox = ({
  showModal,
  isModalOpen,
  handleSubmit,
  handleCancelModal,
  formData,
  fileInputRef,
  handleImageChange,
  handleChange,
  posts,
  isPostModal,
  setisPostModal,
  showPostModal,
  handleOkPost,
  handleCancelModalPost,
}) => {
  return (
    <div className="profil">
      <div className="w-100">
        <div className="profil-box  py-5 rounded mt-4">
          <div style={{ marginLeft: "-20px" }}>
            <div className="profil-avatar"></div>

            <div className="text-center mt-3">
              <h3>JohnDoe</h3>

              <span>Frontend Developer | Teach Lover</span>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-around mt-4">
            <div className="text-center">
              <strong>12</strong>

              <p>Posts</p>
            </div>

            <div className="text-center">
              <strong>108</strong>

              <p>Followers</p>
            </div>

            <div className="text-center">
              <strong>75</strong>

              <p>Following</p>
            </div>
          </div>

          <div className="action-box d-flex align-items-center justify-content-center gap-3 mt-5 text-align-center">
            <div>
              <Button type="primary" onClick={showPostModal}>
                Add Post
              </Button>

              <Modal
                title="Add New Post"
                open={isPostModal}
                onOk={handleOkPost}
                onCancel={handleCancelModalPost}
                okText="Post"
                cancelText="Cancel"
              >
                <Form.Item
                  name="postImage"
                  valuePropName="fileList"
                  getValueFromEvent={(e) =>
                    Array.isArray(e) ? e : e && e.fileList
                  }
                >
                  <label
                    htmlFor="profile-upload"
                    id=""
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      cursor: "pointer",
                      border: "2px solid #ccc",
                      margin: "0",
                    }}
                  >
                    {
                      formData.profilePicture ?    <img
                      src={formData.profilePicture || "default-profile.png"}
                      alt="Profile"
                    /> : <p>+ Add Post</p>
                    }
                 
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="profile-upload"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={handleImageChange}
                  />
                </Form.Item>
                <Form layout="vertical">
                  <Form.Item
                    name="content"
                    label="Post Content"
                    rules={[
                      {
                        required: true,
                        message: "Please input your post content!",
                      },
                    ]}
                  >
                    <Input.TextArea
                      rows={4}
                      placeholder="What's on your mind?"
                    />
                  </Form.Item>
                </Form>
              </Modal>
            </div>

            <div>
              <Button type="primary" onClick={showModal}>
                Edit Profile
              </Button>
              <Modal
                title="Edit Profile"
                open={isModalOpen}
                onOk={handleSubmit}
                onCancel={handleCancelModal}
                okText="Save Changes"
              >
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <label
                    htmlFor="profile-upload"
                    id=""
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      cursor: "pointer",
                      border: "2px solid #ccc",
                      margin: "0",
                    }}
                  >
                    <img
                      src={formData.profilePicture || "default-profile.png"}
                      alt="Profile"
                    />
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="profile-upload"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={handleImageChange}
                  />
                </div>

                <Form layout="vertical">
                  <Form.Item label="Username" required>
                    <Input
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Surname" required>
                    <Input
                      name="surname"
                      value={formData.surname}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Email" required>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Hobby">
                    <Input
                      name="hobby"
                      value={formData.hobby}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Work">
                    <Input
                      name="work"
                      value={formData.work}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Date of Birth" required>
                    <Input
                      name="dateBirth"
                      type="date"
                      value={formData.dateBirth}
                      onChange={handleChange}
                    />
                  </Form.Item>
                </Form>
              </Modal>
            </div>
          </div>
        </div>
        <div className="profil-lg-media  row p-0 m-0">
          {posts.map((post) => (
            <div
              key={post.id}
              className="col-12 col-sm-6 col-md-6 col-lg-4 p-0 m-0"
            >
              <Post />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilBox;
