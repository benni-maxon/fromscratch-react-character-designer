import React, { useState } from 'react';
import Display from '../Display/Display.js';
import Editor from '../Editor/Editor.js';

export default function Main() {
  const [sun, setSun] = useState('');
  const [moon, setMoon] = useState('');

  return (
    <div>
      <Editor setSun={setSun} setMoon={setMoon} />
      <Display sun={sun} moon={moon} />
    </div>
  );
}
