import PropTypes from "prop-types";

const PostsList = ({ posts, deletePost, sharePost, reportPost }) => {
  return (
    <div className="topic__container">
      {posts.map((post, index) => (
        <div className="topic__item" key={index}>
          <div>
            <p className="topic__title">Título: {post.Titulo}</p>
            <p className="topic__description">Descrição: {post.Descricao}</p>
          </div>
          <div className="buttonContainer">
            <button className="deleteBtn" onClick={() => deletePost(post.id)}>Excluir</button>
            <button className="shareBtn" onClick={() => sharePost(post)}>Compartilhar</button>
            <button className="reportBtn" onClick={() => reportPost(post.id)}>Denunciar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired,
  sharePost: PropTypes.func.isRequired,
  reportPost: PropTypes.func.isRequired,
};

export default PostsList;