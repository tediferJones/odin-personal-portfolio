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
    node.append(...children);
  return node;
}

// src/components/Header.tsx
function Header() {
  return getTag("h1", { textContent: "THIS IS THE HEADER" });
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
