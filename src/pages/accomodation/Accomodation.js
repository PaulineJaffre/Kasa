import './accomodation.scss'
import Gallery from 'src/components/gallery/Gallery'
import accomodations from 'src/data/data.json';


export default function Accomodation(){
    return (
      <div className="accomodation">
        {accomodations.map((accomodation)=> (
        <Gallery 
        key={accomodation.id} 
        id={accomodation.id} 
        title={accomodation.title} 
        cover={accomodation.cover} 
        />
        ))}
        </div>
    )
  }