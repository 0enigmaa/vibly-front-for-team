import React, { useRef, useState } from "react";
import ProfilBox from "../../companeta/profilBox/ProfilBox";
import "./profil.css";
const Profil = () => {
  const [userData, setUserData] = useState([]);
  const [onUpdate, setOnUpdate] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPostModal, setisPostModal] = useState(false);
  const [formData, setFormData] = useState({
    username: userData.username || "",
    surname: userData.surname || "",
    email: userData.email || "",
    hobby: userData.hobby || "",
    work: userData.work || "",
    profilePicture: userData.profilePicture || "",
    dateBirth: userData.dateBirth ? userData.dateBirth.split("T")[0] : "",
  });
  const fileInputRef = useRef(null);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showPostModal = () => {
    setisPostModal(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profilePicture: reader.result, // Base64 formatga o'g'irib ko'rsatadi
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleOkPost = () => {
    setisPostModal(false);
  };
  const handleCancelModal = () => {
    setFormData({
      username: userData.username || "",
      surname: userData.surname || "",
      email: userData.email || "",
      hobby: userData.hobby || "",
      work: userData.work || "",
      profilePicture: userData.profilePicture || "",
      dateBirth: userData.dateBirth ? userData.dateBirth.split("T")[0] : "",
    });
    setIsModalOpen(false);
  };
  const handleCancelModalPost = () => {
    setisPostModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onUpdate(formData); // Ma'lumotni yuboradi
    handleOk(); // Modalni yopadi
  };
  const posts = [
    {
      id: 1,
      title: "Post Title 1",
      description: "This is a description of post 1.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2015/10/07/12/17/post-976115_1280.png",
    },
    {
      id: 2,
      title: "Post Title 2",
      description: "This is a description of post 2.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2015/10/07/12/17/post-976115_1280.png",
    },
    {
      id: 3,
      title: "Post Title 3",
      description: "This is a description of post 3.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2015/10/07/12/17/post-976115_1280.png",
    },

  ];

  return (
    <div>
      <ProfilBox
        showModal={showModal}
        isModalOpen={isModalOpen}
        handleSubmit={handleSubmit}
        handleCancelModal={handleCancelModal}
        formData={formData}
        fileInputRef={fileInputRef}
        handleImageChange={handleImageChange}
        handleChange={handleChange}
        posts={posts}
        isPostModal={isPostModal}
        setisPostModal={setisPostModal}
        showPostModal={showPostModal}
        handleOkPost={handleOkPost}
        handleCancelModalPost={handleCancelModalPost}
      />
    </div>
  );
};

export default Profil;
