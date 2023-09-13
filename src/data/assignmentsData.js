import CometLabs from '../assets/CometLabs.jpg';
import ImageMaskGenerator from '../assets/ImageMaskGenerator.jpg';
import TransactionTable from '../assets/TransactionTable.jpg';
import OTTWebsite from '../assets/OTTWebsite.jpg';
import CSVtoTable from '../assets/CSVtoTable.jpg';

export const assignmentsData = [
    {
        id: 1,
        name: "A Next JS Landing Page",
        image: CometLabs,
        techstack: "Next.js, Tailwind Css",
        description: "A beautiful landing page for a website developed using react functional components and tailwind css.",
        github: "https://github.com/TharunNookala/comet-labs-assignment",
        live: "https://comet-labs-assignment.vercel.app/",
    },
    {
        id: 2,
        name: "Image Mask generator",
        image: ImageMaskGenerator,
        techstack: "React, Tailwind Css",
        description: "A mask of the image is generated for the uploaded image. Can plot the points on image and can remove those points each or all at once. These points coordinates are sent to backend to generate mask of image.",
        github: "https://github.com/TharunNookala/csm-assignment",
        live: "https://tharunnookala-image-mask-generator.netlify.app/",
    },
    {
        id: 3,
        name: "Transactions Table",
        image: TransactionTable,
        techstack: "React, Redux Toolkit, React-router-dom, Tailwind Css",
        description: "A react app where we fetch transactions data from JSON and display them. We can det details of each transaction by clicking on it. Used Redux tool kit for state management and React-router-dom for routing.",
        github: "https://github.com/TharunNookala/Transactions-Table",
        live: "https://tharunnookala-transaction-table.netlify.app/",
    },
    {
        id: 4,
        name: "An OTT website",
        image: OTTWebsite,
        techstack: "React, Redux Toolkit, React-router-dom, Tailwind Css",
        description: "An OTT alike website, where we fetch movies from an API and display them. On clicking on a movie, it redirects to another page displaying all the details of that movie. We can also search for any particular movie in database. The movies are infinite i.e., movies will be loading onscroll. ",
        github: "https://github.com/TharunNookala/GSIV23_Tharun_Nookala_",
        live: "https://tharunnookala-movie-data.netlify.app/",
    },
    {
        id: 5,
        name: "CSV to Table Generator",
        image: CSVtoTable,
        techstack: "React, Tailwind Css",
        description: "A react app where we can upload a csv file and can be converted into table using @mui. Also we can filter the table contents using user input in search bar",
        github: "https://github.com/TharunNookala/Eat-N-Split",
        live: "https://tharunnookala-csv-to-table.netlify.app/",
    },
]