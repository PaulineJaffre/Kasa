import PropTypes from 'prop-types'

function Card(props) {
    return (
        <a href={`/accomodation/${props.id}`} className="card">
            <img src={props.cover} alt="accomodation" height={80} width={80} />
            <span>{props.title}</span>
        </a>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
}

export default Card