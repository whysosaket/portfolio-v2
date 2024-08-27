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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
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
