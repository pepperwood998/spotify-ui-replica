import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Add,
  Download,
  Home,
  HomeActive,
  Library,
  LibraryActive,
  Logo,
  Search,
  SearchActive
} from '../../assets/svgs';

NavBar.propTypes = {};

function NavBar(props) {
  const playlists = [
    { id: '12348', name: 'Mostly Blue' },
    { id: '2345E', name: 'Easy Acoustic' },
    { id: '73546', name: 'Your Top Songs 2019' },
    { id: '52346', name: 'Acoustic Hits' },
    { id: '86474', name: 'Songs to Sing in the Car' },
    { id: '75645', name: 'Vietnamese Finest' },
    { id: '79839', name: 'Alone Again' },
    { id: '64634', name: 'Just Listen' },
    { id: '98453', name: 'Fresh Chill' },
    { id: '35623', name: 'Guardians Of The Galaxy Vol.1&2' }
  ];

  return (
    <div className='App__nav-bar'>
      <nav className='nav-bar' role='navigation' aria-label='Main menu'>
        <div className='nav-bar__header' role='banner'>
          <NavLink to='/' className='logo-link'>
            <Logo className='logo--text' />
          </NavLink>
        </div>
        <div className='nav-bar__entry-points'>
          <ul className='entry-points'>
            <li>
              <div className='nav-bar-item'>
                <NavLink to='/home' className='nav-bar-link link-subtle'>
                  <div className='nav-bar-link--text-with-icon-container'>
                    <div className='nav-bar-icon off'>
                      <Home />
                    </div>
                    <div className='nav-bar-icon active'>
                      <HomeActive />
                    </div>
                    <span className='nav-bar-link__text font1'>Home</span>
                  </div>
                </NavLink>
              </div>
            </li>
            <li>
              <div className='nav-bar-item'>
                <NavLink to='/search' className='nav-bar-link link-subtle'>
                  <div className='nav-bar-link--text-with-icon-container'>
                    <div className='nav-bar-icon off'>
                      <Search />
                    </div>
                    <div className='nav-bar-icon active'>
                      <SearchActive />
                    </div>
                    <span className='nav-bar-link__text font1'>Search</span>
                  </div>
                </NavLink>
              </div>
            </li>
            <li>
              <div className='nav-bar-item'>
                <NavLink to='/library' className='nav-bar-link link-subtle'>
                  <div className='nav-bar-link--text-with-icon-container'>
                    <div className='nav-bar-icon off'>
                      <Library />
                    </div>
                    <div className='nav-bar-icon active'>
                      <LibraryActive />
                    </div>
                    <span className='nav-bar-link__text font1'>
                      Your Library
                    </span>
                  </div>
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
        <div className='nav-bar__quick-access'>
          <div className='quick-access'>
            <h2 className='quick-access__header font3'>Playlists</h2>
            <button type='button' className='nav-bar-extra-item'>
              <Add className='icon' />
              <span className='font1'>Create Playlist</span>
            </button>
            <NavLink to='/favorite' className='nav-bar-extra-item'>
              <div className='icon favorite spoticon-heart-active spoticon-20'></div>
              <span className='font1'>Liked Songs</span>
            </NavLink>
            <hr className='quick-access__divider' />
            <ul className='quick-access__playlists'>
              {playlists.map((p, i) => (
                <li className='quick-access-item-playlist' key={i}>
                  <NavLink
                    to={`/playlist/${p.id}`}
                    className='quick-access-item-playlist__link blur-click'
                  >
                    <div className='quick-access-item-playlist__text-wrapper ellipsis--normal'>
                      <span>{p.name}</span>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='nav-bar__footer'>
          <div className='nav-bar-item'>
            <NavLink to='/download' className='nav-bar-link link-subtle'>
              <div className='nav-bar-link--text-with-icon-container'>
                <div className='nav-bar-icon download off'>
                  <Download />
                </div>
                <div className='nav-bar-icon download active'>
                  <Download />
                </div>
                <span className='nav-bar-link__text font1'>Install App</span>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
