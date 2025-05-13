import { useInfoContext } from "./context/context";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import { getAllUsers } from "./api/userRequests";
import Login from "./page/login/Login";
import Home from "./page/home/Home";
import "./App.css";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation()
  const { currentUser, setAllUsers, allUsers } = useInfoContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {    
    if(location.pathname === "/searchUser"){
      handleSearchUserPage()
    }
  }, [location.pathname])
  const handleSearchUserPage = async () => {
    try {
      const res = await getAllUsers()
      setAllUsers(res.data.users);
      toast.success(res.data.message)
    } catch (error) {
      console.log(error);
      toast.error(error.massage)
    }
  }
  return (
    <div className="App">
      <div>{currentUser ? <Home handleSearchUserPage={handleSearchUserPage} showModal={showModal} /> : <Login />}</div>

      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <h4 className="text-center">Now it isn't working! 🚧</h4>
      </Modal>
    </div>
  );
}

export default App;
