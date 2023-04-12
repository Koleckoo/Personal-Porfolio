import "./ContactMe.css"
import {MdOutlineEmail} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'
import emailjs from 'emailjs-com'
import { useRef } from "react"

export default function ContactMe() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ixib287', 'template_rd7lo5f', form.current, 'mDwUjzxSrLIhiQC7O')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

    return <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail className="contact__option-icon"/>
                    <h4>Email</h4>
                    <h4>jan.illetsko@gmail.com</h4>
                    <a href="mailto:jan.illetsko@gmail.com">Send me an e-mail</a>
                </article>
                <article className="contact__option">
                    <CiLinkedin className="contact__option-icon"/>
                    <h4>LinkedIn</h4>
                    <h4>Jan Illetško</h4>
                    <a href="https://www.linkedin.com/in/janilletsko/" target="_blank" rel="noopener noreferrer">Send me a message</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Full Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" id="" rows="7" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
    </section>  
}