import React, { useState } from 'react';
import { TopBar, NavBar, NowPlayingBar, MainContent } from './routes/layout';
import { THEME } from './utils/constant';

function App() {
  const [theme, setTheme] = useState(THEME.DARK);

  return (
    <div className='App' data-theme={theme}>
      <TopBar />
      <NavBar />
      <NowPlayingBar />
      <MainContent />
    </div>
  );
}

export default App;
