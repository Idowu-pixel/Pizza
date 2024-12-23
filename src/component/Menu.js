import Pizza from "../pages/Pizza";
import { dataSrc } from "../data/pizzaData";
const Menu = () => {
  const data = dataSrc;
  //const data = []; //dataScr
  const dataNum = data.length;

  return (
    <div>
      {dataNum > 0 && (
        <ul>
          {data.map((pizza) => (
            <Pizza key={pizza.name} pizzaObj={pizza} />
          ))}
        </ul>
      )}

      {/* <Pizza
        name="Spinnach Pizza"
        img="/images/matt.jpg"
        description="Tomatoe source spinnach"
        price={10}
      />
      <Pizza
        name="Fungi Pizza"
        img="/images/john.jpg"
        description="Mushroom source and  Tomatoes"
        price={12}
      /> */}
    </div>
  );
};
export default Menu;
