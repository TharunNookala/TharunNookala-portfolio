import { FaBookOpen, FaGraduationCap } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";

export const timelineData = [
  {
    period: "Feb 2024 - Current",
    title: "SDE1 @ Valmi.io",
    icon: <RiComputerFill />,
    description: [
      "Contributed significantly to the creation and refinement of key front-end features, including setting up the app’s theme, designing layouts, and managing end-to-end user flows.",
      "Integrated Google Authentication using NextAuth to streamline user login processes, incorporating token-based authentication for secure backend access.",
      "Developed and integrated Shopify OAuth functionality to facilitate seamless access to Shopify stores as part of the product features.",
      "Engineered custom renderers for JsonForms, enabling dynamic form generation based on JSON Schema, enhancing the flexibility and scalability of form management within the application.",
      "Integrated RESTful APIs to connect with the back-end for creating ETL connectors from various sources to destinations, getting the data into Google Sheets, ensuring smooth data flow and user interactions.",
      "Used Redux Toolkit for efficient application state management, ensuring a consistent and reliable user experience.",
      "Implemented RTK Query for streamlined API interaction, optimizing data fetching functionalities and caching strategies.",
    ],
  },
  {
    period: "2021 July - 2023 May",
    title: "Systems Engineer @ Infosys",
    icon: <RiComputerFill />,
    description: [
      "Worked on technologies such as JavaScript, React JS, CSS, and Material UI for a logistics management system, streamlining the client’s supply chain and inventory processes.",
      "Enabled real-time data visualization by integrating various APIs, allowing users to track logistics metrics, shipment statuses, and inventory levels with up-to-date information.",
      "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness.",
      "Improved the overall usability and functionality of the system by creating responsive web components including carousel cards, a search bar to fetch data from the API, and an FAQ component based on designs from the UI team, ensuring accessibility across different devices.",
      "Worked with version control systems like Git to manage code and collaborate with other developers.",
      "Collaborated with back-end developers to ensure seamless integration of front-end and back-end functionality.",
      "Implemented best practices for SEO and web analytics by incorporating lazy loading of images to reduce load time.",
      "Familiar with Agile methodologies, Scrum, and Jira to effectively manage projects.",
    ],
  },
  {
    period: "2017 July - 2021 June",
    title: "Bachelor of Technology",
    icon: <FaGraduationCap />,
    description: ["Scored 7.2 CGPA out of 10"],
  },
  {
    period: "2015 June - 2017 May",
    title: "Intermediate or Class XII",
    icon: <FaBookOpen />,
    description: ["Scored 963 out of 1000"],
  },
  {
    period: "2014 - 2015",
    title: "SSC or Class X",
    icon: <FaBookOpen />,
    description: ["Scored 9.5 CGPA out of 10"],
  },
];
