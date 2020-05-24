import React from 'react';
import AvatarPlaceholder from '../../assets/imgs/p_avatar.jfif';
import { GoBackward, GoForward } from '../../assets/svgs';

TopBar.propTypes = {};

function TopBar(props) {
  return (
    <div className='App__top-bar'>
      <header className='top-bar'>
        <div className='top-bar__background' style={{ opacity: 0 }}></div>
        <div className='web-history-navigation'>
          <button className='top-bar-action' title='Go back' type='button'>
            <GoBackward className='icon' />
          </button>
          <button className='top-bar-action' title='Go forward' type='button'>
            <GoForward className='icon' />
          </button>
        </div>
        <div className='top-bar__content'></div>
        <div className='user-box'>
          <button
            className='top-bar-action'
            title='<<insert_user>>'
            type='button'
          >
            <figure className='img-wrapper'>
              <img
                src={AvatarPlaceholder}
                className='image'
                alt='<<insert_user>>'
              />
            </figure>
          </button>
        </div>
      </header>
    </div>
  );
}

export default TopBar;
