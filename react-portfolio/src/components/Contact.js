import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        subject: "",
        message: "",
    })
    function handleFormSubmit(event){
        event.preventDefault()
        console.log(formState);
        window.location.href='mailto:hunt.mustain@gmail.com?subject='+ formState.subject + "&body=" + formState.message
        setFormState({
            name: "",
            subject: "",
            message: "",
        });
    }
    return (
        <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact-mf">
                            <div className="contact-overlay-mf"></div>
                            <div id="contact" className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="title-box-2">
                                            <h5 className="title-left">
                                                Send Me A Message
                                            </h5>
                                        </div>
                                        <div>
                                            <form className="php-email-form" onSubmit={handleFormSubmit}>
                                                <div className="row">
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                                            value = {formState.name}
                                                            onChange = {(event) => setFormState({...formState, name:event.target.value})}
                                                                required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <input type="subject" className="form-control" name="subject" id="subject" placeholder="Subject"
                                                            value = {formState.subject}
                                                            onChange = {(event) => setFormState({...formState, subject:event.target.value})}
                                                                required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea className="form-control" name="message" rows="5" placeholder="Message"
                                                            value = {formState.message}
                                                            onChange = {(event) => setFormState({...formState, message:event.target.value})}
                                                                required></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 text-center my-3">
                                                        <div className="loading">Loading</div>
                                                        <div className="error-message"></div>
                                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                                    </div>
                                                    <div className="col-md-12 text-center">
                                                        <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="title-box-2 pt-4 pt-md-0">
                                            <h5 className="title-left">
                                                Get in Touch
                                            </h5>
                                        </div>
                                        <div className="more-info">
                                            <p className="lead">
                                                Want to get in touch? Send me a message using the contact form to the left, or give me a call or
                                                email below.
                                            </p>
                                            <ul className="list-ico">
                                                <li><span className="bi bi-phone"></span> (903) 277-1960</li>
                                                <li><span className="bi bi-envelope"></span> hunt.mustain@gmail.com</li>
                                            </ul>
                                        </div>
                                        <div className="socials">
                                            <ul>
                                                <li><a href="https://www.facebook.com/hunter.mustain"><span className="ico-circle"><i
                                                    className="bi bi-facebook"></i></span></a></li>
                                                <li><a href="https://twitter.com/huntermustain"><span className="ico-circle"><i
                                                    className="bi bi-twitter"></i></span></a></li>
                                                <li><a href="https://github.com/hmustain"><span className="ico-circle"><i
                                                    className="bi bi-github"></i></span></a></li>
                                                <li><a href="https://www.linkedin.com/in/hunter-mustain-733980160/"><span className="ico-circle"><i
                                                    className="bi bi-linkedin"></i></span></a></li>
                                                    </ul>
                                                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
};

export default Contact;

