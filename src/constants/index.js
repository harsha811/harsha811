import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    chatbot,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    amazon,
    philips,
    project,
    sass,
    jquery,
    watson,
    express,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "tech",
      title: "Tech",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  

  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Chatbot Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Express.js",
      icon: express,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "chatbot",
      icon: chatbot,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Watson",
      icon: watson,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SASS",
      icon: sass,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Jquery",
      icon: jquery,
    },
  ];
  
  const experiences = [
    {
      title: "Catalog Analyst",
      company_name: "Amazon.com",
      icon: amazon,
      iconBg: "#E6DEDD",
      date: "July 2020 - Present",
      points: [
        "Currently working under AI system called  'CLAUDE', latest AI technology  to form automated cluster in catalog.",
        "Developing and maintaining web applications using Javascript, Jquery and other related technologies.",
        "Worked within a Artificial Intelligence software program called 'KPEX' web-based application used in amazon catalog service.",
        "Troubleshot problems and diagnosed system faults.",
        "Handled tickets of inbound in catalog.",
        "Implemented more efficient processes and reduced wasted resources.",
        "Managed design and planning throughout development process of web-based applications.",
        "Worked within a team-orientated environment to create, design and develop complex web-based applications.",
        "Gained extensive experience working with common JavaScript libraries such as jQuery and ES6.",
        "Skilfully developed responsive CSS with and without use of third-party frameworks.",
        "Created frameworks to detect functionality and establish smooth performance using Tampermonkey/Violentmonkey external scripts.",
      ],
    },
    {
      title: "Field Service Engineer",
      company_name: "Philips Healthcare(KMS)",
      icon: philips,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Feb 2020",
      points: [
        "Accountable for training to maintain, repair, and support as needed in the Philips Products Such as Ultrasound Imaging, Patient Monitoring & Analytics and Therapeutic Care equipment’s.",
        "Trained the Onsite Engineers (in house Bio-Med) to provide support at abruptly occurrence’s, where sometimes utilized as the first line of troubleshooting via phone to avoid downtime",
        "Responsible for scheduling and organizing with customers about the required action plans for maintenance, repairs, and/or upgrades to their equipment and any parts or support needs to be assisted",
        "Managed parts inventory and soft goods to meet corporate guidelines and customer needs",
        "Supported to achieve 80% Contract Revenue (CR) in Madurai region and providing support to all regions on need over Tamil Nadu",
        "Established and continued satisfactory customer relations and friendly support at all times",
      ]
    }
  ];
  
  
  
  const projects = [
    {
      name: "Project1",
      description:
        "descp",
      tags: [
        {
          name: "skill1",
          color: "blue-text-gradient",
        },
        {
          name: "skill2",
          color: "green-text-gradient",
        },
        {
          name: "skill3",
          color: "pink-text-gradient",
        },
      ],
      image: project,
      source_code_link: "/",
    },
  ];
  
  export { services, technologies, experiences,  projects };