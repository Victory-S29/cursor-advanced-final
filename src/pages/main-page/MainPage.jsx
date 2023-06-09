import React from 'react';
import "./MainPage.css";
import { useSelector } from 'react-redux';
import text from '../../text';
import { Link } from 'react-router-dom';

const MainPage = () => {
    const language = useSelector((state) => state.lang.lang);
    const projects = useSelector((state) => state.projects.projects);

    return (
        <div className='background'>
            <h1 className='main-title'>{text[language].name}</h1>
            <main>
                <p className='main-bio'>{text[language].bio}</p>
                <ul className='project--link-ul'>
                    {projects[language].map((elem) => {
                        return (
                            <li className='project--link-li'>
                                <Link key={elem.id} to={`projects/${elem.id}`} className='project--link'>{elem.name}</Link>
                                <p className='project--description'>{elem.description}</p>
                            </li>
                        )
                    })
                    }
                </ul>
            </main>

            <footer>
                <ul className='footer--link-ul'>
                    {text[language].footer.map((elem) => {
                        return (
                            <li className='footer--link-li'>
                                <Link id={elem.link} key={elem.link} to={`/${elem.link}`} className='footer--link'>{elem.text}</Link>
                            </li>
                        )
                    })
                    }
                    <li className='footer--link-li'>
                        <a href="https://drive.google.com/file/d/19fTH7b-SP4ELAJAZsaeq_9ZAl_jD7FO3/view" className="download-button">
                            {text[language].downloadBtn}
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default MainPage;