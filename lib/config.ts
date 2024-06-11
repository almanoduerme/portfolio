interface IConfig {
  social: {
    github: string;
    x?: string;
    telegram?: string;
    linkedin?: string;
  };
  name: string;
  welcome?: string;
  bio: string | JSX.Element;
  email: string;
  navItems: {
    name: string;
    href: string;
  }[];
  projects?: {
    title: string;
    description: string;
    link?: string;
  }[];
  cv: string;
  metadata: {
    title: string;
    description: string;
    ogImage?: string;
    favicon?: string;
  };
  skills: {
    backend: string;
    frontend: string;
    database: string;
    design: string;
  };
  jobs: {
    title: string;
    company: string;
    date: string;
  }[];
}

export const config: IConfig = {
  name: "Nahuel Gómez",
  welcome: "Hey there 👋🏽",
  bio: "I'm Full Stack Developer based in Buenos Aires, Argentina. I have a passion for web development and love to create new things. I'm always looking for new challenges and opportunities to grow as a professional.",
  social: {
    github: "almanoduerme",
    x: "almanoduerme",
    telegram: "pnpmdev",
    linkedin: "nahuelagomez",
  },
  email: "nahue.code@gmail.com",
  navItems: [
    { name: "home", href: "/" },
    { name: "projects", href: "/projects" },
  ],
  projects: [
    {
      title: "pw-generator",
      description: "Password generator for backend services.",
      link: "https://www.npmjs.com/package/pw-generator",
    },
    {
      title: "ts-lib-starter",
      description: "A starter template for TypeScript libraries.",
      link: "https://github.com/almanoduerme/ts-lib-starter",
    },
    {
      title: "expense-tracker",
      description: "Telegram bot to track expenses.",
      link: "https://github.com/almanoduerme/expense-tracker",
    },
    {
      title: "something-project",
      description: "Something project description.",
      link: "https://github.com/almanoduerme/expense-tracker",
    },
  ],
  cv: "https://drive.google.com/file/d/1z8yEvXh_VmMNy1HcDbq3EgLb1GUlpiBn/view?usp=drive_link",
  metadata: {
    title: "Home | Nahuel Gómez",
    description: "Personal website of Nahuel Gómez.",
  },
  skills: {
    backend: "Node JS, Express, Nest JS, Python, TypeScript, Docker",
    frontend: "React, Next JS, Tailwind CSS, Material UI, Shadcn UI, Angular",
    database: "MongoDB, PostgreSQL, MySQL, SQLite, Firebase",
    design: "Figma, Adobe XD, Photoshop, Illustrator"
  },
  jobs: [
    {
      title: "Full Stack Developer",
      company: "Lineas de Oncologia",
      date: "03/22 - 01/24",
    },
    {
      title: "Frontend Developer",
      company: "High-End",
      date: "11/21 - 03/22",
    },
    {
      title: "Frontend Developer",
      company: "Ciencia Educa Argentina",
      date: "03/21 - 11/21",
    },
    {
      title: "Frontend Developer",
      company: "La Pucha Design",
      date: "07/21 - 09/21",
    },
  ],
};
