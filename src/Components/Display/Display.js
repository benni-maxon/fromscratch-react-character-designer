import React from 'react';

export default function Display({ sun }) {
  return (
    <div>
      <img alt={sun} src={`${process.env.PUBLIC_URL}/signs/${sun}.png`} />
    </div>
  );
}
