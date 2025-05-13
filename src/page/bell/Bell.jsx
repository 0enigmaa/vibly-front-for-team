import { Empty } from 'antd';
import React, { useState } from 'react';
import "./bell.scss"
const Bell = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'subscribe', user: 'John Doe', postTitle: 'My First Post' },
    { id: 2, type: 'comment', user: 'Jane Smith', postTitle: 'React Basics' },
    { id: 3, type: 'like', user: 'Ali Vali', postTitle: 'Learning SCSS' },
    { id: 1, type: 'subscribe', user: 'John Doe', postTitle: 'My First Post' },
    { id: 2, type: 'comment', user: 'Jane Smith', postTitle: 'React Basics' },
    { id: 3, type: 'like', user: 'Ali Vali', postTitle: 'Learning SCSS' },
    { id: 1, type: 'subscribe', user: 'John Doe', postTitle: 'My First Post' },
    { id: 2, type: 'comment', user: 'Jane Smith', postTitle: 'React Basics' },
    { id: 3, type: 'like', user: 'Ali Vali', postTitle: 'Learning SCSS' },
    { id: 1, type: 'subscribe', user: 'John Doe', postTitle: 'My First Post' },
    { id: 2, type: 'comment', user: 'Jane Smith', postTitle: 'React Basics' },
    { id: 3, type: 'like', user: 'Ali Vali', postTitle: 'Learning SCSS' },
    { id: 1, type: 'subscribe', user: 'John Doe', postTitle: 'My First Post' },
    { id: 2, type: 'comment', user: 'Jane Smith', postTitle: 'React Basics' },
    { id: 3, type: 'like', user: 'Ali Vali', postTitle: 'Learning SCSS' },
    { id: 1, type: 'subscribe', user: 'John Doe', postTitle: 'My First Post' },
    { id: 2, type: 'comment', user: 'Jane Smith', postTitle: 'React Basics' },
    { id: 3, type: 'like', user: 'Ali Vali', postTitle: 'Learning SCSS' },
    { id: 1, type: 'subscribe', user: 'John Doe', postTitle: 'My First Post' },
    { id: 2, type: 'comment', user: 'Jane Smith', postTitle: 'React Basics' },
    { id: 3, type: 'like', user: 'Ali Vali', postTitle: 'Learning SCSS' },
    { id: 1, type: 'subscribe', user: 'John Doe', postTitle: 'My First Post' },
    { id: 2, type: 'comment', user: 'Jane Smith', postTitle: 'React Basics' },
    { id: 3, type: 'like', user: 'Ali Vali', postTitle: 'Learning SCSS' },
    { id: 1, type: 'subscribe', user: 'John Doe', postTitle: 'My First Post' },
    { id: 2, type: 'comment', user: 'Jane Smith', postTitle: 'React Basics' },
    { id: 3, type: 'like', user: 'Ali Vali', postTitle: 'Learning SCSS' },
    { id: 1, type: 'subscribe', user: 'John Doe', postTitle: 'My First Post' },
    { id: 2, type: 'comment', user: 'Jane Smith', postTitle: 'React Basics' },
    { id: 3, type: 'like', user: 'Ali Vali', postTitle: 'Learning SCSS' },
    { id: 1, type: 'subscribe', user: 'John Doe', postTitle: 'My First Post' },
    { id: 2, type: 'comment', user: 'Jane Smith', postTitle: 'React Basics' },
    { id: 3, type: 'like', user: 'Ali Vali', postTitle: 'Learning SCSS' },
    { id: 1, type: 'subscribe', user: 'John Doe', postTitle: 'My First Post' },
    { id: 2, type: 'comment', user: 'Jane Smith', postTitle: 'React Basics' },
    { id: 3, type: 'like', user: 'Ali Vali', postTitle: 'Learning SCSS' },
    { id: 1, type: 'subscribe', user: 'John Doe', postTitle: 'My First Post' },
    { id: 2, type: 'comment', user: 'Jane Smith', postTitle: 'React Basics' },
    { id: 3, type: 'like', user: 'Ali Vali', postTitle: 'Learning SCSS' },
    { id: 1, type: 'subscribe', user: 'John Doe', postTitle: 'My First Post' },
    { id: 2, type: 'comment', user: 'Jane Smith', postTitle: 'React Basics' },
    { id: 3, type: 'like', user: 'Ali Vali', postTitle: 'Learning SCSS' },
  ]);

  return (
    <div>
      {notifications.length === 0 ? (
        <Empty description="No Notifications" />
      ) : (
        <div className="notifications">
          {notifications.map((notif) => (
            <div key={notif.id} className="notification-item">
              {notif.type === 'subscribe' && (
                <p><strong>{notif.user}</strong> sizga obuna bo‘ldi.</p>
              )}
              {notif.type === 'comment' && (
                <p><strong>{notif.user}</strong> sizning <strong>{notif.postTitle}</strong> postingizga comment qoldirdi.</p>
              )}
              {notif.type === 'like' && (
                <p><strong>{notif.user}</strong> sizning <strong>{notif.postTitle}</strong> postingizni like qildi.</p>
              )}
            </div>
          ))}
          <button className='btn btn-primary btn-clear'>Clear</button>
        </div>
      )}
    </div>
  );
};

export default Bell;
