import React from 'react';

export default function Display({ sun, moon, rising, sunCount }) {
  return (
    <div>
      <div className="signs-div">
        <img alt={sun} src={`${process.env.PUBLIC_URL}/signs/${sun}.png`} />
        <img alt={moon} src={`${process.env.PUBLIC_URL}/signs/${moon}.png`} />
        <img alt={rising} src={`${process.env.PUBLIC_URL}/signs/${rising}.png`} />
      </div>
      <div className="stats-div">
        <p>You have changed your Sun Sign {sunCount} times. </p>
      </div>
    </div>
  );
}
