const initialState = {
    skills: {
        "en": [
            {
                name: "HTML",
                description: "I have a strong understanding of HTML and its syntax. I can effectively structure the content of web pages using semantic elements and ensure proper markup for accessibility and SEO purposes.",
                projects: ["Landing page with a data submission form", "Information-saving page for an application"],
            },
            {
                name: "CSS",
                description: "I possess a deep knowledge of CSS and can skillfully style web elements to create visually appealing and consistent designs. I am experienced in using CSS frameworks and preprocessors to streamline my workflow and maintain code reusability.",
                projects: ["Web page for a clothing store", "Web page for a football app"],
            },
            {
                name: "JavaScript",
                description: "I am proficient in JavaScript and can leverage its power to create dynamic and interactive web experiences. I can handle user interactions, manipulate the DOM, and make asynchronous requests to fetch data from APIs.",
                projects: ["Program code using classes", "Problem-solving using loops and a functional approach"],
            },
            {
                name: "CSS Preprocessors",
                description: "I have hands-on experience with CSS preprocessors like SASS/SCSS and LESS, allowing me to write modular and maintainable CSS code. I utilize variables, mixins, and nesting to enhance my stylesheets' organization and efficiency.",
                projects: ["Instagram-like web page", "Web page for a design company"],
            },
            {
                name: "Responsive Design",
                description: "I am skilled in creating responsive web designs that adapt seamlessly to different screen sizes and devices. I can utilize media queries and flexible grid systems to ensure a consistent and optimal user experience across various platforms.",
                projects: ["Landing pages", "React apps"],
            },
            {
                name: "Version Control",
                description: "I am well-versed in using version control systems like Git, enabling me to collaborate effectively with team members and track changes in my codebase. I understand branching, merging, and resolving conflicts to ensure smooth project management.",
                projects: ["Working with github for saving projects", "Using github for working in team"],
            },
            {
                name: "Frameworks and Libraries:",
                description: " I have hands-on experience with front-end frameworks and libraries such as React.",
                projects: ["Creating a single-page application in React using Route", "Creating a React application using Redux"],
            }
        ],
        "ua": [
            {
                name: "HTML",
                description: "Я маю глибоке розуміння HTML і його синтаксису. Я можу ефективно структурувати вміст веб-сторінок за допомогою семантичних елементів і забезпечувати правильну розмітку для полегшення доступності та підвищення SEO.",
                projects: ["Веб-сторінка з формою для введення даних", "Сторінка додатку для збереження інформації"],
            },
            {
                name: "CSS",
                description: "Я маю глибокі знання CSS і вмію вправно стилізувати веб-елементи, створюючи візуально привабливі та послідовні дизайни. Я маю досвід використання CSS-фреймворків і препроцесорів для оптимізації робочого процесу та підтримки перевикористання коду.",
                projects: ["Веб-сторінка для магазину одягу", "Веб-сторінка для футбольного додатку"],
            },
            {
                name: "JavaScript",
                description: "Я володію вміннями програмувати на JavaScript і використовувати його можливості для створення динамічних та інтерактивних веб-додатків. Я можу обробляти дії користувача, маніпулювати DOM та виконувати асинхронні запити для отримання даних з API.",
                projects: ["Написання коду з використанням класів", "Розв'язання задач з використанням циклів та функціонального підходу"],
            },
            {
                name: "CSS препроцесори",
                description: "У мене є практичний досвід використання CSS препроцесорів, таких як SASS/SCSS та LESS, що дозволяють писати модульний та підтримуваний CSS-код. Я використовую змінні, міксіни та вкладення для поліпшення організації та ефективності моїх таблиць стилів.",
                projects: ["Веб-сторінка, імітуюча Instagram", "Веб-сторінка для дизайн-компанії"],
            },
            {
                name: "Адаптивний дизайн",
                description: "Я вмію створювати адаптивні веб-дизайни, які безперешкодно пристосовуються до різних розмірів екрану та пристроїв. Я використовую медіа-запити та гнучкі системи сітки для забезпечення послідовного та оптимального користувацького досвіду на різних платформах.",
                projects: ["Веб-сторінки", "React-додатки"],
            },
            {
                name: "Системи контролю версій",
                description: "Я добре знаю використання систем контролю версій, таких як Git, що дозволяє мені ефективно співпрацювати зі співробітниками та відстежувати зміни у моєму кодовій базі. Я розумію гілки, злиття та вирішення конфліктів, що забезпечує плавне управління проектом.",
                projects: ["Робота з GitHub для збереження проектів", "Використання GitHub для спільної роботи в команді"],
            },
            {
                name: "Фреймворки та бібліотеки",
                description: "У мене є практичний досвід використання фронтенд-фреймворків та бібліотек, таких як React.",
                projects: ["Створення односторінкового додатку на React з використанням Route", "Створення React-додатку з використанням Redux"],
            }
        ]
    }
}

const SkillsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return initialState;
        }
    }
}

export default SkillsReducer;