import React, { useState } from 'react';
import Display from '../Display/Display.js';
import Editor from '../Editor/Editor.js';

export default function Main() {
  const [sun, setSun] = useState('');
  const [moon, setMoon] = useState('');
  const [rising, setRising] = useState('');
  const [sunCount, setSunCount] = useState(0);

  return (
    <div>
      <Editor setSun={setSun} setMoon={setMoon} setRising={setRising} setSunCount={setSunCount} />
      <Display sun={sun} moon={moon} rising={rising} sunCount={sunCount} />
    </div>
  );
}
