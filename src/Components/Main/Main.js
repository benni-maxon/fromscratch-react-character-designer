import React, { useState } from 'react';
import Display from '../Display/Display.js';
import Editor from '../Editor/Editor.js';

export default function Main() {
  const [sun, setSun] = useState('');

  return (
    <div>
      <Editor setSun={setSun} />
      <Display sun={sun} />
    </div>
  );
}
