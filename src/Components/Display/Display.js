import React from 'react';

import './Display.css';

export default function Display({
  sun,
  moon,
  rising,
  sunCount,
  moonCount,
  risingCount,
  affirmations,
}) {
  return (
    <div className="signs-and-stats-div">
      <div className="signs-div">
        <img alt={sun} src={`./signs/${sun}.png`} />
        <img alt={moon} src={`./signs/${moon}.png`} />
        <img alt={rising} src={`./signs/${rising}.png`} />
      </div>
      <div className="stats-div">
        <p className="stats-p">
          You have changed your Sun Sign {sunCount} time(s), <br />
          your Moon Sign {moonCount} time(s), <br />
          and your Rising Sign {risingCount} time(s).
        </p>
        <h2>Your Affirmations:</h2>
        <ul>
          {affirmations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
