import React from 'react';
import PropTypes from 'prop-types';
import { FaMedium } from 'react-icons/fa';

function BlogCard({ title, description, url, image }) {
  return (
    <div className="blog-card blog-card--elegant">
      {image && (
        <a href={url} target="_blank" rel="noopener noreferrer" className="blog-card-image-link">
          <div className="blog-card-image">
            <img src={image} alt={title} />
          </div>
        </a>
      )}
      <div className="blog-card-content">
        <a href={url} target="_blank" rel="noopener noreferrer" className="blog-card-title">
          <FaMedium className="blog-card-icon" />
          <span className="blog-card-title-text">{title}</span>
        </a>
        <div className="blog-card-desc">{description}</div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="blog-card-readmore">Read Full Post →</a>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default BlogCard;
