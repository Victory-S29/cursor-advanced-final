import React from 'react';
import "./Experience.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import text from '../../text';

const Experience = () => {
    const language = useSelector((state) => state.lang.lang);
    const experience = useSelector((state) => state.experience.experience[language]);
    
    return (
        <div className='experience-section'>
            {experience.map(experience => {
                return (
                    <div className='experience-div'>
                        <p className='experience-name'>{experience.name}</p>
                        <p className='experience-description'>{experience.description}</p>

                        <ul className='experience-technology--list'>
                            {experience.technologies.map(technology => {
                                return (<li className='experience-technology'>{technology}</li>)
                            })}
                        </ul>
                        <p className='responsibilities'>Responsibilities</p>
                        <ul className='experience-data--list'>
                            {experience.responsibilities.map(responsibily => {
                                return (<li className='experience-data'>{responsibily}</li>)
                            })}
                        </ul>
                    </div>
                )
            })}
            <div className='link-section'>
                <Link to='/' className="GoBack">{text[language].btnText}</Link>
            </div>
        </div>

    );
};

export default Experience;