import CometLabs from "../assets/CometLabs.jpg";
import ImageMaskGenerator from "../assets/ImageMaskGenerator.jpg";
import TransactionTable from "../assets/TransactionTable.jpg";
import OTTWebsite from "../assets/OTTWebsite.jpg";
import CSVtoTable from "../assets/CSVtoTable.jpg";
import Chatbot from "../assets/Chatbot.png";
import weather from "../assets/weather.png";

export const assignmentsData = [
  {
    id: 1,
    name: "React Chatbot App",
    image: Chatbot,
    techstack: "React.js, Tailwind Css, React-chatbot-kit",
    description:
      "A react chatbot which is used to register into student info system and book an appointment.",
    github: "https://github.com/TharunNookala/react-chatbot",
    live: "https://tharunnookala-chatbot.netlify.app/",
  },
  {
    id: 2,
    name: "Weather-2-Day",
    image: weather,
    techstack: "React.js, Tailwind Css, weather API",
    description:
      "A react Weather forecast web app, where data fetched through a static API which has fixed filters of location and other properties.",
    github: "https://github.com/TharunNookala/Shoshin-Tech-assignment",
    live: "https://tharunnookala-weather-2-day.netlify.app/",
  },
  {
    id: 3,
    name: "A Next JS Landing Page",
    image: CometLabs,
    techstack: "Next.js, Tailwind Css",
    description:
      "A beautiful landing page for a website developed using react functional components and tailwind css.",
    github: "https://github.com/TharunNookala/comet-labs-assignment",
    live: "https://comet-labs-assignment.vercel.app/",
  },
  {
    id: 4,
    name: "Image Mask generator",
    image: ImageMaskGenerator,
    techstack: "React, Tailwind Css",
    description:
      "A mask of the image is generated for the uploaded image. Can plot the points on image and can remove those points each or all at once. These points coordinates are sent to backend to generate mask of image.",
    github: "https://github.com/TharunNookala/csm-assignment",
    live: "https://tharunnookala-image-mask-generator.netlify.app/",
  },
  {
    id: 5,
    name: "Transactions Table",
    image: TransactionTable,
    techstack: "React, Redux Toolkit, React-router-dom, Tailwind Css",
    description:
      "A react app where we fetch transactions data from JSON and display them. We can det details of each transaction by clicking on it. Used Redux tool kit for state management and React-router-dom for routing.",
    github: "https://github.com/TharunNookala/Transactions-Table",
    live: "https://tharunnookala-transaction-table.netlify.app/",
  },
  {
    id: 6,
    name: "An OTT website",
    image: OTTWebsite,
    techstack: "React, Redux Toolkit, React-router-dom, Tailwind Css",
    description:
      "An OTT alike website, where we fetch movies from an API and display them. On clicking on a movie, it redirects to another page displaying all the details of that movie. We can also search for any particular movie in database. The movies are infinite i.e., movies will be loading onscroll. ",
    github: "https://github.com/TharunNookala/GSIV23_Tharun_Nookala_",
    live: "https://tharunnookala-movie-data.netlify.app/",
  },
  {
    id: 7,
    name: "CSV to Table Generator",
    image: CSVtoTable,
    techstack: "React, Tailwind Css",
    description:
      "A react app where we can upload a csv file and can be converted into table using @mui. Also we can filter the table contents using user input in search bar",
    github: "https://github.com/TharunNookala/Eat-N-Split",
    live: "https://tharunnookala-csv-to-table.netlify.app/",
  },
];
