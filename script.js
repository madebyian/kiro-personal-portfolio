(() => {
  "use strict";

  // portfolio-data.js
  const portfolioData = {
    name: "Ian Gamez",
    title: "Junior Computer Science Student",
    location: "",
    introduction:
      "I’m Ian Gamez, a junior-year Computer Science student who builds websites as part of a Tech Team of AWS Student Builder Group USLT.",
    about:
      "I enjoy turning ideas into useful digital experiences and learning through hands-on projects. My interests connect software development, artificial intelligence, creative problem-solving, and aviation. Whether I am collaborating with a student tech team, building an application, or exploring a new tool, I aim to create work that is clear, practical, and meaningful.",
    profileImage: "assets/images/profile/profile.png",
    skills: [
      {
        category: "Languages",
        items: ["HTML5", "CSS3", "JavaScript", "Python", "Java", "C#"],
      },
      {
        category: "Frameworks & Libraries",
        items: [
          "React",
          "Node.js",
          "Express.js",
          "Bootstrap",
          "Tailwind CSS",
          ".NET",
        ],
      },
      {
        category: "AI Tools & Frameworks",
        items: ["OpenAI", "Google Gemini", "PyTorch", "Hugging Face"],
      },
      {
        category: "Databases",
        items: [
          "MySQL",
          "Microsoft SQL Server",
          "PostgreSQL",
          "MongoDB",
          "Firebase",
        ],
      },
      {
        category: "Development Tools",
        items: [
          "Visual Studio Code",
          "Visual Studio",
          "Git",
          "GitHub",
          "Postman",
          "Figma",
          "Android Studio",
          "Canva",
          "Adobe Photoshop",
        ],
      },
      {
        category: "Cloud & Deployment",
        items: ["Amazon Web Services", "Vercel", "Netlify"],
      },
    ],
    projects: [
      {
        title: "BattleGrid",
        description:
          "A World War II-themed, grid-based strategy game inspired by Battleship. Players deploy a fleet, plan attacks, and use tactical thinking to outmaneuver their opponent in a focused browser experience.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        image: "assets/images/projects/battlegridLogo.png",
        liveUrl: "https://battlegrid.vercel.app/",
        sourceUrl:
          "https://github.com/Gumzverse/BattleGrid--Battleship-Inspired",
      },
      {
        title: "AWS Student Builder Group – USLT Website",
        description:
          "The official website for the AWS Student Builder Group at the University of Saint Louis Tuguegarao. It gives students one place to discover events, programs, announcements, learning resources, and community activities.",
        technologies: ["HTML5", "CSS3", "JavaScript", "AWS"],
        image: "assets/images/projects/mascotLowOpacity.png",
        liveUrl: "",
        sourceUrl: "",
      },
      {
        title: "Owlert",
        description:
          "An AI-powered application our team developed and submitted for the ASEAN AI Hackathon. The project brought together rapid problem-solving, prototyping, collaboration, and presentation under a limited development timeline.",
        technologies: ["Antigravity", "TS", "Supabase"],
        image: "assets/images/projects/owlert.jpg",
        liveUrl: "",
        sourceUrl: "",
      },
    ],
    experience: [
      {
        role: "Website Builder",
        organization: "Tech Team",
        dates: "Present",
        description:
          "Builds and maintains responsive websites with a team, turning organization needs into clear pages and practical web experiences.",
      },
      {
        role: "Freelance Developer",
        organization: "Independent",
        dates: "Project-based",
        description:
          "Works with clients and collaborators to plan, build, revise, and deliver websites and small applications based on real requirements.",
      },
      {
        role: "Application Builder",
        organization: "Academic and Hackathon Projects",
        dates: "Ongoing",
        description:
          "Creates web and software prototypes, tests ideas quickly, and collaborates on applications that combine programming, design, and emerging AI tools.",
      },
    ],
    education: {
      program: "Bachelor of Science in Computer Science",
      currentLevel: "Junior Year",
      school: "University of Saint Louis Tuguegarao",
      expectedGraduation: "",
      description:
        "My studies are strengthening my foundation in programming, algorithms, databases, software engineering, web development, and artificial intelligence. I apply these concepts through team projects, practical applications, and continuous independent learning.",
      courses: [
        "Full-Stack Web Development",
        "Software Engineering",
        "Data Structures and Algorithms",
        "Database Systems",
        "Artificial Intelligence",
      ],
      certifications: [],
    },
    hobbies: [
      {
        name: "Volleyball",
        description:
          "I enjoy volleyball for its pace, teamwork, communication, and the discipline of improving through consistent practice.",
        image: "assets/images/hobbies/vb.jpg",
      },
      {
        name: "Private Aviation",
        description:
          "As a licensed private pilot, I value the preparation, precision, situational awareness, and responsibility that every flight requires.",
        image: "assets/images/hobbies/plane.jpg",
      },
      {
        name: "Stocks and Cryptocurrency",
        description:
          "I follow stocks and cryptocurrency to learn about markets, technology, risk, and the way global events influence financial decisions.",
        image: "assets/images/hobbies/fly.jpg",
      },
    ],
    contact: {
      email: "",
      github: "https://github.com/madebyIan",
      linkedin: "https://www.linkedin.com/in/fridel-ian-gamez-2b1b64283/",
      resume: "",
      domain: "",
    },
    // All editorial copy and missing-content messages are editable here, too.
    copy: {
      heroEyebrow: "A LITTLE CODE. A LITTLE ALTITUDE.",
      heroStatement: "Curiosity,\nin motion.",
      heroNote: "Building for the web. Exploring beyond it.",
      heroCta: "Explore my work",
      sections: [
        {
          id: "hero",
          label: "Home",
          heading: "Ian Gamez",
          intro: "Welcome to my little corner of the internet.",
        },
        {
          id: "about",
          label: "About",
          heading: "Always\ncurious.",
          intro:
            "A student, a builder, and a pilot. Here’s a little more about the person behind the screen.",
        },
        {
          id: "skills",
          label: "Skills",
          heading: "The building\nblocks.",
          intro: "The tools and ideas behind the things I build.",
        },
        {
          id: "projects",
          label: "Projects",
          heading: "From idea\nto browser.",
          intro:
            "A growing collection of things built, lessons learned, and ideas explored.",
        },
        {
          id: "experience",
          label: "Experience",
          heading: "Learning\nby building.",
          intro: "Working with a Tech Team to bring websites to life.",
        },
        {
          id: "education",
          label: "Education",
          heading: "A work\nin progress.",
          intro:
            "Building a foundation in Computer Science, one discovery at a time.",
        },
        {
          id: "hobbies",
          label: "Hobbies",
          heading: "Beyond\nthe keyboard.",
          intro: "On the court, in the cockpit, and following the markets.",
        },
        {
          id: "contact",
          label: "Contact",
          heading: "Let’s make\na connection.",
          intro:
            "Thanks for stopping by. There’s always another idea on the horizon.",
        },
      ],
    },
    placeholders: {
      about: "About information coming soon.",
      skills: "Additional skills will be added soon.",
      projectTitle: "Next project",
      projectDescription: "Project details will be added soon.",
      experience: "Organization and dates coming soon.",
      education: "School and graduation details coming soon.",
      courses: "Courses and certifications will be added soon.",
      hobby: "More about this interest coming soon.",
      contact: "Contact details will be added soon.",
      image: "IMAGE COMING SOON",
    },
  };

  // dinosaur.js
  // Original grid drawing: a long-tailed, crested little explorer; no borrowed sprites.
  const dinosaurSvg = `<svg viewBox="0 0 40 34" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true"><path d="M23 3h4V0h3v3h6v3h4v11H29v4h5v3h-8v-4h-3v7H11v-4H7v-4H3v-5H0V8h3v5h5v3h9v-4h6z"/><path fill="white" d="M32 7h3v3h-3zM33 14h7v2h-7z"/><g class="leg leg-one"><path d="M12 25h5v6h4v3h-9z"/></g><g class="leg leg-two"><path d="M22 25h5v6h4v3h-9z"/></g></svg>`;
  function dinosaur() {
    return `<div class="landscape" aria-hidden="true"><span class="cloud cloud-one"></span><span class="cloud cloud-two"></span><div class="dinosaur">${dinosaurSvg}</div><div class="pixel-plant plant-one"></div><div class="pixel-plant plant-two"></div><div class="ground"></div><div class="ground-specks"></div></div>`;
  }

  // navigation.js
  function navigation(data) {
    return `<header class="site-header"><a class="wordmark" href="#hero" aria-label="${data.name} — home">ig<span class="brand-dot">.</span></a><nav aria-label="Portfolio sections">${data.copy.sections.map((s, i) => `<a href="#${s.id}" data-section="${i}" ${i === 0 ? 'aria-current="page"' : ""}>${s.label}</a>`).join("")}</nav><span class="header-note">PERSONAL PORTFOLIO <span>↗</span></span><button class="menu-toggle" aria-expanded="false" aria-label="Toggle navigation">Menu <span>＋</span></button></header>`;
  }

  // progress-indicator.js
  function progressIndicator(sections) {
    return `<div class="progress"><div class="progress-text" role="status" aria-live="polite"><span id="section-count">01 / 08</span><span class="progress-divider">—</span><span id="section-name">HOME</span></div><nav class="progress-markers" aria-label="Section progress">${sections.map((s, i) => `<button data-go="${i}" aria-label="Go to ${s.label}" ${i === 0 ? 'aria-current="step"' : ""}><span></span></button>`).join("")}</nav></div>`;
  }

  // project-card.js
  const escapeHtml = (value) =>
    String(value ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  function safeUrl(value) {
    if (!value) return "";
    try {
      const url = new URL(value);
      return ["https:", "http:"].includes(url.protocol)
        ? escapeHtml(url.href)
        : "";
    } catch {
      return "";
    }
  }
  function assetUrl(path) {
    if (!path) return "";
    if (/^https?:\/\//.test(path)) return safeUrl(path);
    // Relative paths work both on disk and under a hosted subdirectory.
    if (
      !/^(?:\.\/)?assets\/[a-zA-Z0-9_./ -]+$/.test(path) ||
      path.includes("..")
    )
      return "";
    return escapeHtml(path.startsWith("./") ? path : `./${path}`);
  }
  function imageFrame(path, alt, label = "IMAGE COMING SOON", style = "") {
    const url = assetUrl(path);
    return `<div class="image-frame ${style}"><div class="image-placeholder" aria-hidden="true"><span class="placeholder-pixel">＋</span><span>${escapeHtml(label)}</span></div>${url ? `<img src="${url}" alt="${escapeHtml(alt)}" loading="lazy" />` : ""}</div>`;
  }
  function projectCard(project, i, placeholders) {
    const live = safeUrl(project.liveUrl),
      source = safeUrl(project.sourceUrl);
    return `<article class="project-card">${imageFrame(project.image, project.title || placeholders.projectTitle, `PROJECT ${String(i + 1).padStart(2, "0")} / COMING SOON`)}<div class="card-meta"><span>0${i + 1}</span><span>${project.title ? "PROJECT" : "IN THE PIPELINE"}</span></div><h3>${escapeHtml(project.title || placeholders.projectTitle)}</h3><p>${escapeHtml(project.description || placeholders.projectDescription)}</p><div class="tags">${project.technologies.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}</div><div class="project-links">${live ? `<a href="${live}" target="_blank" rel="noopener noreferrer">Live site ↗</a>` : ""}${source ? `<a href="${source}" target="_blank" rel="noopener noreferrer">Source code ↗</a>` : ""}</div></article>`;
  }

  // section-controls.js
  function sectionControls() {
    return `<div class="section-controls"><button data-direction="-1" aria-label="Previous section" disabled><span>←</span><span class="control-label">Previous</span></button><button data-direction="1" aria-label="Next section"><span class="control-label">Next section</span><span>→</span></button></div>`;
  }

  // animations.js
  function setupAnimations() {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () =>
      document.documentElement.classList.toggle(
        "reduced-motion",
        media.matches,
      );
    update();
    media.addEventListener("change", update);
  }

  // horizontal-scroll.js
  function setupHorizontalScroll(sections) {
    const track = document.querySelector(".portfolio-track");
    const panels = [...document.querySelectorAll(".portfolio-section")];
    const mobile = matchMedia("(max-width: 900px), (max-height: 560px)");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    let active = 0,
      transitioning = false,
      destination = 0,
      destinationEdge = null,
      lastWheel = 0,
      wheelTotal = 0;
    let settleTimer, finishTimer, touchStart;
    const panelWidth = () => track.getBoundingClientRect().width;
    function lock(index) {
      track.style.scrollSnapType = "none";
      track.scrollTo({ left: index * panelWidth(), behavior: "instant" });
      track.style.scrollSnapType = "";
    }
    function update(index, focus = false) {
      active = index;
      panels.forEach((panel, i) => {
        panel.inert = !mobile.matches && i !== index;
      });
      document
        .querySelectorAll("[data-section]")
        .forEach((link) =>
          link.toggleAttribute(
            "aria-current",
            Number(link.dataset.section) === index,
          ),
        );
      document
        .querySelectorAll("[data-section][aria-current]")
        .forEach((link) => link.setAttribute("aria-current", "page"));
      document.querySelectorAll("[data-go]").forEach((button) => {
        if (Number(button.dataset.go) === index)
          button.setAttribute("aria-current", "step");
        else button.removeAttribute("aria-current");
      });
      document.querySelector("#section-count").textContent =
        `${String(index + 1).padStart(2, "0")} / ${String(sections.length).padStart(2, "0")}`;
      document.querySelector("#section-name").textContent =
        sections[index].label.toUpperCase();
      document.querySelector('[data-direction="-1"]').disabled = index === 0;
      document.querySelector('[data-direction="1"]').disabled =
        index === panels.length - 1;
      if (focus)
        panels[index].querySelector("h1, h2").focus({ preventScroll: true });
      if (location.hash !== `#${sections[index].id}`) {
        // Some browsers restrict history updates on local files; navigation still works.
        try {
          history.replaceState(null, "", `#${sections[index].id}`);
        } catch {
          /* Keep local navigation usable. */
        }
      }
    }
    function finish(focus) {
      clearTimeout(finishTimer);
      if (!transitioning) return;
      lock(destination);
      transitioning = false;
      document.body.classList.remove("is-travelling");
      if (destinationEdge) {
        const container = panels[destination].querySelector(".section-details");
        const explore = container.querySelector(".explore");
        const enterAtBottom = destinationEdge === "end";
        container.scrollTop = enterAtBottom ? container.scrollHeight : 0;
        container.dataset.exploring = String(enterAtBottom);
        if (explore)
          explore.setAttribute("aria-expanded", String(enterAtBottom));
        destinationEdge = null;
      }
      update(destination, focus);
    }
    function go(index, focus = true, entryEdge = null) {
      index = Math.max(0, Math.min(panels.length - 1, index));
      if (mobile.matches) {
        panels[index].scrollIntoView({
          behavior: reduce.matches ? "instant" : "smooth",
        });
        update(index, focus);
        return;
      }
      if (transitioning || index === active) return;
      transitioning = true;
      clearTimeout(settleTimer);
      destination = index;
      destinationEdge = entryEdge;
      document.body.classList.add("is-travelling");
      // Menu destinations traverse intermediate panels; wheel/arrow commands are always one step.
      track.style.scrollSnapType = "none";
      track.scrollTo({
        left: index * panelWidth(),
        behavior: reduce.matches ? "instant" : "smooth",
      });
      finishTimer = setTimeout(() => finish(focus), reduce.matches ? 0 : 700);
    }
    track.addEventListener(
      "wheel",
      (event) => {
        if (mobile.matches) return;
        if (event.ctrlKey) return;
        const container = panels[active].querySelector(".section-details");
        const scale =
          event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1;
        const horizontalIntent =
          Math.abs(event.deltaX) > Math.abs(event.deltaY);
        const delta = (horizontalIntent ? event.deltaX : event.deltaY) * scale;
        const maxScroll = Math.max(
          0,
          container.scrollHeight - container.clientHeight,
        );
        const canMoveDown = delta > 0 && container.scrollTop < maxScroll - 2;
        const canMoveUp = delta < 0 && container.scrollTop > 2;

        // Read each chapter vertically before crossing to the next horizontal panel.
        if (!horizontalIntent && (canMoveDown || canMoveUp)) {
          if (canMoveDown) {
            container.dataset.returning = "false";
            container.dataset.exploring = "true";
            container
              .querySelector(".explore")
              ?.setAttribute("aria-expanded", "true");
          }
          wheelTotal = 0;
          return;
        }

        event.preventDefault();
        const now = performance.now(),
          gap = now - lastWheel;
        lastWheel = now;
        if (gap > 200) wheelTotal = 0;
        if (transitioning || (wheelTotal === Infinity && gap < 200)) return;
        wheelTotal += delta;
        if (Math.abs(wheelTotal) >= 30) {
          const direction = Math.sign(wheelTotal);
          go(active + direction, false, direction < 0 ? "end" : "start");
          wheelTotal = Infinity;
        }
      },
      { passive: false },
    );
    track.addEventListener("scroll", (event) => {
      if (event.target !== track || mobile.matches || transitioning) return;
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        const nearest = Math.round(track.scrollLeft / panelWidth());
        const bounded = Math.max(
          0,
          Math.min(
            panels.length - 1,
            Math.max(active - 1, Math.min(active + 1, nearest)),
          ),
        );
        if (Math.abs(track.scrollLeft - bounded * panelWidth()) > 1)
          lock(bounded);
        update(bounded);
      }, 100);
    });
    track.addEventListener(
      "touchstart",
      (event) => {
        touchStart = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      },
      { passive: true },
    );
    track.addEventListener(
      "touchmove",
      (event) => {
        if (
          !mobile.matches &&
          touchStart &&
          Math.abs(event.touches[0].clientX - touchStart.x) >
            Math.abs(event.touches[0].clientY - touchStart.y)
        )
          event.preventDefault();
      },
      { passive: false },
    );
    track.addEventListener("touchend", (event) => {
      if (
        !mobile.matches &&
        touchStart &&
        event.target.closest(".section-details")?.dataset.exploring !== "true"
      ) {
        const dx = touchStart.x - event.changedTouches[0].clientX,
          dy = touchStart.y - event.changedTouches[0].clientY;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy))
          go(active + Math.sign(dx), false);
      }
      touchStart = null;
    });
    document.addEventListener("click", (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      const marker = event.target.closest("[data-go]");
      const control = event.target.closest("[data-direction]");
      if (anchor) {
        const index = sections.findIndex(
          (s) => `#${s.id}` === anchor.getAttribute("href"),
        );
        if (index >= 0) {
          event.preventDefault();
          go(index);
          document.querySelector(".site-header").classList.remove("menu-open");
          document
            .querySelector(".menu-toggle")
            .setAttribute("aria-expanded", "false");
          if (index === active)
            panels[index]
              .querySelector("h1, h2")
              .focus({ preventScroll: true });
        }
      } else if (marker) go(Number(marker.dataset.go));
      else if (control) go(active + Number(control.dataset.direction));
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        document.querySelector(".site-header").classList.remove("menu-open");
        document
          .querySelector(".menu-toggle")
          .setAttribute("aria-expanded", "false");
      }
      if (
        mobile.matches ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.target.matches(
          'input, textarea, select, [contenteditable="true"]',
        )
      )
        return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        go(active + (event.key === "ArrowRight" ? 1 : -1));
      }
    });
    const observer = new IntersectionObserver(
      (entries) => {
        if (!mobile.matches) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) update(panels.indexOf(entry.target));
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );
    panels.forEach((panel) => observer.observe(panel));
    function resize() {
      clearTimeout(finishTimer);
      clearTimeout(settleTimer);
      transitioning = false;
      document.body.classList.remove("is-travelling");
      update(active);
      if (!mobile.matches) lock(active);
    }
    window.addEventListener("resize", resize);
    window.addEventListener("hashchange", () => {
      const i = sections.findIndex((s) => `#${s.id}` === location.hash);
      if (i >= 0) go(i);
    });
    const initial = Math.max(
      0,
      sections.findIndex((s) => `#${s.id}` === location.hash),
    );
    update(initial);
    requestAnimationFrame(() =>
      mobile.matches
        ? panels[initial].scrollIntoView({ behavior: "instant" })
        : lock(initial),
    );
    return {
      get mobile() {
        return mobile.matches;
      },
      get reducedMotion() {
        return reduce.matches;
      },
    };
  }

  // vertical-details.js
  function setupVerticalDetails(controller) {
    document.querySelectorAll(".section-details").forEach((container) => {
      const explore = container.querySelector(".explore");
      const detail = container.querySelector(".detail-content");
      if (!explore || !detail) return;
      const scroll = (top) =>
        container.scrollTo({
          top,
          behavior: controller.reducedMotion ? "instant" : "smooth",
        });
      explore.addEventListener("click", () => {
        container.dataset.returning = "false";
        container.dataset.exploring = "true";
        explore.setAttribute("aria-expanded", "true");
        if (controller.mobile)
          detail.scrollIntoView({
            behavior: controller.reducedMotion ? "instant" : "smooth",
            block: "start",
          });
        else scroll(detail.offsetTop);
        detail.querySelector(".back-top").focus({ preventScroll: true });
      });
      container.querySelectorAll(".back-top").forEach((button) =>
        button.addEventListener("click", () => {
          container.dataset.returning = "true";
          container.dataset.exploring = "false";
          explore.setAttribute("aria-expanded", "false");
          if (controller.mobile)
            container.closest("section").scrollIntoView({
              behavior: controller.reducedMotion ? "instant" : "smooth",
            });
          else scroll(0);
          explore.focus({ preventScroll: true });
        }),
      );
      detail.addEventListener("focusin", () => {
        container.dataset.returning = "false";
        container.dataset.exploring = "true";
        explore.setAttribute("aria-expanded", "true");
      });
      container.addEventListener(
        "scroll",
        () => {
          if (container.scrollTop <= 1) container.dataset.returning = "false";
          if (
            !controller.mobile &&
            container.scrollTop > 40 &&
            container.dataset.returning !== "true"
          ) {
            container.dataset.exploring = "true";
            explore.setAttribute("aria-expanded", "true");
          }
        },
        { passive: true },
      );
    });
  }

  // main.js

  const data = portfolioData;
  const e = escapeHtml;
  const p = data.placeholders;
  const multiline = (text) => e(text).replace(/\n/g, "<br>");
  const technologyMarks = {
    HTML5: "html5",
    CSS3: "css3",
    JavaScript: "javascript",
    TypeScript: "typescript",
    Python: "python",
    Java: "java",
    "C#": "csharp",
    "C++": "cplusplus",
    React: "react",
    "Node.js": "nodedotjs",
    "Express.js": "express",
    Bootstrap: "bootstrap",
    "Tailwind CSS": "tailwindcss",
    ".NET": "dotnet",
    Flask: "flask",
    OpenAI: "openai",
    "Google Gemini": "googlegemini",
    TensorFlow: "tensorflow",
    PyTorch: "pytorch",
    "scikit-learn": "scikitlearn",
    "Hugging Face": "huggingface",
    LangChain: "langchain",
    MySQL: "mysql",
    "Microsoft SQL Server": "microsoftsqlserver",
    PostgreSQL: "postgresql",
    MongoDB: "mongodb",
    Firebase: "firebase",
    "Visual Studio Code": "visualstudiocode",
    "Visual Studio": "visualstudio",
    Git: "git",
    GitHub: "github",
    Postman: "postman",
    Figma: "figma",
    "Android Studio": "androidstudio",
    Canva: "canva",
    "Adobe Photoshop": "adobephotoshop",
    "Amazon Web Services": "amazonwebservices",
    Vercel: "vercel",
    Netlify: "netlify",
  };
  const technologyItem = (item) =>
    `<li><span class="tech-mark" aria-hidden="true"><img src="./assets/icons/tech/${e(technologyMarks[item])}.svg" alt=""></span><span>${e(item)}</span></li>`;
  const facts = `<div class="fact"><span>01 / STUDY</span><strong>${e(data.education.program)}</strong><small>${e(data.education.currentLevel)}</small></div><div class="fact"><span>02 / BUILD</span><strong>${e(data.experience[0]?.role || "Experience")}</strong><small>${e(data.experience[0]?.organization || "Tech Team")}</small></div><div class="fact"><span>03 / EXPLORE</span><strong>${e(data.hobbies[1]?.name || "Interests")}</strong><small>${e(data.hobbies[1]?.description || "")}</small></div>`;
  const detailContent = {
    about: `<div class="about-grid">${imageFrame(data.profileImage, `Portrait of ${data.name}`, "PORTRAIT / COMING SOON", "portrait")}<div><h3>A little more about me.</h3><p>${e(data.introduction)}</p><p>${e(data.about || p.about)}</p>${data.location ? `<p>${e(data.location)}</p>` : ""}<div class="fact-list">${facts}</div></div></div>`,
    skills: data.skills.length
      ? `<div class="content-grid skills-grid">${data.skills.map((s) => (typeof s === "string" ? `<article class="text-card"><h3>${e(s)}</h3></article>` : `<article class="text-card skill-card"><h3>${e(s.category || s.name)}</h3><ul>${(s.items || []).map(technologyItem).join("")}</ul></article>`)).join("")}</div>`
      : `<div class="empty-state"><span class="pixel-symbol">{ }</span><h3>A toolkit in the making.</h3><p>${e(p.skills)}</p></div>`,
    projects: `<div class="content-grid projects-grid">${data.projects.length ? data.projects.map((project, i) => projectCard(project, i, p)).join("") : `<p>${e(p.projectDescription)}</p>`}</div>`,
    experience: `<div class="timeline">${data.experience.map((item, i) => `<article><span class="timeline-index">0${i + 1}</span><div><div class="eyebrow">${e(item.dates || "EXPERIENCE")}</div><h3>${e(item.role)}</h3><p>${e(item.organization || p.experience)}</p><p>${e(item.description)}</p></div></article>`).join("")}</div>`,
    education: `<div class="education-grid"><article class="text-card"><div class="eyebrow">CURRENT CHAPTER</div><h3>${e(data.education.program)}</h3><p>${e(data.education.currentLevel)}</p><p>${e(data.education.school || p.education)}</p>${data.education.description ? `<p>${e(data.education.description)}</p>` : ""}${data.education.expectedGraduation ? `<p>Expected graduation: ${e(data.education.expectedGraduation)}</p>` : ""}</article><article class="text-card"><div class="eyebrow">CONTINUING TO LEARN</div><h3>Courses & certifications</h3>${[...(data.education.courses || []), ...(data.education.certifications || [])].length ? `<ul>${[...(data.education.courses || []), ...(data.education.certifications || [])].map((x) => `<li>${e(x)}</li>`).join("")}</ul>` : `<p>${e(p.courses)}</p>`}</article></div>`,
    hobbies: `<div class="content-grid">${data.hobbies.map((item, i) => `<article class="project-card">${imageFrame(item.image, item.name, ["ON THE COURT", "IN THE COCKPIT", "FOLLOWING THE MARKETS"][i] || p.image)}<div class="card-meta">OFFLINE / 0${i + 1}</div><h3>${e(item.name)}</h3><p>${e(item.description || p.hobby)}</p></article>`).join("")}</div>`,
  };
  function contactLinks() {
    const c = data.contact;
    const links = [
      ["GitHub", c.github],
      ["LinkedIn", c.linkedin],
      ["Personal website", c.domain],
    ].filter(([, url]) => safeUrl(url));
    const resume = assetUrl(c.resume);
    return `<div class="contact-links">${c.email ? `<a class="button primary" href="mailto:${encodeURIComponent(c.email)}">${e(c.email)} ↗</a>` : ""}${links.map(([label, url]) => `<a class="button" href="${safeUrl(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join("")}${resume ? `<a class="button" href="${resume}" download>Download résumé ↓</a>` : ""}${!c.email && !links.length && !resume ? `<p class="contact-placeholder"><span class="status-square"></span>${e(p.contact)}</p>` : ""}</div>`;
  }
  function section(section, i) {
    const details = detailContent[section.id];
    const hero = section.id === "hero";
    return `<section class="portfolio-section ${hero ? "hero-section" : ""}" id="${section.id}" aria-labelledby="heading-${section.id}" ${i ? "inert" : ""}><div class="section-details" tabindex="-1"><div class="section-intro"><div class="section-copy"><div class="eyebrow"><span class="tiny-square"></span>${hero ? e(data.copy.heroEyebrow) : `CHAPTER ${String(i + 1).padStart(2, "0")} / ${e(section.label.toUpperCase())}`}</div>${hero ? `<h1 id="heading-hero" tabindex="-1">${e(data.name)}<span class="heading-dot">.</span></h1><p class="hero-title">${e(data.title)}</p><p class="intro-text">${e(data.introduction)}</p><a class="button primary" href="#projects">${e(data.copy.heroCta)} <span>↗</span></a><a class="text-link" href="#about">A little about me <span>→</span></a>` : `<h2 id="heading-${section.id}" tabindex="-1">${multiline(section.heading)}</h2><p class="intro-text">${e(section.intro)}</p>${details ? `<button class="button primary explore" aria-controls="details-${section.id}" aria-expanded="false">Explore ${e(section.label.toLowerCase())} <span>↓</span></button>` : contactLinks()}`}</div><div class="section-aside" aria-hidden="true">${hero ? `<div class="hero-stamp"><span>STUDENT. BUILDER. EXPLORER.</span><div class="stamp-grid">${dinosaurSvg}</div><span>${multiline(data.copy.heroStatement)}</span></div>` : `<span class="large-index">${String(i + 1).padStart(2, "0")}</span><span class="aside-label">${e(section.label.toUpperCase())}</span>`}</div>${hero ? `<div class="hero-footnote"><span>↓ SCROLL TO EXPLORE</span><span>${e(data.copy.heroNote)}</span></div>` : ""}</div>${details ? `<div class="detail-content" id="details-${section.id}"><div class="detail-header"><h3>${e(section.label)} / A closer look</h3><button class="back-top button">↑ Back to introduction</button></div>${details}<button class="back-top text-link bottom-back">↑ Back to section introduction</button></div>` : ""}</div></section>`;
  }
  document.querySelector("#app").innerHTML =
    `${navigation(data)}<main class="portfolio-track" aria-label="Personal portfolio">${data.copy.sections.map(section).join("")}</main>${dinosaur()}<footer class="site-footer">${progressIndicator(data.copy.sections)}<span class="navigation-hint">SCROLL OR USE <kbd>←</kbd> <kbd>→</kbd> TO EXPLORE</span>${sectionControls()}</footer>`;
  document.querySelectorAll("img").forEach((img) => {
    const removeBrokenImage = () => img.remove();
    img.addEventListener("error", removeBrokenImage, { once: true });
    if (img.complete && img.naturalWidth === 0) removeBrokenImage();
  });
  setupAnimations();
  const navigationController = setupHorizontalScroll(data.copy.sections);
  setupVerticalDetails(navigationController);
  const menu = document.querySelector(".menu-toggle");
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    document.querySelector(".site-header").classList.toggle("menu-open", open);
  });
})();
