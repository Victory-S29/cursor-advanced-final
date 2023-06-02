const initialState = {
    experience: {
        "en": [{
            name: "Clothing Store Landing Page",
            technologies: ["HTML", "CSS", "SASS/SCSS", "Bootstrap"],
            responsibilities: ["Developed the page structure using semantic HTML elements.", "Styled the elements and created an appealing design using CSS, SASS/SCSS, and Bootstrap.", "Ensured responsiveness and optimized the page for different screen sizes."],
            description: "I chose this project to strengthen my skills in HTML, CSS, and front-end frameworks like Bootstrap. It allowed me to practice creating an attractive layout, applying styling techniques, and incorporating responsive design principles. This project helped me understand the importance of creating an engaging user experience in the e-commerce domain."
        }, {
            name: "React/Redux SPA",
            technologies: ["React", "Redux", "HTML", "CSS"],
            responsibilities: ["Integrated Redux for state management.", "Developed a single page application using React and Redux.", "Created reusable React components and styled them using CSS.", "Ensured a smooth and interactive user interface."],
            description: "I undertook this project to enhance my proficiency in React and gain experience with Redux for state management. It provided insights into handling complex application logic and structuring components for reusability."
        }, {
            name: "Web application using star wars API",
            technologies: ["HTML", "CSS", "JavaScript", "API"],
            responsibilities: ["Integrated an API into an website to fetch and display data", "Utilized JavaScript to perform asynchronous requests and dynamically update the UI with the retrieved data.", "Styled the website using CSS to ensure a cohesive and visually appealing design."],
            description: "I took on this project to gain experience working with APIs and leveraging external data sources in web development. It allowed me to understand the process of integrating third-party APIs into existing applications and handling data retrieval and rendering. This project expanded my skills in JavaScript and API utilization, enabling me to create more dynamic and data-driven websites."
        }, {
            name: "React SPA with Multiple Pages using Routes and styled-components",
            technologies: ["React", "React Router", "styled-components", "CSS"],
            responsibilities: ["Developed a single-page application (SPA) using React and React Router to create multiple pages within the application.", "Utilized React Router to set up routing for navigation between pages.", "Each page has its own component that is rendered based on the route.", "Implemented styled-components library for component-based styling, allowing the use of CSS within JavaScript with a thematic approach."],
            description: "I took on this project to enhance my front-end development skills by working with React, React Router, and styled-components. By building a React SPA with multiple pages, I aimed to gain experience in managing application state and implementing dynamic navigation."
        }],

        "ua": [{
            name: "Головна сторінка для магазину одягу",
            technologies: ["HTML", "CSS", "SASS/SCSS", "Bootstrap"],
            responsibilities: ["Розробка структури сторінки за допомогою семантичних елементів HTML.", "Стилізація елементів та створення привабливого дизайну з використанням CSS, SASS/SCSS та Bootstrap.", "Забезпечення адаптивності та оптимізація сторінки для різних розмірів екранів."],
            description: "Я обрала цей проект, щоб підвищити свої навички в HTML, CSS та фронт-енд фреймворках, таких як Bootstrap. Це дало мені можливість попрактикуватися у створенні привабливого макету, застосувати техніки стилізації та впровадити принципи адаптивного дизайну. Цей проект допоміг мені зрозуміти важливість створення захопливого користувальницького досвіду в сфері комерції."
        }, {
            name: "React/Redux SPA",
            technologies: ["React", "Redux", "HTML", "CSS"],
            responsibilities: ["Інтеграція Redux для керування станом.", "Розробка односторінкової програми з використанням React та Redux.", "Створення повторно використовуваних компонентів React та їх стилізація за допомогою CSS.", "Забезпечення плавного та інтерактивного інтерфейсу користувача."],
            description: "Я взялась за цей проект, щоб покращити свої навички в React та набути досвіду використання Redux для керування станом. Він надав мені можливість познайомитися з обробкою складної логіки програми та структуруванням компонентів для повторного використання."
        }, {
            name: "Веб-додаток з використанням API Star Wars",
            technologies: ["HTML", "CSS", "JavaScript", "API"],
            responsibilities: ["Інтеграція API на веб-сайті для отримання та відображення даних", "Використання JavaScript для виконання асинхронних запитів та динамічного оновлення користувацького інтерфейсу із отриманими даними.", "Стилізація веб-сайту з використанням CSS для забезпечення єдності та привабливого дизайну."],
            description: "Я взялась за цей проект, щоб набути досвіду роботи з API та використання зовнішніх джерел даних у веб-розробці. Він дозволив мені зрозуміти процес інтеграції сторонніх API у наявні додатки та обробки отримання та відображення даних. Цей проект розширив мої навички в JavaScript та використанні API, що дозволило створювати більш динамічні та наповнені даними веб-сайти."
        }, {
            name: "React SPA з декількома сторінками використовуючи Routes і styled-components",
            technologies: ["React", "React Router", "styled-components", "CSS"],
            responsibilities: ["Розробка односторінкового застосунку (SPA) з використанням React та React Router для створення декількох сторінок в межах застосунку.", "Використання React Router для налаштування маршрутизації для навігації між сторінками.", "Кожна сторінка має свій власний компонент, який рендериться залежно від маршруту.", "Використання бібліотеки styled-components для стилізації компонентів, що дозволяє використовувати CSS всередині JavaScript з тематичним підходом."],
            description: "Я взялась за цей проект, щоб покращити свої навички розробки фронт-енду, працюючи з React, React Router та styled-components. Шляхом створення React SPA з декількома сторінками, я сподіваюся набути досвіду у керуванні станом додатку та реалізації динамічної навігації."
        }]
    }
}

const ExperienceReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return initialState;
        }
    }
}

export default ExperienceReducer;