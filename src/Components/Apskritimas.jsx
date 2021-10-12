function Apskritimas({ color, buttonText }) {
  return (
    <div
      className="apskritimas"
      style={{
        backgroundColor: color,
      }}
    >
      <button>{buttonText}</button>
    </div>
  );
}
export default Apskritimas;
