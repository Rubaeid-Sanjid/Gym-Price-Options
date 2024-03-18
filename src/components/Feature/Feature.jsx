import PropTypes from 'prop-types';
import { TiTick } from "react-icons/ti";

const Feature = ({feature}) => {
    return (    
        <h3 className='flex items-center'><TiTick /> {feature}</h3>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
};

export default Feature;