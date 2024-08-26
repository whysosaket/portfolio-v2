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
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
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
      start: "June 2024",
      end: "Present",
      description:"Currently working in a hybrid role at DBS Tech India, where I deploy and containerize Spring Boot applications on AWS EKS."
    },
    {
      company: "Soshals",
      href: "https://www.soshals.app/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/soshals.jpg",
      start: "February 2024",
      end: "February 2024",
      description:"As a Frontend Developer at Soshals in February 2024, I worked remotely on Next.js and developed 2 user profile templates within a month."
    },
    {
      company: "Samsung R&D Institute India",
      href: "https://www.soshals.app/",
      badges: [],
      location: "Remote",
      title: "Prism Research Intern",
      logoUrl: "/samsung.png",
      start: "April 2023",
      end: "February 2024",
      description:"As a Prism Research Intern at Samsung Research Institute, Bangalore, from April 2023 to February 2024, I virtually benchmarked DynamoDB performance across different systems, authored and published a research paper on the findings, and was endorsed by my mentor as the best worklet."
    },
    {
      company: "CODEX",
      badges: [],
      href: "https://codex-iter.in/",
      location: "Remote",
      title: "Student Coordinator",
      logoUrl: "/codex-logo.jpeg",
      start: "July 2022",
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
    }
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
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
  ],
} as const;
