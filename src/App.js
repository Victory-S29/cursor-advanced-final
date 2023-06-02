import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import changeLanguageAction from './store/actions/lang.action';
import Button from './style/Button';
import MainPage from './pages/main-page/MainPage';
import Error from './pages/error/Error';
import ProjectDetails from './pages/project-detail/ProjectDetails';
import Skills from './pages/skills/Skills';
import Experience from './pages/experience/Experience';

function App() {
  const [lang, setLanguage] = useState("en")
  const dispatch = useDispatch();

  const changeLanguage = () => {
    if (lang === "en") { setLanguage("ua") }
    else { setLanguage("en") }
    const language = {
      lang,
    }
    dispatch(changeLanguageAction(language));
  }

  return (
    <Fragment>
      <Button onClick={changeLanguage}>
        {lang === "en" ? "EN" : "UA"}
      </Button>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="projects">
          <Route path=":projectId" element={<ProjectDetails />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </Fragment>
  );
}

export default App;
