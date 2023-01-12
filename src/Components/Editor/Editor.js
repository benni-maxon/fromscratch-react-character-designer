import React from 'react';
import './Editor.css';

export default function Editor({ setSun, setMoon, setRising, setSunCount }) {
  const handleSun = (e) => {
    setSun(e.target.value);
    setSunCount((currentState) => {
      return currentState + 1;
    });
  };
  const handleMoon = (e) => {
    setMoon(e.target.value);
  };
  const handleRising = (e) => {
    setRising(e.target.value);
  };
  return (
    <div className="editor">
      <div>
        <label>Sun: </label>
        <select onChange={handleSun}>
          <option value="aries">Aries</option>
          <option value="taurus">Taurus</option>
          <option value="gemini">Gemini</option>
          <option value="cancer">Cancer</option>
          <option value="leo">Leo</option>
          <option value="virgo">Virgo</option>
          <option value="libra">Libra</option>
          <option value="scorpio">Scorpio</option>
          <option value="sagittarius">Sagittarius</option>
          <option value="capricorn">Capricorn</option>
          <option value="aquarius">Aquarius</option>
          <option value="pisces">Pisces</option>
        </select>
      </div>
      <div>
        <label>Moon: </label>
        <select onChange={handleMoon}>
          <option value="aries">Aries</option>
          <option value="taurus">Taurus</option>
          <option value="gemini">Gemini</option>
          <option value="cancer">Cancer</option>
          <option value="leo">Leo</option>
          <option value="virgo">Virgo</option>
          <option value="libra">Libra</option>
          <option value="scorpio">Scorpio</option>
          <option value="sagittarius">Sagittarius</option>
          <option value="capricorn">Capricorn</option>
          <option value="aquarius">Aquarius</option>
          <option value="pisces">Pisces</option>
        </select>
      </div>
      <div>
        <label>Rising: </label>
        <select onChange={handleRising}>
          <option value="aries">Aries</option>
          <option value="taurus">Taurus</option>
          <option value="gemini">Gemini</option>
          <option value="cancer">Cancer</option>
          <option value="leo">Leo</option>
          <option value="virgo">Virgo</option>
          <option value="libra">Libra</option>
          <option value="scorpio">Scorpio</option>
          <option value="sagittarius">Sagittarius</option>
          <option value="capricorn">Capricorn</option>
          <option value="aquarius">Aquarius</option>
          <option value="pisces">Pisces</option>
        </select>
      </div>
    </div>
  );
}
