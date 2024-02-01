import React, { useState } from 'react';
import Comment from './Comment';

const Task = ({ task }) => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>The trello clone task is done by the very critically shown in various form in ratio.</p>
      
      <div className="comments">
        <h4>Comments</h4>
        {comments.map((comment, index) => (
          <Comment key={index} text={comment} />
        ))}
      </div>
      
      <textarea
        placeholder="Add a comment..."
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={() => handleAddComment(newComment)}>Add Comment</button>
    </div>
  );
};

export default Task;


