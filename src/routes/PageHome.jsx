import React from 'react';
import { CollectionShort } from '../components/collections';

function HomePage() {
  const reacentlyPlayed = [
    {
      id: '53431',
      type: 'playlist',
      name: 'Just Listen',
      description:
        'Emotional, joyful, deep tunes for all the "chill enthusiast" with my finest choices in every song.',
      cover: 'https://i.scdn.co/image/ab67706c0000da840c68cc15589c75998d969dfd'
    }
  ];

  return (
    <div className='main-content'>
      <div className='page-home content-spacing'>
        <section aria-label='Recently played'>
          <CollectionShort
            title='Recently played'
            items={reacentlyPlayed}
            url='/'
          />
        </section>
      </div>
    </div>
  );
}

export default HomePage;
