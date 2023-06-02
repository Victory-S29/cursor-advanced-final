import React from 'react';
import "./Skills.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import text from '../../text';

const Skills = () => {
    const language = useSelector((state) => state.lang.lang);
    const skill = useSelector((state) => state.skills.skills[language]);
    return (
        <div className='skills-section'>
            {skill.map(skill => {
                return (
                    <div className='skill-div'>
                        <p className='skill-name'>{skill.name}</p>
                        <p className='skill-description'>{skill.description}</p>
                        <ul className='skill-project--list'>
                            {skill.projects.map(project => {
                                return (<li className='skill-project'>{project}</li>)
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

export default Skills;