import React, { useState, useEffect } from 'react';
import './home.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);  

  return (
    <div className="container">
      <h1>NOTLAR</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.name}</h2>
            <p>{post.username}</p>
            <p>{post.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



