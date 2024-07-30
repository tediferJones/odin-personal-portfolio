var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// src/assets/images/portrait.jpg
var require_portrait = __commonJS((exports, module) => {
  module.exports = "./portrait-7e95f8a0c8caf96a.jpg";
});

// src/assets/documents/resume.pdf
var require_resume = __commonJS((exports, module) => {
  module.exports = "./resume-ef7caf35ea88c2d1.pdf";
});

// src/lib/getTag.ts
function getTag(type, props, children) {
  const node = document.createElement(type);
  if (props)
    Object.keys(props).forEach((propKey) => node[propKey] = props[propKey]);
  if (children?.length)
    node.append(...children.filter((child) => child != null));
  return node;
}

// src/contentConfig.ts
var ignoredRepos = ["nextjs-approuter-shadcn"];
var externalPages = {
  "odin-blog-client-service": "https://odin-blog-client-service-production.up.railway.app",
  "odin-blog-admin-service": "https://odin-blog-admin-service-production.up.railway.app",
  "odin-blog-api-service": "https://odin-blog-api-service-production.up.railway.app/api/posts/",
  "odin-members-only": "https://odin-members-only-production.up.railway.app",
  "odin-inventory-application": "https://odin-inventory-application-prod-production.up.railway.app",
  "chat-layers": "https://chat-layers-production.up.railway.app/",
  "password-manager": "https://pwdman.up.railway.app/",
  "movie-tracker": "https://movie-tracker-production.up.railway.app/",
  scoreboard: "https://scoretracker.up.railway.app",
  "odin-hangman": "https://replit.com/@ted_jones671/odin-hangman#hangman.rb",
  "odin-mastermind": "https://replit.com/@ted_jones671/odin-mastermind#mastermind.rb",
  "odin-tic-tac-toe": "https://replit.com/@ted_jones671/odin-tic-tac-toe#tic_tac_toe.rb",
  "odin-basic-informational-site": "https://replit.com/@ted_jones671/odin-basic-informational-site"
};
var portrait = require_portrait();
var bio = [
  "I am a full stack web developer who really enjoys trying to find new ways to solve novel and complex problems",
  "My goal is to learn as much as I can about how the web works"
];
var techExp = [
  {
    "Primary Language: TypeScript": [],
    "Less experienced languages": [
      "Python",
      "Bash",
      "Ruby"
    ],
    "My Stack": [
      "Runtime: Bun",
      "Database: Turso (SQLite)",
      "Back-End: NextJS",
      "Front-End: React",
      "Styling: Tailwind"
    ]
  },
  {
    "Other Technologies & Skills:": [
      "Solid understanding of git",
      "Knowledge of basic testing practices",
      "Experience working with APIs",
      "Experience with SQL and NoSQL databases",
      "Familiarity with Linux",
      "Previous tech support experience"
    ],
    "Interested in learning": [
      "SolidJS framework",
      "Functional programming",
      "A compiled language"
    ]
  }
];
var frontEndProjectNames = [
  "html-to-pdf",
  "instagram-history-finder",
  "odin-shopping-cart",
  "odin-memory-card"
];
var backEndProjectNames = [
  "chat-layers",
  "odin-blog-api-service",
  "odin-blog-admin-service",
  "odin-blog-client-service",
  "odin-members-only",
  "odin-inventory-application"
];
var cliRepos = {
  Algorithms: [
    "odin-knights-travails",
    "odin-binary-search-trees",
    "odin-linked-lists",
    "odin-recursion",
    "odin-bubble-sort",
    "odin-substring",
    "odin-caesar-cipher",
    "odin-stock-picker",
    "advent-of-code-2023",
    "google-foobar"
  ],
  "Command Line Games": [
    "odin-mastermind",
    "odin-hangman",
    "odin-tic-tac-toe"
  ]
};
var devicons = {
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  NextJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg",
  Bun: "https://api.iconify.design/devicon/bun.svg",
  NodeJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  Bash: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
  SQLite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
  Ruby: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
};
var linkOptions = {
  Resume: { href: require_resume(), icon: "fa-solid fa-file-invoice", newTab: true },
  GitHub: { href: "https://github.com/tediferJones", icon: "fa-brands fa-github", newTab: true },
  Email: { href: "mailto:theo_drz@live.com", icon: "fa-solid fa-envelope-open-text", newTab: true },
  Phone: { href: "tel:+14128891992", icon: "fa-solid fa-phone-volume", newTab: true },
  "About Me": { href: "#AboutMe" },
  "Technical Experience": { href: "#TechnicalExperience" },
  "Recent Projects": { href: "#RecentProjects" },
  "Front-End Projects": { href: "#FrontEndProjects" },
  "Back-End Projects": { href: "#BackEndProjects" },
  "CLI Projects": { href: "#CliProjects" },
  "All Projects": { href: "#AllProjects" }
};
var contactMenu = ["Resume", "GitHub", "Email", "Phone"];
var contactMenuToggles = ["Resume", "GitHub"];
var subsectionMenu = [
  "About Me",
  "Technical Experience",
  "Recent Projects",
  "Front-End Projects",
  "Back-End Projects",
  "CLI Projects",
  "All Projects"
];

// src/lib/getLinkInfo.ts
function getLinkInfo(key) {
  return {
    name: key,
    ...linkOptions[key]
  };
}

// src/components/subcomponents/LinkTo.ts
function LinkTo({
  content,
  className,
  textClassName
}) {
  return getTag("a", {
    className,
    target: content.newTab ? "_blank" : "",
    rel: content.newTab ? "noopener noreferrer" : "",
    href: content.href
  }, [
    content.icon ? getTag("i", { className: content.icon }) : getTag("div"),
    getTag("p", { className: textClassName, textContent: content.name })
  ]);
}

// src/components/subcomponents/Menu.ts
function Menu({
  icon,
  title,
  content
}) {
  return getTag("div", {
    className: "flex items-center flex-col justify-center relative",
    onmouseleave: () => {
      document.querySelector(`#${title}-body`)?.classList.add("hidden");
      document.querySelector(`#${title}-tail`)?.classList.add("hidden");
      document.querySelector(`#${title}-trigger`)?.classList.remove("bg-sky-700");
    }
  }, [
    getTag("button", {
      className: "flex gap-2 items-center hover:bg-sky-700 p-4 rounded-xl mr-4 sm:mr-0 transition-colors duration-300",
      id: `${title}-trigger`,
      onclick: () => {
        document.querySelector(`#${title}-body`)?.classList.toggle("hidden");
        document.querySelector(`#${title}-tail`)?.classList.toggle("hidden");
        document.querySelector(`#${title}-trigger`)?.classList.add("bg-sky-700");
      }
    }, [
      getTag("i", { className: `${icon} pointer-events-none` }),
      getTag("p", { textContent: title, className: "pointer-events-none" })
    ]),
    getTag("div", {
      className: "hidden h-8 w-8 bg-sky-700 absolute top-14 rotate-45",
      id: `${title}-tail`
    }),
    getTag("div", {
      className: "hidden bg-sky-700 absolute top-16 px-4 py-2 rounded-xl z-10 right-1 sm:right-auto",
      id: `${title}-body`
    }, content.map((key, i) => {
      return getTag("div", { className: key.name && contactMenuToggles.includes(key.name) ? "lg:hidden" : "" }, [
        LinkTo({
          content: key,
          className: "my-1 p-2 whitespace-nowrap flex justify-center items-center gap-4 hover:bg-sky-800 rounded-xl transition-colors duration-300",
          textClassName: "flex-1 flex justify-center"
        }),
        i < content.length - 1 ? getTag("hr") : undefined
      ]);
    }))
  ]);
}

// src/components/Header.ts
function Header() {
  return getTag("div", { className: "bg-sky-600 text-gray-100 w-full flex justify-center sticky top-0 z-20 scroll-mb-0" }, [
    getTag("div", { className: "w-full sm:w-4/5 flex flex-col sm:flex-row justify-between items-center" }, [
      getTag("h1", { className: "text-2xl pb-2 p-8 sm:pb-8 font-bold", textContent: "Theo Drzewinski" }),
      getTag("div", { className: "flex gap-1 sm:gap-6 p-2" }, [
        ...contactMenuToggles.map((key) => {
          return LinkTo({
            className: "hidden lg:flex gap-2 items-center hover:bg-sky-700 p-4 rounded-xl transition-colors duration-300",
            content: { ...linkOptions[key], name: key }
          });
        }),
        Menu({
          icon: "fa-solid fa-at",
          title: "Contact",
          content: contactMenu.map((key) => getLinkInfo(key))
        }),
        Menu({
          icon: "fa-solid fa-bars",
          title: "Menu",
          content: subsectionMenu.map((key) => getLinkInfo(key))
        })
      ])
    ])
  ]);
}

// src/components/AboutMe.ts
function AboutMe() {
  setTimeout(() => {
    document.querySelector("#portrait")?.classList.remove("top-[999px]");
    document.querySelector("#portrait")?.classList.remove("md:right-[999px]");
    document.querySelector("#portrait")?.classList.add("top-[0px]");
    document.querySelector("#portrait")?.classList.add("md:right-[0px]");
    document.querySelector("#title")?.classList.remove("bottom-[999px]");
    document.querySelector("#title")?.classList.add("bottom-[0px]");
    document.querySelector("#bio")?.classList.remove("left-[999px]");
    document.querySelector("#bio")?.classList.add("left-[0px]");
    document.querySelector("#aboutMeLinks")?.classList.remove("right-[999px]");
    document.querySelector("#aboutMeLinks")?.classList.remove("md:top-[999px]");
    document.querySelector("#aboutMeLinks")?.classList.add("right-[0px]");
    document.querySelector("#aboutMeLinks")?.classList.add("md:top-[0px]");
  }, 1);
  return getTag("div", { id: "AboutMe", className: "overflow-clip w-full flex justify-center items-center gap-8 flex-col-reverse md:flex-row rounded-xl scroll-mt-48 md:scroll-mt-32" }, [
    getTag("img", {
      className: `-z-10 md:w-2/5 w-4/5 mb-12 md:my-12 rounded-xl relative transition-all duration-1000 md:top-0 top-[999px] md:right-[999px]`,
      src: portrait,
      alt: "Portrait",
      id: "portrait"
    }),
    getTag("div", { className: "md:w-2/5 w-4/5 pt-12 md:py-12 flex flex-col justify-between gap-8" }, [
      getTag("h1", {
        className: `bg-sky-600 rounded-xl p-8 text-white text-center text-2xl relative transition-all duration-1000 bottom-[999px]`,
        textContent: "Welcome to my portfolio!",
        id: "title"
      }),
      getTag("p", {
        className: `bg-sky-600 rounded-xl p-8 text-white text-lg text-center relative transition-all duration-1000 left-[999px]`,
        id: "bio"
      }, bio.reduce((children, str, i) => {
        children.push(getTag("span", { textContent: str }));
        if (i < bio.length - 1) {
          children.push(getTag("br"));
          children.push(getTag("br"));
        }
        return children;
      }, [])),
      getTag("div", {
        className: `flex flex-wrap gap-8 relative transition-all duration-1000 md:right-0 right-[999px] md:top-[999px]`,
        id: "aboutMeLinks"
      }, ["Email", "Phone"].map((key) => {
        return LinkTo({
          className: "flex-1 p-8 text-lg text-white flex gap-2 items-center justify-center bg-sky-600 hover:bg-sky-800 rounded-xl transition-colors duration-300",
          content: getLinkInfo(key)
        });
      }))
    ])
  ]);
}

// src/components/subcomponents/BulletList.ts
function BulletList({
  heading,
  points
}) {
  return !points.length ? getTag("h4", {
    className: "text-xl p-4",
    textContent: "Primary Language: TypeScript"
  }) : getTag("ul", { className: "list-outside list-disc p-2 flex flex-col items-center" }, [
    getTag("h4", {
      className: "text-xl p-2 self-start",
      textContent: heading
    }),
    ...points.map((point) => getTag("li", {
      className: "w-4/5",
      textContent: point
    }))
  ]);
}

// src/components/TechnicalExperience.ts
function TechnicalExperience() {
  return getTag("div", {
    id: "TechnicalExperience",
    className: "py-12 bg-sky-600 text-gray-100 w-full flex flex-col items-center scroll-mt-48 md:scroll-mt-32"
  }, [
    getTag("div", { className: "w-4/5 pb-4" }, [
      getTag("h1", {
        className: "text-2xl self-start",
        textContent: "Relevant technical experience"
      })
    ]),
    getTag("div", { className: "w-4/5 flex flex-wrap" }, techExp.map((col) => getTag("div", { className: "flex flex-col justify-evenly flex-1" }, Object.keys(col).map((heading) => BulletList({
      heading,
      points: col[heading]
    }))))),
    getTag("div", { className: "bg-white w-4/5 p-8 mt-8 grid gap-4 grid-cols-3 justify-items-center sm:grid-cols-3 md:grid-cols-5 rounded-xl" }, Object.keys(devicons).map((langName) => {
      return getTag("img", {
        className: "w-20 h-20",
        src: devicons[langName],
        alt: langName
      });
    }))
  ]);
}

// src/components/subcomponents/LinkButtons.ts
function LinkButtons({
  codeUrl,
  pageUrl,
  addClasses
}) {
  const sharedClasses = "flex-1 text-center p-4 flex justify-center items-center gap-2 text-gray-100 rounded-xl transition-colors duration-300";
  return getTag("div", { className: "flex-1 flex flex-wrap p-2 gap-2 bg-white" + (addClasses ? " " + addClasses : "") }, [
    LinkTo({
      className: `${sharedClasses} bg-blue-800 hover:bg-blue-950`,
      content: {
        href: codeUrl,
        name: "View Code",
        icon: "fa-regular fa-file-code",
        newTab: true
      }
    }),
    !pageUrl ? undefined : LinkTo({
      className: `${sharedClasses} bg-teal-500 hover:bg-teal-600`,
      content: {
        href: pageUrl,
        name: "View Page",
        icon: "fa-solid fa-link",
        newTab: true
      }
    })
  ]);
}

// src/components/subcomponents/LanguageIconLinks.ts
function LanguageIconLinks({ repo }) {
  const { language, name } = repo;
  let langNames = [language];
  if (["HTML", "CSS"].includes(language)) {
    langNames = ["HTML", "CSS"];
  }
  if (language === "Shell") {
    langNames = ["Bash"];
  }
  return langNames.map((lang) => {
    return getTag("button", { onclick: () => {
      const langId = ["HTML", "CSS"].includes(lang) ? "HTML-CSS" : lang;
      const element = document.querySelector(`#${langId}`);
      const isOpen = element?.parentNode?.lastElementChild?.classList.value.includes("max-h-[9999px]");
      if (element && !isOpen) {
        ["mousedown", "click", "mouseup"].forEach((event) => {
          element.dispatchEvent(new MouseEvent(event, {
            view: window,
            bubbles: true,
            cancelable: true,
            buttons: 1
          }));
        });
      }
      setTimeout(() => {
        window.location.href = `#${langId}`;
      }, 75);
    } }, [
      getTag("img", {
        className: "h-12",
        src: devicons[lang],
        alt: lang
      })
    ]);
  });
}

// src/components/subcomponents/RepoList.ts
function RepoList({ repos, title }) {
  return repos.map((repo) => {
    return getTag("div", { className: "flex flex-col lg:flex-row mx-16 mb-6 bg-white rounded-xl" }, [
      getTag("div", { className: "flex-1 p-4 flex justify-between items-center gap-4 text-center" }, [
        getTag("h1", { className: "flex-1 text-center", textContent: repo.name }),
        getTag("div", { className: "flex" }, LanguageIconLinks({ repo }))
      ]),
      LinkButtons({
        codeUrl: repo.html_url,
        pageUrl: repo.page_link,
        addClasses: "rounded-xl"
      })
    ]);
  });
}

// src/components/RecentProjects.ts
function RecentProjects({ repos }) {
  return getTag("div", {
    id: "RecentProjects",
    className: "bg-sky-600 w-full md:w-4/5 my-12 pb-4 md:rounded-xl scroll-mt-48 md:scroll-mt-32"
  }, [
    getTag("h1", { className: "text-gray-100 text-2xl p-8", textContent: "Recent Projects" }),
    ...RepoList({ repos: repos.slice(0, 8), title: "RecentProjects" })
  ]);
}

// src/components/FrontEndProjects.ts
function FrontEndProjects({ repos }) {
  return getTag("div", { id: "FrontEndProjects", className: "mb-12 bg-sky-600 p-12 w-full scroll-mt-48 md:scroll-mt-32" }, [
    getTag("h1", { className: "pb-8 text-2xl text-white", textContent: "Front-End Projects (Hosted with GitHub Pages)" }),
    getTag("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8" }, repos.filter((repo) => frontEndProjectNames.includes(repo.name)).map((repo) => {
      console.log(repo.name);
      return getTag("div", { className: "w-full" }, [
        getTag("div", { className: "flex justify-between items-center bg-white p-4 text-lg rounded-t-xl" }, [
          getTag("h3", { textContent: repo.name }),
          getTag("div", { className: "flex gap-2" }, LanguageIconLinks({ repo }))
        ]),
        getTag("iframe", {
          className: "w-full bg-white",
          src: repo.page_link,
          height: "480",
          width: "360",
          title: repo.name
        }),
        LinkButtons({
          codeUrl: repo.html_url,
          pageUrl: repo.page_link,
          addClasses: "rounded-b-xl"
        })
      ]);
    }))
  ]);
}

// src/components/subcomponents/DropDown.ts
function DropDown({ repoArr, title }) {
  const fixedTitle = title.replaceAll(" ", "-").replaceAll(" & ", "-");
  return getTag("div", { className: `transition-colors duration-500 bg-sky-600`, id: `${fixedTitle}-container` }, [
    getTag("hr"),
    getTag("button", {
      id: fixedTitle,
      className: "w-full text-xl text-gray-100 p-4 px-8 flex justify-between scroll-mt-32",
      value: `${title}RepoList`,
      onclick: () => {
        document.querySelector(`#${fixedTitle}-container`)?.classList.toggle("bg-sky-600");
        document.querySelector(`#${fixedTitle}-container`)?.classList.toggle("bg-sky-700");
        document.querySelector(`#${fixedTitle}-icon`)?.classList.toggle("rotate-0");
        document.querySelector(`#${fixedTitle}-icon`)?.classList.toggle("-rotate-90");
        document.querySelector(`#${fixedTitle}-body`)?.classList.toggle("max-h-[0px]");
        document.querySelector(`#${fixedTitle}-body`)?.classList.toggle("max-h-[9999px]");
      }
    }, [
      getTag("div", { className: "pointer-events-none my-auto", textContent: `${title} (${repoArr.length})` }),
      getTag("i", {
        id: `${fixedTitle}-icon`,
        className: `fa-solid fa-chevron-left flex justify-center items-center text-3xl pointer-events-none transition-all duration-500 rotate-0`
      })
    ]),
    getTag("div", { id: `${fixedTitle}-body`, className: `overflow-hidden transition-maxHeight ease-in-out duration-500 max-h-[0px]` }, RepoList({ repos: repoArr, title }))
  ]);
}

// src/components/BackEndProjects.ts
function BackEndProjects({ repos }) {
  return getTag("div", { id: "BackEndProjects", className: "w-full md:w-4/5 mb-12 md:rounded-xl overflow-clip scroll-mt-48 md:scroll-mt-32" }, [
    DropDown({
      title: "Back-End Projects",
      repoArr: repos.filter((repo) => backEndProjectNames.includes(repo.name))
    })
  ]);
}

// src/components/CommandLineProjects.ts
function CommandLineProjects({ repos }) {
  const commandLineRepos = Object.keys(cliRepos).reduce((obj, key) => {
    obj[key] = repos.filter((repo) => cliRepos[key].includes(repo.name));
    return obj;
  }, {});
  const total = Object.keys(commandLineRepos).reduce((total2, key) => total2 += commandLineRepos[key].length, 0);
  return getTag("div", { id: "CliProjects", className: "bg-sky-600 w-full md:w-4/5 mb-12 md:rounded-xl overflow-clip scroll-mt-48 md:scroll-mt-32" }, [
    getTag("h1", { className: "text-2xl text-gray-100 p-4", textContent: `Command Line Projects and Algorithms (${total})` }),
    ...Object.keys(commandLineRepos).map((item) => {
      return DropDown({
        repoArr: commandLineRepos[item],
        title: item
      });
    })
  ]);
}

// src/components/AllProjects.ts
function AllProjects({ repos }) {
  const languages = repos.reduce((obj, repo) => {
    let lang = repo.language;
    if (["HTML", "CSS"].includes(repo.language)) {
      lang = "HTML & CSS";
    }
    if (repo.language === "Shell") {
      lang = "Bash";
    }
    obj[lang] = obj[lang] ? obj[lang].concat(repo) : [repo];
    return obj;
  }, {});
  const total = Object.keys(languages).reduce((total2, key) => total2 += languages[key].length, 0);
  return getTag("div", { id: "AllProjects", className: "bg-sky-600 w-full md:w-3/5 mb-12 md:rounded-xl overflow-clip scroll-mt-48 md:scroll-mt-32" }, [
    getTag("h1", { className: "text-2xl text-gray-100 p-4", textContent: `All Projects (${total})` }),
    ...Object.keys(languages).sort().map((languageKey) => {
      return DropDown({
        repoArr: languages[languageKey],
        title: languageKey
      });
    })
  ]);
}

// src/components/home.ts
function home(repos) {
  return getTag("div", { className: "w-full flex flex-col items-center" }, [
    Header(),
    AboutMe(),
    TechnicalExperience(),
    ...!repos.length ? [getTag("h1", {
      className: "p-4 my-12 text-xl bg-sky-600 w-4/5 text-center text-white rounded-xl",
      textContent: "Error: Couldn't fetch projects from GitHub, please try again later"
    })] : [
      RecentProjects({ repos }),
      FrontEndProjects({ repos }),
      BackEndProjects({ repos }),
      CommandLineProjects({ repos }),
      AllProjects({ repos })
    ]
  ]);
}

// src/index.ts
fetch("https://api.github.com/users/tediferjones/repos?&per_page=100").then((res) => res.json()).then((data) => {
  if (data.length === undefined) {
    console.log("EARLY RETURN");
    return [];
  }
  const keys = Object.keys(externalPages);
  const repos = data.filter((repo) => repo.language && !ignoredRepos.includes(repo.name)).map((repo) => {
    const { name, has_pages } = repo;
    if (has_pages || keys.includes(name)) {
      repo.page_link = has_pages ? `https://tediferjones.github.io/${name}` : externalPages[name];
    }
    return repo;
  }).sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  document.body.appendChild(home(repos));
});
