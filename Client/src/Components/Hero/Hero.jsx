import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure a better education for a better world</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora alias cumque id porro. Placeat, et reiciendis minima laudantium beatae deb</p>
            <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
