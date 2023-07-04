import './accomodation.scss'
import Gallery from 'src/components/gallery/Gallery'
import Collapse from "src/components/collapse/Collapse";
import accomodationData from 'src/data/data.json';
import { useParams } from 'react-router-dom';
import Carousel from "src/components/carousel/Carousel";


export default function Accomodation(){
  
  const { id } = useParams(); // ID souhaité
  const filteredAccomodation = accomodationData.find(accomodation => accomodation.id === id);

    return (
      <div>

      <Gallery title={filteredAccomodation.title} host={filteredAccomodation.hosts} location={filteredAccomodation.location} tags={filteredAccomodation.tags} /> 

      <section className='container-carousel'>
      {filteredAccomodation && (
      <Carousel key={filteredAccomodation.id} id={filteredAccomodation.id} pictures="Equipements" equipments ={filteredAccomodation.equipments}  />
      )}
      </section>

      
       
      <div className="accomodation">
      <section className='container-collapses'>
      {filteredAccomodation && (
      <Collapse key={filteredAccomodation.id} id={filteredAccomodation.id} pictureClassName="accomodationPictures" picture={filteredAccomodation.pictures} pictureAlt="Photo du logement" />
      )}
      </section>

      <section className='container-collapses'>
      {filteredAccomodation && (
      <Collapse key={filteredAccomodation.id} id={filteredAccomodation.id} title="Equipements" equipments ={filteredAccomodation.equipments}  />
      )}
      </section>
      </div>
      
    </div> 
    )
}

