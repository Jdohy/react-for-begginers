function Convert({ money, onChange, text, invert, label, imoji }) {
  return (
    <div>
      <label>{label}</label>
      &nbsp;
      <input
        value={money}
        onChange={onChange}
        type="number"
        placeholder={text}
        disabled={invert}
      ></input>
    </div>
  );
}

export default Convert;
