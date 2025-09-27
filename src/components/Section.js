import React from 'react';
import PropTypes from 'prop-types';

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      {title && (
        <div className="section-header">
          <h2>{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;

