const lpRest1 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/lp-restaurant/rest1.png";
const lpRest2 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/lp-restaurant/rest2.png";
const lpRest3 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/lp-restaurant/rest3.png";
const lpRest4 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/lp-restaurant/rest4.png";

const np1 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/notepad/np1.png";
const np2 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/notepad/np2.png";
const np3 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/notepad/np3.png";
const np4 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/notepad/np4.png";

const lp1 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/landing-page/lp1.png";
const lp2 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/landing-page/lp2.png";
const lp3 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/landing-page/lp3.png";
const lp4 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/landing-page/lp4.png";

const spa1 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/spa/spa1.png";
const spa2 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/spa/spa2.png";
const spa3 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/spa/spa3.png";
const spa4 = "https://raw.githubusercontent.com/Victory-S29/cursor-advanced/main/final-project/src/imgs/spa/spa4.png";

const initialState = {
    projects: {
        "en": [{
            id: 1,
            name: "Restaurant landing page",
            description: "Restaurant landing page",
            projectDescription: "The Restaurant Landing Page is a visually appealing web page that provides essential information about the restaurant, such as its hours of operation and contact details. It showcases the restaurant's unique features, cuisine, and promotions to attract potential customers and encourage them to make a reservation.",
            technologies: [
                "HTML: Used to create the structure and layout of the webpage.",
                "CSS: Used for styling components and positioning elements on the page.",
                "SCSS: Used to enhance CSS workflow by utilizing variables, nested styles, mixins, and other features.",
                "Responsive design: Implemented using media queries and responsive classes to ensure optimal display of the page on different devices and screen sizes.",
                "Figma: Used for creating the design, layout, and components of the webpage, helping visualize the final result.",
                "Layout technologies: Include the use of Flexbox and Grid for element positioning, working with relative units of measurement, organizing the page structure, handling fonts, and other layout techniques."
            ],
            gallery: [lpRest1, lpRest2, lpRest3, lpRest4],
            projectLink:"https://victory-s29.github.io/scss-landing-page/index.html",
        }, {
            id: 2,
            name: "SPA",
            description: "SPA notepad",
            projectDescription: "Note-taking App using React and Redux, where users can create notes of various types, save them, and modify existing ones.",
            technologies: [
                "React: Used for creating components and managing the application's state.",
                "CSS: Used for styling components and page layout.",
                "React Router: Used for navigation between pages in a single-page application.",
                "Redux: for state management and storing publication data."
            ],
            gallery: [np1, np2, np3, np4],
            projectLink:"https://viktoriia-s-notepad-react-redux.netlify.app/",
        }, {
            id: 3,
            name: "Landing page",
            description: "Landing page with adaptive design",
            gallery: [lp1, lp2, lp3, lp4],
            projectDescription: "The completed project is a responsive web page created using the design from Figma. SCSS and CSS were used for styling and component layout.",
            technologies: [
                "HTML: Used to create the structure and layout of the webpage.",
                "CSS: Used for styling components and positioning elements on the page.",
                "Responsive design: Implemented using media queries and responsive classes to ensure optimal display of the page on different devices and screen sizes.",
                "Layout technologies: Include the use of Flexbox and Grid for element positioning, working with relative units of measurement, organizing the page structure, handling fonts, and other layout techniques."
            ],
            projectLink:"https://victory-s29.github.io/cursor/exam-project/index.html",
        }, {
            id: 4,
            name: "Gym SPA",
            description: "Gym SPA",
            gallery: [spa1, spa2, spa3, spa4],
            projectDescription: "Description: The SPA for Gym is a modern web application built using API integration, designed to enhance the gym experience for both members and staff. This application provides a seamless and interactive platform for users to access gym-related information.",
            technologies: [
                "React: Used for creating components and managing the application's state.",
                "CSS: Used for styling components and page layout.",
                "React Router: Used for navigation between pages in a single-page application.",
                "API: provide a standardized and efficient way for software applications to interact, enabling them to share data, functionalities, and resources, ultimately enhancing the overall capabilities and interoperability of the systems involved.",
                "@mui/material: popular React component library that offers a wide range of ready-to-use UI components and styles, making it easier for developers to build visually appealing and responsive user interfaces for their React applications."
            ],
            projectLink:"https://viktoriia-s-fitness-app.netlify.app/",
        }],

        "ua": [{
            id: 1,
            name: "Сторінка ресторану",
            description: "Сторінка ресторану",
            projectDescription: "Сторінка ресторану є візуально привабливою веб-сторінкою, яка надає основну інформацію про ресторан, таку як години роботи та контактні дані. Вона демонструє унікальні особливості ресторану, його кухню та акції, щоб привернути потенційних клієнтів та спонукати їх зробити резервацію.",
            technologies: [
                "HTML: використовується для створення структури і розмітки сторінки.",
                "CSS: використовується для стилізації компонентів і розташування елементів на сторінці.",
                "SCSS: використовується для поліпшення роботи з CSS шляхом використання змінних, вкладених стилів, міксинів та інших функцій.",
                "Адаптивний дизайн: використовуються медіа-запити і адаптивні класи для забезпечення оптимального відображення сторінки на різних пристроях і розмірах екрану.",
                "Figma: використовується для створення дизайну, макету та компонентів сторінки, що допомагає візуалізувати кінцевий результат.",
                "Технології верстки: включають в себе розташування елементів за допомогою Flexbox і Grid, використання відносних одиниць вимірювання, організацію структури сторінки, роботу зі шрифтами та інші техніки верстки."
            ],
            gallery: [lpRest1, lpRest2, lpRest3, lpRest4],
            projectLink:"https://victory-s29.github.io/scss-landing-page/index.html",
        }, {
            id: 2,
            name: "Односторінкова програма",
            description: "Нотатник",
            projectDescription: "Додаток для заміток з використанням React і Redux, де користувачі можуть створювати замітки різних типів, зберігати їх і модифікувати існуючі.",
            technologies: [
                "React: Використовується для створення компонентів та управління станом додатку.",
                "JS: Використовується для логіки та маніпуляцій з даними.",
                "CSS: Використовується для стилізації компонентів та розмітки сторінок.",
                "React Router: Використовується для навігації між сторінками в односторінковому додатку.",
                "Redux: для управління станом та зберігання даних публікацій."
            ],
            gallery: [np1, np2, np3, np4],
            projectLink:"https://viktoriia-s-notepad-react-redux.netlify.app/",
        }, {
            id: 3,
            name: "Веб-сторінка",
            description: "Сторінка з адаптивним дизайном",
            gallery: [lp1, lp2, lp3, lp4],
            projectDescription: "Готовий проект є адаптивною веб-сторінкою, створеним з використанням дизайну з Figma. В проекті були використані SCSS та CSS для стилізації і верстки компонентів.",
            technologies: [
                "HTML: використовується для створення структури і розмітки сторінки.",
                "CSS: використовується для стилізації компонентів і розташування елементів на сторінці.",
                "SCSS: використовується для поліпшення роботи з CSS шляхом використання змінних, вкладених стилів, міксинів та інших функцій.",
                "Адаптивний дизайн: використовуються медіа-запити і адаптивні класи для забезпечення оптимального відображення сторінки на різних пристроях і розмірах екрану.",
                "Figma: використовується для створення дизайну, макету та компонентів сторінки, що допомагає візуалізувати кінцевий результат.",
                "Технології верстки: включають в себе розташування елементів за допомогою Flexbox і Grid, використання відносних одиниць вимірювання, організацію структури сторінки, роботу зі шрифтами та інші техніки верстки."
            ],
            projectLink:"https://victory-s29.github.io/cursor/exam-project/index.html",
        }, {
            id: 4,
            name: "Сторінка з фітнесом",
            description: "Сторінка з фітнесом",
            gallery: [spa1, spa2, spa3, spa4],
            projectDescription: "SPA для спортзалу - сучасний веб-додаток, побудований з використанням інтеграції API, призначений для поліпшення досвіду в спортзалі як для членів клубу, так і для персоналу. Цей додаток надає безшовну та інтерактивну платформу для користувачів, щоб отримати доступ до інформації, пов'язаної зі спортзалом.",
            technologies: [
                "React: Використовується для створення компонентів та управління станом додатку.",
                "CSS: Використовується для стилізації компонентів та розмітки сторінок.",
                "React Router: Використовується для навігації між сторінками в односторінковому додатку.",
                "API: надають стандартизований та ефективний спосіб взаємодії програмних додатків, дозволяючи їм обмінюватись даними, функціональністю та ресурсами, в результаті чого поліпшується загальна здатність та взаємодія систем, що беруть участь.",
                "@mui/material: популярна бібліотека компонентів React, яка пропонує широкий спектр готових до використання компонентів і стилів користувацького інтерфейсу, спрощуючи процес розробки візуально привабливих та адаптивних інтерфейсів користувача для React-додатків."
            ],
            projectLink:"https://viktoriia-s-fitness-app.netlify.app/",
        }]
    }
}

const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return initialState;
        }
    }
}

export default ProjectReducer;