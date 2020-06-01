import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { CardInfo } from '../cards';

CollectionShort.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  url: PropTypes.string
};

function CollectionShort(props) {
  return (
    <div className='grid-display grid-short'>
      <div className='grid-display__header'>
        <div className='grid-display__title ellipsis--normal'>
          <Link to={props.url} className='link-hover-underline'>
            <h2 className='grid-display__title-text font4'>{props.title}</h2>
          </Link>
        </div>
        <Link
          to={props.url}
          className='grid-display__see-all link-hover-underline'
        >
          <span className='font3'>See all</span>
        </Link>
      </div>
      {props.items.map((v, i) => (
        <CardInfo {...v} key={i} />
      ))}
    </div>
  );
}

export default CollectionShort;
