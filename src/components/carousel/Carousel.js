import { useState } from 'react';
import PropTypes from 'prop-types'
import ArrowRight from "src/assets/arrowRight.png"
import ArrowLeft from "src/assets/arrowLeft.png"
import './carousel.scss'

export default function Carousel({ imageSlider }) { //prop appelée imageSlider

  const [currentIndex, setCurrentIndex] = useState(0) //hook useState pour déclarer une variable d'état currentIndex, qui est initialement définie sur 0. setCurrentIndex est une fonction qui peut être utilisée pour mettre à jour la valeur de currentIndex.

  const nextSlide = () => {
      setCurrentIndex(currentIndex + 1)
      if (currentIndex === imageSlider.length - 1)
          setCurrentIndex(0)
  } //Cette fonction nextSlide est utilisée pour passer à la diapositive suivante dans le carrousel. Elle met à jour currentIndex en ajoutant 1. Si currentIndex atteint la dernière diapositive (imageSlider.length - 1), currentIndex est réinitialisé à 0, ce qui crée une boucle dans le carrousel.

  const prevSlide = () => {
      setCurrentIndex(currentIndex - 1)
      if (currentIndex === 0)
          setCurrentIndex(imageSlider.length - 1)
  } //Cette fonction prevSlide est utilisée pour passer à la diapositive précédente dans le carrousel. Elle met à jour currentIndex en soustrayant 1. Si currentIndex est déjà sur la première diapositive (0), currentIndex est mis à jour pour pointer vers la dernière diapositive (imageSlider.length - 1), créant ainsi une boucle dans le carrousel.

  return (
      <section style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }} className='carousel'>
          {imageSlider.length > 1 &&
              <>
                  <img
                      className='carouselArrows arrowRight'
                      src={ArrowRight}
                      alt="show next slider"
                      onClick={nextSlide}
                  />
                  <img
                      className='carouselArrows arrowLeft'
                      src={ArrowLeft}
                      alt="show previous slider"
                      onClick={prevSlide}
                  />
                  <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
              </>
          }
      </section>
  ) //renvoie une section contenant une image de fond définie en fonction de l'élément imageSlider[currentIndex]
  //Si imageSlider a plus d'une image (imageSlider.length > 1), le rendu inclut également deux images (flèches) pour naviguer dans les diapositives.
  //le rendu inclut un paragraphe affichant l'index actuel de la diapositive sur le nombre total de diapositives (currentIndex + 1 / imageSlider.length).
}

Carousel.propTypes = {
  pictures: PropTypes.string,
  imageSlider: PropTypes.array,
  }



