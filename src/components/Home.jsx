import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import PostsList from "./PostsList";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://projeto-bloco-4f62c-default-rtdb.firebaseio.com/posts.json");

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();

      const postsArray = Object.keys(data).map(key => ({
        id: key,
        Titulo: data[key].Titulo,
        Descricao: data[key].Descricao,
      }));

      setPosts(postsArray);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`https://projeto-bloco-4f62c-default-rtdb.firebaseio.com/posts/${postId}.json`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      setPosts(posts.filter(post => post.id !== postId));
      alert("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      <Nav />
      <main className="home">
        <h2 className="homeTitle">Tópicos Criados:</h2>
        <PostsList posts={posts} deletePost={deletePost} />
        <Link to="/create-thread" className="createThreadBtn">
          Crie seu Tópico
        </Link>
      </main>
    </>
  );
};

export default Home;