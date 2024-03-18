import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const {name, price, features} = option
  return (
    <div className="bg-blue-300 p-2 rounded-2xl text-center text-xl ">
      <h2 className="mt-6">
        <span className="text-4xl font-bold">$ {price}</span>
        <span>/month</span>
      </h2>
      <h2 className="text-2xl font-semibold my-4">{name}</h2>
      <div className="p-2 mb-5">
        {
            features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
        }
      </div>
      <button className="btn btn-primary text-xl">Buy Membership</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
