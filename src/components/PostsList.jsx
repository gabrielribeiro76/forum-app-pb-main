import PropTypes from "prop-types";

const PostsList = ({ posts, deletePost }) => {
  return (
    <div className="topic__container">
      {posts.map((post, index) => (
        <div className="topic__item" key={index}>
          <div>
            <p className="topic__title">Título: {post.Titulo}</p>
            <p className="topic__description">Descrição: {post.Descricao}</p>
          </div>
          <button className="deleteBtn" onClick={() => deletePost(post.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default PostsList;