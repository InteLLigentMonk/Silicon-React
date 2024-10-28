import { useEffect, useState } from 'react';

export default function Darktoggle() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('dark-mode'))
  );

  function handleChange() {
    setDarkMode((prev) => {
      const newDarkMode = !prev;
      localStorage.setItem('dark-mode', newDarkMode);
      return newDarkMode;
    });
  }

  useEffect(() => {
    if (
      darkMode === null &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDarkMode(true);
      localStorage.setItem('dark-mode', true);
    }
  }, []);

  return (
    <>
      <label htmlFor="dark-toggle">Dark Mode</label>
      <label className="toggle" aria-label="Toggle dark-mode">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={darkMode}
          id="dark-toggle"
        />
        <span className="slider round"></span>
      </label>
    </>
  );
}
