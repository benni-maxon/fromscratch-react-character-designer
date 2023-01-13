import React, { useState } from 'react';
import Display from '../Display/Display.js';
import Editor from '../Editor/Editor.js';

import './Main.css';

export default function Main() {
  const [sun, setSun] = useState('');
  const [moon, setMoon] = useState('');
  const [rising, setRising] = useState('');
  const [sunCount, setSunCount] = useState(0);
  const [moonCount, setMoonCount] = useState(0);
  const [risingCount, setRisingCount] = useState(0);
  const [affirmations, setAffirmations] = useState([]);

  return (
    <div className="main-div">
      <Editor
        setSun={setSun}
        setMoon={setMoon}
        setRising={setRising}
        setSunCount={setSunCount}
        setMoonCount={setMoonCount}
        setRisingCount={setRisingCount}
        setAffirmations={setAffirmations}
      />
      <Display
        sun={sun}
        moon={moon}
        rising={rising}
        sunCount={sunCount}
        moonCount={moonCount}
        risingCount={risingCount}
        affirmations={affirmations}
      />
    </div>
  );
}
