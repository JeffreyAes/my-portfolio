import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xpzelypp");
    
    return (
        <section className="section-contact" id='section-contact'>
            <div class="row">
                <div class="contact">
                    <div class="contact__form">
                        <form className='form' onSubmit={handleSubmit}>
                            <div class="u-margin-bottom-medium">
                                <h2 class="heading-secondary">
                                    Contact me!
                                </h2>
                            </div>


                            <div className="form__group">
                                <input class="form__input" placeholder="Name" required
                                    id="name"
                                    type="text"
                                    name="name"
                                />
                                <label htmlFor="name" className='form__label'>
                                    Name
                                </label>
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="form__group">
                                <input class="form__input" placeholder="Email" required
                                    id="email"
                                    type="email"
                                    name="email"
                                />
                                <label htmlFor="email" className='form__label'>
                                    Email Address
                                </label>
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="form__group">

                                <textarea class="form__input" placeholder="Message" required
                                    id="message"
                                    name="message"
                                    rows={12}
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <div class="form__group">

                            <button className='btn btn--orange'  type="submit" disabled={state.submitting}>
                                Submit
                            </button>
                            </div>
                        </form>
                        {state.succeeded? 
    <p className='paragraph'>Submission successful!</p> : ""
    }
                    </div>
                </div>
            </div>
        </section>
    );
}
function Contact() {
    return (
        <ContactForm />
    );
}
export default Contact;
