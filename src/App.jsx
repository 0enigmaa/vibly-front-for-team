import React, { useState } from 'react';
import './App.css';
import { Button, Modal } from 'antd';

const App = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='profil'>
      <div className="w-100">


        <div className='d-flex align-items-center gap-1 mx-3'>
          <i style={{ color: 'blue' }} class="fa-solid fa-arrow-left"></i>

          <a style={{ textDecoration: "none" }} href="/">
            Back home</a>

        </div>

        <div className="profil-box  p-4 rounded mt-4">
          <div className='profil-avatar'></div>

          <div className='text-center mt-3'>
            <h3>JohnDoe</h3>

            <span>Frontend Developer | Teach Lover</span>
          </div>

          <div className='d-flex align-items-center justify-content-around mt-4'>
            <div className='text-center'>
              <strong>12</strong>

              <p>Posts</p>
            </div>

            <div className='text-center'>
              <strong>108</strong>

              <p>Followers</p>
            </div>

            <div className='text-center'>
              <strong>75</strong>

              <p>Following</p>
            </div>
          </div>



          <div className="action-box d-flex align-items-center justify-content-center gap-3 mt-5 text-align-center">
            <div>
              <Button type="primary" onClick={showModal}>
                Follow
              </Button>
              <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </div>

            <div>
              <Button type="primary" onClick={showModal}>
                Edit Profile
              </Button>
              <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </div>
          </div>

        </div>


        <div className="row gap-2 m-0 mt-4 p-5 ">
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 p-0 m-0">
            <div className="post-card"></div>

          </div>
          <div className="col-12  col-sm-12 col-md-2 col-lg-2 p-0 m-0">
            <div className="post-card"></div>
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 p-0 m-0">
            <div className="post-card"></div>
          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 p-0 m-0">
            <div className="post-card"></div>

          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 p-0 m-0">
            <div className="post-card"></div>

          </div>
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 p-0 m-0">
            <div className="post-card"></div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default App
