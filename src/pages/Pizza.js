const Pizza = ({ pizzaObj }) => {
  return (
    <li className={`pizzz ${pizzaObj.soldOut ? "Sold Out" : ""}`}>
      <h2>{pizzaObj.name}</h2>
      <img src={pizzaObj.img} alt="Pizzafake" width={200} />
      <p>{pizzaObj.description}</p>
      <p>${pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</p>
      {pizzaObj.soldOut ? <span>Sold Out</span> : <span>{pizzaObj.price}</span>}
    </li>
  );
};
export default Pizza;
