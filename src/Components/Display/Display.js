import React from 'react';

export default function Display({ sun, moon }) {
  return (
    <div>
      <img alt={sun} src={`${process.env.PUBLIC_URL}/signs/${sun}.png`} />
      <img alt={moon} src={`${process.env.PUBLIC_URL}/signs/${moon}.png`} />
    </div>
  );
}
