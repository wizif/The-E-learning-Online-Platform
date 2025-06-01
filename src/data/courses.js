const courses = [
  {
    id: 1,
    title: "Responsive Web Design",
    description: "Learn modern responsive web design techniques",
    longDescription: "Master HTML5, CSS3, and responsive design principles to build websites that work perfectly on all devices. Includes Flexbox and Grid layout systems.",
    image: "/images/web-design.jpg",
    category: "Web Development",
    duration: "4 Weeks",
    level: "Beginner",
    price: 49.99,
    rating: 4.8,
    students: 1250,
    instructor: {
      name: "Sarah Johnson",
      image: "/images/instructor-1.jpg",
      bio: "Frontend developer with 8+ years experience building responsive websites"
    },
    learningOutcomes: [
      "Build mobile-first responsive layouts",
      "Master CSS Grid and Flexbox",
      "Create accessible web interfaces",
      "Optimize websites for performance"
    ],
    modules: [
      {
        title: "HTML5 Fundamentals",
        lessons: [
          "HTML5 document structure",
          "Semantic HTML elements",
          "Forms and validation",
          "Accessibility basics"
        ]
      },
      {
        title: "CSS3 Mastery",
        lessons: [
          "CSS selectors and specificity",
          "Box model and positioning",
          "Flexbox layout",
          "CSS Grid system"
        ]
      },
      {
        title: "Responsive Techniques",
        lessons: [
          "Media queries",
          "Responsive images",
          "Mobile-first approach",
          "Cross-browser testing"
        ]
      }
    ],
    reviews: [
      {
        author: "Alex M.",
        rating: 5,
        text: "Excellent course! The projects were practical and helped me land my first web dev job.",
        date: "2023-05-15"
      },
      {
        author: "Priya K.",
        rating: 4,
        text: "Very comprehensive, but some sections could use more advanced examples.",
        date: "2023-04-02"
      }
    ]
  },
  {
    id: 2,
    title: "Python for Data Science",
    description: "Master Python for data analysis and visualization",
    longDescription: "Learn to use Python, Pandas, NumPy, and Matplotlib for professional data analysis. Includes real-world datasets and projects.",
    image: "/images/python-ds.jpg",
    category: "Data Science",
    duration: "6 Weeks",
    level: "Intermediate",
    price: 59.99,
    rating: 4.7,
    students: 980,
    instructor: {
      name: "Michael Chen",
      image: "/images/instructor-2.jpg",
      bio: "Data scientist with 10+ years experience in machine learning and analytics"
    },
    learningOutcomes: [
      "Clean and transform datasets",
      "Perform statistical analysis",
      "Create data visualizations",
      "Build predictive models"
    ],
    modules: [
      {
        title: "Python Basics",
        lessons: [
          "Python syntax review",
          "Data structures",
          "Functions and lambdas",
          "Working with files"
        ]
      },
      {
        title: "Pandas Fundamentals",
        lessons: [
          "DataFrames and Series",
          "Data cleaning techniques",
          "Grouping and aggregation",
          "Time series analysis"
        ]
      }
    ],
    reviews: [
      {
        author: "David L.",
        rating: 5,
        text: "Changed my career! Now working as a junior data analyst.",
        date: "2023-06-10"
      }
    ]
  },
  {
    id: 3,
    title: "JavaScript Frameworks",
    description: "Modern JavaScript with React and Vue",
    longDescription: "Master component-based development with the most popular JavaScript frameworks. Build single-page applications with React and Vue.",
    image: "/images/js-frameworks.jpg",
    category: "Web Development",
    duration: "5 Weeks",
    level: "Intermediate",
    price: 54.99,
    rating: 4.9,
    students: 1500,
    instructor: {
      name: "Jamal Williams",
      image: "/images/instructor-3.jpg",
      bio: "Full-stack developer specializing in modern JavaScript frameworks"
    },
    modules: [
      {
        title: "React Fundamentals",
        lessons: [
          "Components and props",
          "State management",
          "Hooks system",
          "React Router"
        ]
      },
      {
        title: "Vue Essentials",
        lessons: [
          "Vue instance",
          "Directives",
          "Vue Router",
          "Composition API"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Build cross-platform apps with Flutter",
    longDescription: "Create beautiful native apps for iOS and Android from a single codebase using Flutter and Dart.",
    image: "/images/flutter.jpg",
    category: "Mobile Development",
    duration: "8 Weeks",
    level: "Intermediate",
    price: 64.99
  }
];

export default courses;