import touchupPrices from "../assets/touchups_prices.png";

const TouchUps = () => {
  return (
    <div className="touchups d-flex justify-content-center mt-4">
      <img
        className="img-fluid"
        src={touchupPrices}
        alt="Touchups prices"
      />
    </div>
  );
};

export default TouchUps;
