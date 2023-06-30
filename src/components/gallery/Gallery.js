import './gallery.scss'

import PropTypes from 'prop-types'

function Gallery(props) {
    return (
        <a href={`/accomodation/${props.id}`} className="card">
            <img src={props.cover} alt="accomodation"/>
            <span className='cardTitle'>{props.title}</span>
        </a>
    )
}

Gallery.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
}

export default Gallery