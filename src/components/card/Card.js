import 'src/components/card/card.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Card({id, title, cover}) {
    return (
        <Link to={`/accomodation/${id}`} className="card">
            <img src={cover} alt="accomodation"/>
            <span className='cardTitle'>{title}</span>
        </Link>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
}

