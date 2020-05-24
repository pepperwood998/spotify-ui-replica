import React from 'react';
import { NavLink } from 'react-router-dom';
import TestReleaseCover from '../../assets/imgs/t_release-cover.jfif';
import { GoBackward, Music } from '../../assets/svgs';
import { ProgressBar } from '../../components';

NowPlayingBar.propTypes = {};

function NowPlayingBar(props) {
  return (
    <div className='App__now-playing-bar'>
      <footer className='now-playing-bar-wrapper'>
        <div className='now-playing-bar' role='complementary'>
          <div className='now-playing-bar__left'>
            <div
              className='now-playing'
              role='contentinfo'
              aria-label='<<insert_now_playing>>'
            >
              <div className='cover-container'>
                <NavLink
                  to='/playlist/72343'
                  aria-label='Now playing: <<insert_song>> by <<insert_artist>>'
                >
                  <div className='cover-art'>
                    <div className='icon'>
                      <Music className='target' />
                    </div>
                    <div className='img-wrapper'>
                      <img
                        className='image'
                        alt='playlist'
                        src={TestReleaseCover}
                      />
                    </div>
                  </div>
                </NavLink>
                <button className='cover-expander' aria-label='Expand'>
                  <GoBackward className='icon' />
                </button>
              </div>
              <div className='track-information ellipsis--normal'>
                <div className='track-name ellipsis--normal'>
                  <span>
                    <NavLink to='/release/84938'>Morning Breeze</NavLink>
                  </span>
                </div>
                <div className='track-artists ellipsis--normal font2'>
                  <span>
                    <NavLink to='/artist/23493'>Juke Ross</NavLink>
                  </span>
                </div>
              </div>
              <div className='control-button-wrapper'>
                <button className='control-button spoticon-heart spoticon-20 blur-click'></button>
              </div>
              <div className='now-playing__pinp-toggle'>
                <button className='control-button spoticon-pinp spoticon-20 blur-click'></button>
              </div>
            </div>
          </div>
          <div className='now-playing-bar__center'>
            <div
              className='player-controls'
              role='complementary'
              aria-label='Player controls'
              dir='ltr'
            >
              <div className='player-controls__buttons'>
                <div className='control-button-wrapper'>
                  <button className='control-button spoticon-shuffle spoticon-20 blur-click'></button>
                </div>
                <div className='control-button-wrapper'>
                  <button className='control-button spoticon-skip-back spoticon-20 blur-click'></button>
                </div>
                <div className='control-button-wrapper'>
                  <button className='control-button control-button--circled spoticon-play spoticon-20 blur-click'></button>
                </div>
                <div className='control-button-wrapper'>
                  <button className='control-button spoticon-skip-forward spoticon-20 blur-click'></button>
                </div>
                <div className='control-button-wrapper'>
                  <button className='control-button spoticon-repeat spoticon-20 blur-click'></button>
                </div>
              </div>
              <div className='playback-bar'>
                <div className='playback-bar__progress-time'>0:00</div>
                <ProgressBar />
                <div className='playback-bar__progress-time'>3:39</div>
              </div>
            </div>
          </div>
          <div className='now-playing-bar__right'>
            <div className='extra-controls-wrapper'>
              <div className='extra-controls'>
                <div className='control-button-wrapper'>
                  <button
                    className='control-button spoticon-play-queue spoticon-20'
                    title='Queue'
                    aria-label='Open play queue'
                  ></button>
                </div>
                <div className='control-button-wrapper'>
                  <button
                    className='control-button spoticon-devices spoticon-20'
                    title='Devices'
                    aria-label='Connect to a device'
                  ></button>
                </div>
                <div className='volume-bar' dir='ltr'>
                  <div className='control-button-wrapper'>
                    <button
                      className='control-button spoticon-volume-loud spoticon-20'
                      title='Volume'
                      aria-label='Mute'
                    ></button>
                  </div>
                  <ProgressBar
                    label='Change volume'
                    initPer={50}
                    onChangeProgress={per => {
                      console.log(per);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NowPlayingBar;
