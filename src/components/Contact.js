import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
            <form className="form">
                <div className="form__data">
                    <div className="form__info">
                        <input
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <textarea
                        placeholder="Message"
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
