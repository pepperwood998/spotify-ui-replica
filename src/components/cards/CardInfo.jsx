import PropTypes from 'prop-types';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

CardInfo.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  cover: PropTypes.string
};

function CardInfo(props) {
  const history = useHistory();
  const url = `/${props.type}/${props.id}`;
  const coverClasses = 'card-info__cover-wrapper';
  const handleClick = () => {
    history.push(url);
  };

  return (
    <div className='card-info-wrapper' onClick={handleClick}>
      <div className='card-info'>
        <div className={coverClasses}>
          <img
            loading='lazy'
            src={props.cover}
            alt={props.name}
            className='card-info__cover'
          />
        </div>
        <div className='card-info__info-container'>
          <Link to={url} title={props.name} className='card-info__name-link'>
            <span className='font5'>{props.name}</span>
          </Link>
          <div className='card-info__description ellipsis--exp two-line font6'>
            <span>{props.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
