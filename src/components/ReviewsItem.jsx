import PropTypes from 'prop-types';

export default function ReviewsItem({ author, content }) {
  return (
    <>
      <h2>Author: {author} </h2>
      <p> {content}</p>
    </>
  );
}

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
