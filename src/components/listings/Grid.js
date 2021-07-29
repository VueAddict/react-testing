/* eslint-disable linebreak-style */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import Single from './Single';

function Grid({ items }) {
  const renderList = () => items.map((item) => <Single key={item.id} item={item} />);
  return (
    <div>
      <div className="row">
        <ul>{renderList()}</ul>
      </div>
    </div>
  );
}

Grid.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Grid;
