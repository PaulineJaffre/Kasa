import './accomodation.scss'
import Collapse from "src/components/collapse/Collapse";
import datas from 'src/data/data.json';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Carousel from "src/components/carousel/Carousel";
import Error from 'src/pages/notFound/NotFound';
import StarRed from "src/assets/starRed.png"
import StarGrey from "src/assets/starGrey.png"


export default function Accomodation() {

  const { id } = useParams();	 //récupérer l'ID de l'hébergement à partir de l'URL

	const [imageSlider, setImageSlider] = useState([]); //déclare une variable d'état imageSlider qui sera utilisée pour stocker les images de la galerie.
  const dataCurrentAccomodations = datas.filter(data => data.id === id); //filtre les données d'hébergement datas pour trouver l'hébergement correspondant à l'ID spécifié. Les données de cet hébergement sont stockées dans la variable dataCurrentAccomodations.
	
	useEffect(() => {
		const dataCurrentAccomodations = datas.filter(data => data.id === id);
		setImageSlider(dataCurrentAccomodations[0].pictures);
	}, [id]); 
  //mettre à jour la variable d'état imageSlider en fonction de l'ID de l'hébergement passé dans l'URL. Chaque fois que l'ID change, le useEffect est déclenché et il met à jour imageSlider avec les images correspondantes à cet ID.

  
	const name = dataCurrentAccomodations[0].host.name.split(' ');
	const rating = dataCurrentAccomodations[0].rating;
	const description = dataCurrentAccomodations[0].description;
	const equipments = dataCurrentAccomodations[0].equipments;
//Les données de l'hébergement, telles que le nom de l'hôte, la note, la description et les équipements, sont extraites de dataCurrentAccomodations et stockées dans des variables distinctes

	if (dataCurrentAccomodations.length === 0) 
  return <Error />; //renvoie le composant Error pour afficher une page d'erreur.

	return (
		<>
			<Carousel imageSlider={imageSlider} />
			<main className="announce">
				<div className="announce_content">
					<div className="announce_content_infos">
						<h1>{dataCurrentAccomodations[0].title}</h1>
						<p>{dataCurrentAccomodations[0].location}</p>
						<div className='announce_content_infos_button'>
							{dataCurrentAccomodations[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="announce_content_host">
						<div className='announce_content_host_profile'>
							<div className='announce_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAccomodations[0].host.picture} alt="host of this announce" />
						</div>

						<div className="announce_content_host_stars">
							{[...Array(5)].map((star, index) => { //crée un tableau avec 5 éléments vides. Cela est utilisé comme base pour itérer et générer les étoiles.
								const ratingValue = index + 1; //Cela permet d'obtenir la valeur de notation associée à chaque étoile (1 pour la première étoile, 2 pour la deuxième, etc.).
								return (
									<img key={index} src={ratingValue <= rating ? StarRed : StarGrey} alt="star" /> //Si ratingValue est inférieur ou égal à la note donnée (rating), l'étoile est représentée par l'image StarRed. Sinon, elle est représentée par l'image StarGrey.
								)
							})}
						</div>
					</div>
				</div>
				<div className="announce_dropdown">
					<div className="announce_dropdown_item">
						<Collapse title={'Description'} content={description} />
					</div>
					<div className="announce_dropdown_item">
						<Collapse title={'Équipements'} content={equipments} />
					</div>
				</div>
			</main>
		</>
	)
}