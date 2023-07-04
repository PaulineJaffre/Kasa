import './gallery.scss'
//import { useState } from "react"
import PropTypes from 'prop-types'

function Gallery(props) {
    return (
        <div>
            <section className='accoTitle'>
                <h2>{props.title}</h2>
            </section>

            <section className='accoHost'>
                <p>{props.host}</p>
                <img className={props.imageClassName} src={props.image} alt={props.imageAlt} />
            </section>

            <section className='accoLocation'>
                <p>{props.location}</p>
            </section>


            <section className='accoTags'>
                <ul>
                    <li>{props.tags}</li>
                    <li>{props.tags}</li>
                    <li>{props.tags}</li>
                </ul>
            </section>

            <section className='accoRating'>
                <p>Ratings to do</p>
            </section>

        </div>
    )
}




  Gallery.propTypes = {
    imageClassName: PropTypes.string,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    title: PropTypes.string,
    host: PropTypes.string,
    location: PropTypes.string,
    tags: PropTypes.string,
}

export default Gallery