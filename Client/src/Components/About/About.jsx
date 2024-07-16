import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img className='about-img' src={about_img} alt="" />
            <img className='play-icon' src={play_icon} alt="" />
        </div>
        <div className="about-right">
           <h3>ABOUT PATH 4 HER</h3>
           <h2>Nurturing Tomorrow's Leaders Today</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel veritatis tempore, nesciunt libero, voluptas ipsam inventore mollitia recusandae nemo iusto expedita harum minus commodi aut quam veniam facilis fuga.
           In debitis error necessitatibus reprehenderit maxime odit ut qui. Cumque perspiciatis beatae maxime fugit odit veritatis, et itaque. Expedita officiis nobis, laboriosam ipsum perspiciatis quasi perferendis nihil aliquid eos reiciendis.
           Ad esse dolorem eveniet alias nobis culpa id veritatis exercitationem consectetur neque cum quia fugiat rerum aspernatur, officia obcaecati. Quia nisi vero, ad quae omnis veritatis excepturi iusto nobis error.
          
          </p>

        </div>
      
    </div>
  )
}

export default About
