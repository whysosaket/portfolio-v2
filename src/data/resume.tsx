import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saket Aryan",
  initials: "SA",
  url: "https://saketaryan.xyz",
  location: "Bhubaneswar, Odisha",
  locationLink: "https://maps.app.goo.gl/EoxEvx1ryt8MYEKt8",
  description:
    "Software Engineer. I love building things and helping people. Very active on GitHub.",
  summary:
    "I'm currently pursuing a B.Tech in Computer Science and Engineering, focusing on web development with React and Next.js. I've successfully won 5 hackathons, showcasing my ability to create innovative solutions.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "MySQL",
    "Docker",
    "Kubernetes",
    "Java",
    "Terraform",
    "Ansible",
    "AWS",
    "C",
    "TailwindCSS",
    "Framer Motion",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "saketaryan2002@gmail.com",
    tel: "+919950262900",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/whysosaket",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saketaryan",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/whysosaket",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "saketaryan2002@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "DBS Tech India",
      href: "https://www.dbs.com/dbstechindia/index.html",
      badges: [],
      location: "Hybrid/Remote",
      title: "DevOps - Internship Trainee",
      logoUrl: "/dbs-logo.png",
      start: "Jun, 2024",
      end: "Present",
      description:
        "Currently working in a hybrid role at DBS Tech India, where I deploy and containerize Spring Boot applications on AWS EKS.",
    },
    {
      company: "Soshals",
      href: "https://www.soshals.app/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/soshals.jpg",
      start: "Feb, 2024",
      end: "Feb, 2024",
      description:
        "As a Frontend Developer at Soshals in February 2024, I worked remotely on Next.js and developed 2 user profile templates within a month.",
    },
    {
      company: "Samsung R&D, BLR",
      href: "https://www.samsungprism.com/",
      badges: [],
      location: "Remote",
      title: "Prism Research Intern",
      logoUrl: "/samsung.png",
      start: "Apr, 2023",
      end: "Feb, 2024",
      description:
        "As a Prism Research Intern at Samsung Research Institute, Bangalore, from April 2023 to February 2024, I virtually benchmarked DynamoDB performance across different systems, authored and published a research paper on the findings, and was endorsed by my mentor as the best worklet.",
    },
    {
      company: "CODEX",
      badges: [],
      href: "https://codex-iter.in/",
      location: "Remote",
      title: "Student Coordinator",
      logoUrl: "/codex-logo.jpeg",
      start: "Jul, 2022",
      end: "Present",
      description:
        "As a Student Coordinator for CODEX, I organized 1 open-source event, 11 club events, and managed and maintained 5 event websites.",
    },
  ],
  education: [
    {
      school: "PwC",
      href: "https://www.pwc.in/",
      degree: "Agile, SQL, Cloud, AWS",
      logoUrl: "/pwc.png",
      start: "Feb, 2024",
      end: "Jun, 2024",
    },
    {
      school: "ITER, Siksha 'O' Anusandhan",
      href: "https://www.soa.ac.in/iter",
      degree: "Bachelor's in Technology, B.Tech (CSE)",
      logoUrl: "/soa.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
        "title": "SixthSense",
        "href": "https://sixthsense.vercel.app/",
        "dates": "3rd Year",
        "active": true,
        "description": "A web-based application that uses machine learning algorithms to predict stock market trends. It provides users with real-time data and forecasts, helping them make informed investment decisions.",
        "technologies": [
            "React",
            "NodeJs",
            "Express",
            "MongoDB",
            "Javascript",
            "Tailwind",
            "Framer Motion",
            "React ChartJs2"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://sixthsense.vercel.app/",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/SixthSense",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "Hackodex Website",
        "href": "https://hackodex.codex-iter.in/",
        "dates": "3rd Year",
        "active": true,
        "description": "A website for hosting the Hackodex month-long open-source event. Features GitHub authentication for student registration and progress tracking, allowing participants to track their contributions and achievements throughout the event.",
        "technologies": [
            "React",
            "NodeJs",
            "Express",
            "MongoDB,Tailwind",
            "Framer Motion"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://hackodex.codex-iter.in/",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/Hackodex2024",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "Samriddhi",
        "href": "https://samriddhiapp.vercel.app/",
        "dates": "3rd Year",
        "active": true,
        "description": "A comprehensive financial app offering digital payments, fund management, insurance, and robust security, winner of Technex 24 IIT BHU Hackathon, built with MERN stack.",
        "technologies": [
            "React",
            "NodeJs",
            "Express",
            "MongoDB",
            "Typescript",
            "Tailwind",
            "Framer Motion",
            "Aceternity UI",
            "Atropos"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://samriddhiapp.vercel.app/",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/Samriddhi/",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "LinkMyLinks",
        "href": "https://linkmylinks.vercel.app/",
        "dates": "2nd Year",
        "active": true,
        "description": "A personalized link management tool that goes beyond basic sharing. Organize links into categories, mark them as private, and create private groups for added security. Easily retrieve important links with just your login credentials.",
        "technologies": [
            "React",
            "NodeJs",
            "Express",
            "MongoDB",
            "Typescript",
            "Tailwind",
            "Framer Motion"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://linkmylinks.vercel.app/",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/LinkMyLinks",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "VAttend",
        "href": "https://vattend.vercel.app/",
        "dates": "2nd Year - 3rd Year",
        "active": true,
        "description": "A location-based attendance system built with Svelte. Users can mark attendance at specific locations using geolocation, with features like user authentication, location management, and attendance history.",
        "technologies": [
            "Svelte",
            "NodeJs",
            "Express",
            "MongoDB",
            "Javascript",
            "Typescript",
            "Tailwind"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://vattend.vercel.app/",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/VAttend-TS",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "Saarthi",
        "href": "https://github.com/whysosaket/Saarthi",
        "dates": "3rd Year",
        "active": true,
        "description": "A comprehensive educational platform with features like OCR, grade checking, feedback, real-time tracking, plagiarism detection, and classroom management, designed to enhance teaching and learning experiences.",
        "technologies": [
            "React",
            "NodeJs",
            "Express",
            "MongoDB",
            "Typescript",
            "Tailwind",
            "Framer Motion",
            "React Plx",
            "Atropos"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://github.com/whysosaket/Saarthi",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/Saarthi",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "Carmine Bank",
        "href": "https://carminebank.vercel.app/",
        "dates": "3rd Year",
        "active": true,
        "description": "A Java Spring Boot and React.js-based banking website showcasing multithreading concepts. Features both semaphore-controlled and uncontrolled multithreading modes to demonstrate the importance of thread synchronization.",
        "technologies": [
            "React",
            "MongoDB",
            "Typescript",
            "TailwindCSS",
            "Spring Boot"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://carminebank.vercel.app/",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/Banking-Spring-Boot",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "LinguaConnect",
        "href": "https://github.com/whysosaket/LinguaConnect",
        "dates": "3rd Year",
        "active": true,
        "description": "A language learning platform connecting learners with teachers. Features include user registration, customizable classes, search functionality, scheduling, video calls, flashcards, and AI-powered features.",
        "technologies": [
            "React",
            "NodeJs",
            "Express",
            "MongoDB",
            "Typescript",
            "Tailwind",
            "Framer Motion",
            "Aceternity UI",
            "Atropos"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://github.com/whysosaket/LinguaConnect",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/LinguaConnect",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "Doctor-Dashboard",
        "href": "https://doctor-dashboard-three.vercel.app/",
        "dates": "3rd Year",
        "active": true,
        "description": "A responsive frontend dashboard designed for doctors. Features customizable components and a user-friendly interface to efficiently manage patient data, appointments, and other medical tasks.",
        "technologies": [
            "NextJs",
            "Tailwind CSS",
            "Framer Motion",
            "React ChartJs 2"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://doctor-dashboard-three.vercel.app/",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/Doctor-Dashboard",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "Codeberg",
        "href": "https://codeberg.vercel.app/",
        "dates": "3rd Year",
        "active": true,
        "description": "A deployable container solution for hosting coding competitions. Features user registration, login, admin functionality, question submission, and code writing/running capabilities.",
        "technologies": [
            "React",
            "NodeJs",
            "Express",
            "MongoDB",
            "Typescript",
            "Tailwind"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://codeberg.vercel.app/",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/codeberg",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "PayBackPal",
        "href": "MOBILE APP",
        "dates": "2nd Year",
        "active": true,
        "description": "A React Native-based mobile app for managing shared expenses. Easily add expenses, track debts, and view expense summaries. A user-friendly solution for hassle-free expense management.",
        "technologies": [
            "React Native",
            "Javascript"
        ],
        "links": [
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/PayBackPal",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "Portfolio",
        "href": "https://saketaryan.netlify.app/",
        "dates": "2nd Year",
        "active": true,
        "description": "A personal website showcasing my skills and projects, built with React.js, TypeScript, and SCSS for a modern and interactive design.",
        "technologies": [
            "React",
            "Typescript",
            "SCSS"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://saketaryan.netlify.app/",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/Portfolio",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "Graviti",
        "href": "https://graviti-navigator.netlify.app/",
        "dates": "2nd Year",
        "active": true,
        "description": "A React application using Google Maps API and Tailwind CSS to visualize the shortest path between two locations.",
        "technologies": [
            "React",
            "Google Maps API",
            "Javascript",
            "Tailwind"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://graviti-navigator.netlify.app/",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/Graviti-Assignment",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "FindMyMovies",
        "href": "https://findmymovie.onrender.com/",
        "dates": "1st Year",
        "active": true,
        "description": "A web application using EJS, Node, and Express to fetch movie and web series data from MoviesDB API. Displays details, categories, search functionality, season information, and similar recommendations.",
        "technologies": [
            "EJS",
            "Movies API",
            "NodeJs",
            "Bootstrap"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://findmymovie.onrender.com/",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/FindMyMovie",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "Musicart",
        "href": "https://musicartnew.netlify.app/",
        "dates": "3rd Year",
        "active": true,
        "description": "An online music store selling headphones and other music items, developed during an internship at Cuvette. Features a user-friendly interface for browsing, purchasing, and managing orders.",
        "technologies": [
            "React",
            "NodeJs",
            "Express",
            "MongoDB",
            "Javascript",
            "Vanilla CSS"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://musicartnew.netlify.app/",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/MusicCart",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "Quizzie",
        "href": "https://quizzie-client.vercel.app/",
        "dates": "3rd Year",
        "active": true,
        "description": "An online quiz and polling platform with a timer. Features various quiz types, real-time scoring, and customizable options. Developed during an internship at Cuvette.",
        "technologies": [
            "React",
            "NodeJs",
            "Express",
            "MongoDB",
            "Javascript",
            "Vanilla CSS"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://quizzie-client.vercel.app/",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/Quizzie",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "GreenMe",
        "href": "https://github.com/whysosaket/GreenMe",
        "dates": "3rd Year (Hackathon)",
        "active": true,
        "description": "A mobile app promoting sustainable living. Tracks user activities, offers real-time suggestions, gamifies eco-friendly behaviors, and fosters a community for environmental awareness.",
        "technologies": [
            "Flutter",
            "NodeJs",
            "Express",
            "MongoDB",
            "Typescript"
        ],
        "links": [
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/GreenMe",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    },
    {
        "title": "Codex Backend",
        "href": "https://codex-iter.in/",
        "dates": "3rd Year",
        "active": true,
        "description": "A Spring Boot application serving as the backend for the Codex Iter website. Provides endpoints for managing event data and member information, designed for seamless integration with the Codex ITER frontend.",
        "technologies": [
            "Spring Boot"
        ],
        "links": [
            {
                "type": "Website",
                "href": "https://codex-iter.in/",
                "icon": <Icons.globe className='size-3' />
            },
            {
                "type": "Source",
                "href": "https://github.com/whysosaket/codex-backend-spring",
                "icon": <Icons.github className='size-3' />
            }
        ],
        "image": "",
        "video":"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    }
],
  hackathons: [
    {
      title: "HackItOut, 2024 - IIT (BHU)",
      dates: "March 15th - 17th, 2024",
      location: "Winner",
      description:
        "Developed Samriddhi, a full-stack financial application which aims to revolutionize financial services by offering digital payments, fund management, insurance integration, and enhanced security features.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gS_1ccUP32BzjZVROJeI_4fQRLKikl0boA&s",
      links: [
        {
          title: "Live",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://samriddhiapp.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/whysosaket/Samriddhi",
        },
        {
          title: "Certificate",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1Min3uCStDe2Jlp0_IfvAs9uPpgwoHRfH/view?usp=sharing",
        },
      ],
    },
    {
      title: "E-Summit’24 - MANIT (NIT-Bhopal)",
      dates: "February 2nd - 3rd, 2024",
      location: "Winner",
      description:
        "Developed Saarthi, an innovative educational platform designed to provide a seamless and enhanced experience for both educators and students.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSaSwrvz9KcffmW_CCX6ruVQzhvgjDm7tVg&s",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/whysosaket/Saarthi",
        },
        {
          title: "Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/ecell-manit_hackathon-coding-ecell-activity-7165754421216243712-TKa5?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "Tri-NIT'24, NIT Trichy",
      dates: "March 8th - 10th, 2024",
      location: "Finalist",
      description:
        "Developed Lingua Connect, that is designed to facilitate language learning by providing a platform where learners can find suitable teachers, schedule classes, and engage in personalized learning experiences.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/National_Institute_of_Technology_Trichy_Logo.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/whysosaket/LinguaConnect",
        },
        {
          title: "Certificate",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1NkU0AViDu78_7HA33IC2LPiErwTrhl3-/view?usp=sharing",
        },
      ],
    },
    {
      title: "Data Prophet, 2024 - IIT (BHU)",
      dates: "March 15th - 17th, 2024",
      location: "Runner Up",
      description: "Stock Market Prediction and Sentimental Analysis",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gS_1ccUP32BzjZVROJeI_4fQRLKikl0boA&s",
      links: [
        {
          title: "Leaderboard",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.kaggle.com/competitions/stock-market-prediction-and-sentimental-analysis/leaderboard?",
        },
      ],
    },
    {
      title: "Hack For Climate 2.0, 2023 - ICT Mumbai",
      dates: "December 2nd, 2023",
      location: "Winner",
      description: "Stock Market Prediction and Sentimental Analysis",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/13/Institute_of_Chemical_Technology_logo.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1FYPONSh3HpCVV1P_ANAIeGIEdHxTErkN/view?usp=sharing",
        },
        {
          title: "Leaderboard",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.kaggle.com/competitions/swanirvahan-hack-for-climate-20-ict-ioc/leaderboard",
        },
      ],
    },
    {
      title: "Symposium, 2023 - ITER, SOA",
      dates: "May 27, 2023",
      location: "Winner",
      description:
        "Developed SixthSense, a stock market prediction simulator. It provides an engaging environment for users to experiment with various market scenarios and predictions.",
      image: "/soa.png",
      links: [
        {
          title: "Live",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://sixthsense.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/whysosaket/SixthSense",
        },
        {
          title: "Certificate",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1sjUs5OmoINCQkfeAIEUpxUPH79yEGVIU/view?usp=sharing",
        },
      ],
    },
    {
      title: "Hackerwar 4.0, 2023 - CODEX, ITER",
      dates: "Septermber 16th - 17th, 2023",
      location: "2nd Runner Up",
      description:
        "Developed ResNet, platform designed to facilitate efficient and coordinated response efforts during natural or man-made calamities. This application brings together rescue agencies, responders, and authorities to enhance collaboration, streamline resource allocation, and ensure faster disaster resolution.",
      image: "https://avatars.githubusercontent.com/u/143503395?v=4",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/whysosaket/ResNet",
        },
        {
          title: "Certificate",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1TdQ4K1fwvjnM4LPyMXb9_tK8k2zKBDe_/view?usp=sharing",
        },
        {
          title: "Article",
          icon: <Icons.framermotion className="h-4 w-4" />,
          href: "https://www.soa.ac.in/general-notifications/2023/9/21/ten-hackathon-teams-of-iter-qualify-for-sih-2023",
        },
      ],
    },
    {
      title: "Trithon, 2023 - TAT, Bhubaneswar",
      dates: "May 27, 2023",
      location: "5th Runner Up",
      description:
        "Developed GreenMe, that tackles this by tracking user activities, integrating with various apps for immediate sustainable suggestions, and fostering a community.",
      image:
        "https://media.licdn.com/dms/image/v2/C560BAQGW8IE6OgRRkA/company-logo_200_200/company-logo_200_200/0/1630646708778/trident_academy_of_technology_tat_bhubaneswar_logo?e=2147483647&v=beta&t=7Yi8jP_oQbrOL2ChiLh0t5uda2P1y0GkV0xINleUAY4",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/whysosaket/GreenMe",
        },
        {
          title: "Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/saketaryan_hackathon-flutter-nevergiveup-activity-7132777736028176385-kQE4?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
  ],
} as const;
