import { useState, useEffect } from 'react';

export default function EmojiSlider() {
  const [sliderValue, setSliderValue] = useState(0);
  const [emoji, setEmoji] = useState('😀');

  useEffect(() => {
    updateEmoji();
  }, [sliderValue]);

  function updateEmoji() {
    if (sliderValue < 25) {
      setEmoji('😀');
    } else if (sliderValue < 50) {
      setEmoji('😃');
    } else if (sliderValue < 75) {
      setEmoji('😎');
    } else {
      setEmoji('😴');
    }
  }

  return (
    <div>
      <input
        type="range"
        min={0}
        max={100}
        value={sliderValue}
        onChange={e => setSliderValue(e.target.value)}
      />
      <p type="range">{emoji}</p>
    </div>
  );
}
