export default function Player({ value }) {
  return (
    <div className={`player ${value === "X" ? "red" : "brown"}`}>{value}</div>
  );
}
