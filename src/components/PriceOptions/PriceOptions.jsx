import PropTypes from 'prop-types';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to gym facilities",
            "Basic workout equipment",
            "Locker room access"
          ],
          "price": 29.99
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "Access to gym facilities",
            "Full range of workout equipment",
            "Group fitness classes",
            "Personal training sessions",
            "Locker room access"
          ],
          "price": 49.99
        },
        {
          "id": 3,
          "name": "VIP Membership",
          "features": [
            "Access to gym facilities",
            "Premium workout equipment",
            "Group fitness classes",
            "Personal training sessions",
            "Sauna and spa access",
            "Locker room access"
          ],
          "price": 79.99
        }
      ]
      
    return (
        <div className='grid grid-cols-3 gap-6 mt-10'>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

PriceOptions.propTypes = {
    
};

export default PriceOptions;