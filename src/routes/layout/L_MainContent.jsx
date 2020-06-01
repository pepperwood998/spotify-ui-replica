import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SearchPage } from '../browse';
import HomePage from '../PageHome';

function MainContent() {
  return (
    <div className='App__main-content'>
      <div className='main-content-container'>
        <div className='main-content-container__scroll-node'>
          <div className='main-content-container__scroll-node-spacer'></div>
          <div className='main-content-container__scroll-node-child'>
            <Switch>
              <Route exact path={['/', '/home']}>
                <HomePage />
              </Route>
              <Route path={['/search', '/genre']}>
                <SearchPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
