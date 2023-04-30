const REACT_THEMES = [
  {
    id: 0,
    title: "HTML+CSS Начинающий",
    description:
      "Основы HTML+CSS: теги, подключение css, основные селекторы и тд",
    complexity: 1,
    tags: ["html", "css"],
    lessons: [
      {
        id: 0,
        title: "Основы HTML",
        learned: true,
        materials: [
          {
            comment: "Основы HTML",
            link: "https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics",
          },
          {
            comment: "Введение в HTML",
            link: "https://developer.mozilla.org/ru/docs/Learn/HTML/Introduction_to_HTML",
          },
        ],
      },
      {
        id: 1,
        title: "Основы CSS",
        learned: true,
        materials: [
          {
            comment: "Основы CSS",
            link: "https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics",
          },
          {
            comment: "Введение в CSS",
            link: "https://developer.mozilla.org/ru/docs/Learn/CSS/First_steps",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "HTML+CSS Продвинутый",
    description: "Семантика, адаптивная верстка, анимации, svg и тд",
    complexity: 3,
    tags: ["html", "css", "animation", "svg"],
    lessons: [
      {
        id: 0,
        title: "Тема 1",
        learned: true,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
          {
            comment: "Материал 2",
            link: "",
          },
        ],
      },
      {
        id: 1,
        title: "Тема 2",
        learned: true,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
      {
        id: 2,
        title: "Тема 3",
        learned: false,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "HTML+CSS Профи",
    description: "Фреймворки, пре/пост процессоры и тд",
    complexity: 5,
    tags: ["html", "css", "css_frameworks"],
    lessons: [
      {
        id: 0,
        title: "Тема 1",
        learned: true,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
          {
            comment: "Материал 2",
            link: "",
          },
        ],
      },
      {
        id: 1,
        title: "Тема 2",
        learned: false,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
      {
        id: 2,
        title: "Тема 3",
        learned: false,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "JavaScript Начинающий",
    description: "Основы JS: типы данных, замыкания, EventLoop и тд",
    complexity: 1,
    tags: ["js", "closure", "event_loop"],
    lessons: [
      {
        id: 0,
        title: "Тема 1",
        learned: true,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
          {
            comment: "Материал 2",
            link: "",
          },
        ],
      },
      {
        id: 1,
        title: "Тема 2",
        learned: true,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
      {
        id: 2,
        title: "Тема 3",
        learned: true,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "JavaScript Продвинутый",
    description: "Угулбленное понимание языка, EventLoop, Promise API и тд",
    complexity: 3,
    tags: ["js", "promises", "event_loop"],
    lessons: [
      {
        id: 0,
        title: "Тема 1",
        learned: true,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
          {
            comment: "Материал 2",
            link: "",
          },
        ],
      },
      {
        id: 1,
        title: "Тема 2",
        learned: true,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
      {
        id: 2,
        title: "Тема 3",
        learned: false,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "JavaScript Профи",
    description:
      "Полное понимание языка и его тонких моментов, Async/Await, *Workers и тд",
    complexity: 5,
    tags: ["js", "async", "workers"],
    lessons: [
      {
        id: 0,
        title: "Тема 1",
        learned: false,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
          {
            comment: "Материал 2",
            link: "",
          },
        ],
      },
      {
        id: 1,
        title: "Тема 2",
        learned: true,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
      {
        id: 2,
        title: "Тема 3",
        learned: false,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "React Начинающий",
    description: "JSX, жизненный цикл компонента, базовые хуки и тд",
    complexity: 1,
    tags: ["react", "jsx", "hooks"],
    lessons: [
      {
        id: 0,
        title: "Тема 1",
        learned: true,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
          {
            comment: "Материал 2",
            link: "",
          },
        ],
      },
      {
        id: 1,
        title: "Тема 2",
        learned: false,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
      {
        id: 2,
        title: "Тема 3",
        learned: true,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "React Продвинутый",
    description: "Redux и подобные беблиотеки, Reconciliation и тд",
    complexity: 3,
    tags: ["react", "redux"],
    lessons: [
      {
        id: 0,
        title: "Тема 1",
        learned: false,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
          {
            comment: "Материал 2",
            link: "",
          },
        ],
      },
      {
        id: 1,
        title: "Тема 2",
        learned: false,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
      {
        id: 2,
        title: "Тема 3",
        learned: false,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "React Профи",
    description:
      "Работа с большим объемом данных на клиенте, синхронизации, события в React и тд",
    complexity: 5,
    tags: ["react", "event", "workers"],
    lessons: [
      {
        id: 0,
        title: "Тема 1",
        learned: false,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
          {
            comment: "Материал 2",
            link: "",
          },
        ],
      },
      {
        id: 1,
        title: "Тема 2",
        learned: false,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
      {
        id: 2,
        title: "Тема 3",
        learned: false,
        materials: [
          {
            comment: "Материал 1",
            link: "",
          },
        ],
      },
    ],
  },
];

module.exports = { REACT_THEMES };
