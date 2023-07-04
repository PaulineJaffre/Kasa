import './carousel.scss'
import PropTypes from 'prop-types'
//import { Carousel } from 'react-responsive-carousel';

function Carousel(props) {

      return (
          <Carousel>
            <img className={props.pictureClassName} src={props.picture} alt={props.pictureAlt} />
            <img className={props.pictureClassName} src={props.picture} alt={props.pictureAlt} />
            <img className={props.pictureClassName} src={props.picture} alt={props.pictureAlt} />
            <img className={props.pictureClassName} src={props.picture} alt={props.pictureAlt} />
            
          </Carousel>
      );
  }

  Carousel.propTypes = {
    pictureClassName: PropTypes.string,
    picture: PropTypes.string.isRequired,
    pictureAlt: PropTypes.string,
}

  export default Carousel;

