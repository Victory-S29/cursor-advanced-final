import { combineReducers, createStore } from "redux"
import ProjectReducer from "./reducers/project.reducer";
import LanguageReducer from "./reducers/lang.reducer";
import SkillsReducer from "./reducers/skills.reducer";
import ExperienceReducer from "./reducers/experience.reducer";

const reducers = {
    projects: ProjectReducer,
    lang: LanguageReducer,
    skills: SkillsReducer,
    experience: ExperienceReducer,
}

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
export default store;