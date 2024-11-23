export function Card({ name, price, image }) {
  return (
    <div
      style={{
        background: "red",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <img src={image} alt="" />
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  );
}
