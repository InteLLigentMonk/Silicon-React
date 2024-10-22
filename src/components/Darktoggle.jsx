export default function Darktoggle() {
  return (
    <>
      <label htmlFor="dark-toggle">Dark Mode</label>
      <label className="toggle" aria-label="Toggle dark-mode">
        <input type="checkbox" id="dark-toggle" />
        <span className="slider round"></span>
      </label>
    </>
  );
}
