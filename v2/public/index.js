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
  content,
  showMenu,
  setShowMenu
}) {
  return getTag("div", {
    className: "flex items-center flex-col justify-center relative",
    onmouseleave: () => setShowMenu({ display: false, title: "" })
  }, [
    getTag("button", {
      className: "flex gap-2 items-center hover:bg-sky-700 p-4 rounded-xl mr-4 sm:mr-0 transition-colors duration-300" + (showMenu.display && showMenu.title === title ? " bg-sky-700" : ""),
      onClick: () => {
        setShowMenu((oldState) => {
          return {
            display: oldState.display ? false : true,
            title
          };
        });
      }
    }, [
      getTag("i", { className: icon }),
      getTag("p", { textContent: title })
    ]),
    !showMenu.display || showMenu.title !== title ? undefined : getTag("div", { className: "h-8 w-8 bg-sky-700 absolute top-14 rotate-45" }),
    !showMenu.display || showMenu.title !== title ? undefined : getTag("div", { className: "bg-sky-700 absolute top-16 px-4 py-2 rounded-xl z-10 right-1 sm:right-auto" }, [
      ...content.map((key, i) => {
        return getTag("div", { className: key.name && contactMenuToggles.includes(key.name) ? "lg:hidden" : "" }, [
          LinkTo({
            content: key,
            className: "my-1 p-2 whitespace-nowrap flex justify-center items-center gap-4 hover:bg-sky-800 rounded-xl transition-colors duration-300",
            textClassName: "flex-1 flex justify-center"
          }),
          i < content.length - 1 ? getTag("hr") : undefined
        ]);
      })
    ])
  ]);
}

// src/components/Header.ts
function Header() {
  let showMenu = { display: false, title: "" };
  function setShowMenu(obj) {
    showMenu = obj;
  }
  return getTag("div", { className: "bg-sky-600 text-gray-100 w-full flex justify-center sticky top-0 z-20 scroll-mb-0" }, [
    getTag("div", { className: "w-full sm:w-4/5 flex flex-col sm:flex-row justify-between items-center" }, [
      getTag("h1", { className: "text-2xl pb-2 p-8 sm:pb-8 font-bold", textContent: "Theo Drzewinski" }),
      getTag("div", { className: "flex gap-1 sm:gap-6 p-2" }, [
        ...contactMenuToggles.map((key, i) => {
          return LinkTo({
            className: "hidden lg:flex gap-2 items-center hover:bg-sky-700 p-4 rounded-xl transition-colors duration-300",
            content: { ...linkOptions[key], name: key }
          });
        }),
        Menu({
          icon: "fa-solid fa-at",
          title: "Contact",
          content: contactMenu.map((key) => getLinkInfo(key)),
          showMenu,
          setShowMenu
        }),
        Menu({
          icon: "fa-solid fa-bars",
          title: "Menu",
          content: subsectionMenu.map((key) => getLinkInfo(key)),
          showMenu,
          setShowMenu
        })
      ])
    ])
  ]);
}

// src/components/home.ts
function home(repos) {
  return getTag("div", { className: "w-full flex flex-col items-center" }, [
    Header(),
    !repos.length ? getTag("h1", {
      className: "p-4 my-12 text-xl bg-sky-600 w-4/5 text-center text-white rounded-xl",
      textContent: "Error: Couldn't fetch projects from GitHub, please try again later"
    }) : getTag("div", {}, [])
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