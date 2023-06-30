import 'src/components/banner/banner.scss'
import PropTypes from 'prop-types'
function Banner(props) {
    return (
      <section className="banner">
        <div className={props.banner}>
          <img className={props.imageClassName} src={props.image} alt={props.imageAlt} />
          <h2>{props.title}</h2>
        </div>
      </section>
    );
  }
  

  Banner.propTypes = {
    imageClassName: PropTypes.string,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    banner: PropTypes.string,
    title: PropTypes.string,
}

  export default Banner;