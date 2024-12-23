import Order from "./component/Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openTime = 12;
  const closeTime = 22;
  const isOpen = hour >= openTime && hour <= closeTime;
  console.log(isOpen);

  //if (!isOpen) return <p>We are closed by {closeTime}</p>;

  return (
    // <footer>
    //   {isOpen && (
    //     <div>
    //       <p>We're open until {closeTime} :00 Come visit us or order online</p>
    //       <button>Order</button>
    //     </div>
    //   )}
    // </footer>

    <footer>
      {isOpen ? (
        <Order />
      ) : (
        <div>
          <p>We're open until {closeTime} :00 Come visit us or order online</p>
          <button>Order</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;

//new Date().toLocaleDateString()}. We are currently open

//   if (hour >= openTime && hour <= closeTime) {
//     alert("We're open for business");
//   } else {
//     alert("We're close for today");
//   }
