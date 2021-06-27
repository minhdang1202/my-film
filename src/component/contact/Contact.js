import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <section className = 'contact'>
            <h2>Contact Me</h2>
            <span>Get in touch</span>
            <div className='contact-container'>
                <div>
                    <div className= 'contact-infomation'>
                        <i class="fas fa-phone-volume"></i>
                        <div className = 'infomation-detail'>
                            <h2>Call Me</h2>
                            <p>0963889106</p>
                        </div>
                    </div>
                    <a href = 'https://mail.google.com/mail/u/0/#inbox' target = 'blank' className= 'contact-infomation'>
                        <i class="far fa-envelope"></i>
                        <div className = 'infomation-detail'>
                            <h2>Gmail</h2>
                            <p>Vuminhdang20@gmail.com</p>
                        </div>
                    </a>
                    <a href="https://www.google.com/maps/place/Y%C3%AAn+Tr%E1%BB%8B,+%C3%9D+Y%C3%AAn,+Nam+%C4%90%E1%BB%8Bnh,+Vi%E1%BB%87t+Nam/@20.229368,106.0581397,14z/data=!4m13!1m7!3m6!1s0x313671501c23c5e9:0x46497151b9fcef03!2zWcOqbiBUcuG7iywgw50gWcOqbiwgTmFtIMSQ4buLbmgsIFZp4buHdCBOYW0!3b1!8m2!3d20.229368!4d106.0581397!3m4!1s0x313671501c23c5e9:0x46497151b9fcef03!8m2!3d20.229368!4d106.0581397" className= 'contact-infomation' target = 'blank'>
                        <i class="fas fa-map-marker-alt"></i>
                        <div className = 'infomation-detail'>
                            <h2>Address</h2>
                            <p>Nam Dinh, Viet Nam</p>
                        </div>
                    </a>
                </div>

                <form className = 'contact-form'>
                    <div className = 'contact-inputs'>
                        <div className = 'contact-content'>
                            <label className = 'contact-lable'>Name</label>
                            <input type = 'text' className = 'contact-input'></input>
                        </div>
                        <div className = 'contact-content'>
                            <label className = 'contact-lable'>Phone Number</label>
                            <input type = 'text' className = 'contact-input'></input>
                        </div>
                    </div>
                    <div className = 'contact-content'>
                        <label className = 'contact-lable'>Email</label>
                        <input type = 'text' className = 'contact-input'></input>
                    </div>
                    <div className = 'contact-content'>
                        <label className = 'contact-lable'>Message</label>
                        <textarea type = 'text' cols = '0' rows = '7' className = 'contact-input'></textarea>
                    </div>
                    <button>Send Message <i className="far fa-share-square"></i></button>
                </form>
            </div>
        </section>
    )
}

export default Contact
