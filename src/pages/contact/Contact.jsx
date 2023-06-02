import React, { Fragment } from 'react';
import "./Contact.css";
import text from "../../text";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Contact = () => {
    const language = useSelector((state) => state.lang.lang);
    return (
        <Fragment>
            <div className='contact-section'>
                <ul className='contact-list'>
                    <li className='contact-list-li'>
                        <a className='contact-a' href={`tel:${text[language].Phone}`}>{text[language].contacts.Phone}</a>
                    </li>
                    <li className='contact-list-li'>
                        <a className='contact-a' href={`mailto:${text[language].Gmail}`}>Gmail</a>
                    </li>
                    <li className='contact-list-li'>
                        <a className='contact-a' href={`${text[language].GitHub}`}>GitHub</a>
                    </li>
                    <li className='contact-list-li'>
                        <a className='contact-a' href={`mailto:${text[language].LinkedIn}`}>LinkedIn</a>
                    </li>
                </ul>
                <p className='contact-place'>{text[language].place}: {text[language].contacts.Place}</p>
            </div>

            <div className='link-section'>
                <Link to='/' className="GoBack">{text[language].btnText}</Link>
            </div>
        </Fragment>

    );
};

export default Contact;