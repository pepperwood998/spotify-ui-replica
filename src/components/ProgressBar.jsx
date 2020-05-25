import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import useEffectSkip from './hooks/HookUseEffectSkip';

ProgressBar.propTypes = {
  label: PropTypes.string,
  initPer: PropTypes.number,
  onChangeProgress: PropTypes.func
};
ProgressBar.defaultProps = {
  label: 'Change progress',
  initPer: 0,
  onChangeProgress: per => per
};

function ProgressBar(props) {
  const [progressBarActive, setProgressBarActive] = useState(false);
  const [progress, setProgress] = useState(props.initPer);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const progressRef = useRef();

  let progressBarClasses = 'progress-bar';
  if (progressBarActive) progressBarClasses += ' progress-bar--active';

  useEffectSkip(() => {
    if (clicked) {
      document.addEventListener('mouseup', handleRelease);
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      document.removeEventListener('mouseup', handleRelease);
      document.removeEventListener('mousemove', handleMouseMove);
      if (!hovered) setProgressBarActive(false);
    }

    return () => {
      document.removeEventListener('mouseup', handleRelease);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [clicked]);
  useEffectSkip(() => {
    props.onChangeProgress(progress);
  }, [progress]);

  const handleClick = e => {
    e.preventDefault();

    setClicked(true);
    setProgress(calcProgressPercent(e, progressRef));
  };
  const handleRelease = e => {
    e.preventDefault();

    setClicked(false);
  };
  const handleMouseMove = e => {
    e.preventDefault();

    if (clicked) setProgress(calcProgressPercent(e, progressRef));
  };

  return (
    <div
      className={progressBarClasses}
      ref={progressRef}
      onMouseOver={e => {
        e.preventDefault();
        setHovered(true);
        setProgressBarActive(true);
      }}
      onMouseLeave={e => {
        e.preventDefault();
        setHovered(false);
        if (!clicked) setProgressBarActive(false);
      }}
      onMouseDown={handleClick}
      onMouseUp={handleRelease}
      onMouseMove={handleMouseMove}
    >
      <div className='progress-bar__bg middle-absolute'>
        <div className='progress-bar__fg-wrapper'>
          <div
            className='progress-bar__fg'
            style={{ transform: `translateX(${progress - 100}%)` }}
          ></div>
        </div>
        <button
          aria-label={props.label}
          className='progress-bar__slider middle-absolute'
          style={{ left: `${progress}%` }}
        ></button>
      </div>
    </div>
  );
}

const calcProgressPercent = (e, progressRef) => {
  let mouseX = e.clientX;
  let progressBardRect = progressRef.current.getBoundingClientRect();
  let progressBarX = progressBardRect.x;
  let seekedPercent =
    (Math.max(0, Math.min(progressBardRect.width, mouseX - progressBarX)) /
      progressBardRect.width) *
    100;

  return seekedPercent;
};

export default ProgressBar;
