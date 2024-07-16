import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <img className='next-btn' src={next_icon} alt="" />
        <img className='back-btn' src={back_icon} alt="" />
        <div className="slider">
            <ul>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Lynn Njambi</h3>
                                <span>MKU-Thika</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi, et qui sapiente eos, harum libero perferendis dolor, ut est cum optio sed aut at. Blanditiis doloribus illo voluptates <cum className=""></cum>
                        <cum className=""></cum></p>
                    </div>
                </li>
                <li>
                <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Mercy Mwende</h3>
                                <span>JKUAT</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi, et qui sapiente eos, harum libero perferendis dolor, ut est cum optio sed aut at. Blanditiis doloribus illo voluptates <cum className=""></cum>
                        <cum className=""></cum></p>
                    </div>
                </li>
                <li>
                <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Suzzy Nana</h3>
                                <span>USIU</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi, et qui sapiente eos, harum libero perferendis dolor, ut est cum optio sed aut at. Blanditiis doloribus illo voluptates <cum className=""></cum>
                        <cum className=""></cum></p>
                    </div>
                </li>
                <li>
                <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Laura Muthoni</h3>
                                <span>KU</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi, et qui sapiente eos, harum libero perferendis dolor, ut est cum optio sed aut at. Blanditiis doloribus illo voluptates <cum className=""></cum>
                        <cum className=""></cum></p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Testimonials