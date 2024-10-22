import { useState, useEffect } from "react";

const Fetch = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div>
      <>
        {posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </>
    </div>
  );
};
export default Fetch;