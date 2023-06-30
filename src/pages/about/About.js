import imgBannerAbout from "src/assets/banner-montagnes.png"
import Banner from 'src/components/banner/Banner';
import './about.scss';
import Collapse from "src/components/collapse/Collapse";
import collapseData from 'src/components/collapse/collapse.json';

export default function About(){
  return (
    <div className="about">
        <Banner image = { imgBannerAbout } imageClassName="about-banner-image" banner ="about-banner" imageAlt ="paysage montagne" />
        <section className='container-collapses'>
          {collapseData.map((data)=> (
            <Collapse key={data.id} id ={data.id} title={data.title} description ={data.description} />
          ))}
        </section>
    </div>
  )
}
