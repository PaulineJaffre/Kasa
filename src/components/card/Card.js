import './card.scss'
import PropTypes from 'prop-types'


function Card({ title, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <img src={picture} alt="accomodation" height={80} width={80} />
            <span>{title}</span>
        </div>
    )
}
 

Card.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string,
}

export default Card