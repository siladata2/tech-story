// ============================================================
// TECH STORY
// Main JavaScript
// ============================================================

const stories = [
  {
    id: 1,
    category: "AI",
    title: "The AI Revolution Is Changing How We Use Technology",
    description:
      "From smarter phones to powerful AI assistants, the next generation of technology is transforming everyday digital life.",
    author: "Tech Story",
    date: "Today",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    body: `
      <p>
        Artificial intelligence is becoming one of the most important technologies
        shaping the modern digital world. What once seemed like science fiction
        is now being integrated into phones, computers, websites and everyday apps.
      </p>

      <p>
        AI assistants can help people find information, organize ideas, translate
        languages, write content and complete many repetitive tasks. The technology
        continues to improve as developers create new models and applications.
      </p>

      <h2>A New Generation of Devices</h2>

      <p>
        Smartphones and computers are increasingly being designed around AI.
        Instead of simply running traditional applications, modern devices can
        process information and provide more intelligent features directly to users.
      </p>

      <div class="quote">
        Technology becomes more useful when it can understand what people are
        trying to accomplish and help them get there faster.
      </div>

      <p>
        The next phase of AI will likely focus not only on generating information,
        but also on helping users complete tasks across different applications
        and services.
      </p>

      <h2>What Comes Next?</h2>

      <p>
        AI development is moving quickly. New tools, models and applications are
        appearing regularly, making this one of the most interesting areas of
        technology to follow.
      </p>
    `
  },

  {
    id: 2,
    category: "AI",
    title: "How AI Assistants Are Evolving",
    description:
      "AI assistants are moving beyond simple questions and answers toward more useful digital experiences.",
    author: "Tech Story",
    date: "Today",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    body: `
      <p>
        AI assistants are changing rapidly. Early assistants were mostly designed
        to answer simple questions, but modern systems can understand longer
        conversations and work with different types of information.
      </p>

      <p>
        This evolution is creating new possibilities for education, productivity,
        programming, research and creative work.
      </p>

      <h2>From Answers to Assistance</h2>

      <p>
        The biggest change is the shift from simply providing an answer toward
        helping users accomplish a goal. This can make digital tools feel more
        natural and useful.
      </p>

      <div class="quote">
        The future of assistants is about useful interaction, not just search.
      </div>

      <p>
        As the technology develops, developers are also focusing on privacy,
        reliability and responsible use.
      </p>
    `
  },

  {
    id: 3,
    category: "Mobile",
    title: "The Future of Smartphones",
    description:
      "Smartphones continue to evolve as manufacturers explore better displays, cameras, processors and AI features.",
    author: "Tech Story",
    date: "Yesterday",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80",
    body: `
      <p>
        Smartphones have become some of the most important personal computers
        people carry every day. New generations continue to improve performance,
        cameras, displays and battery technology.
      </p>

      <h2>AI on the Phone</h2>

      <p>
        Artificial intelligence is becoming a major part of the mobile experience.
        Modern phones can use AI for photography, translation, voice features,
        personalization and productivity.
      </p>

      <p>
        Hardware manufacturers are also developing processors designed to handle
        more AI workloads directly on the device.
      </p>

      <h2>The Mobile Experience</h2>

      <p>
        The future of smartphones may be less about adding more applications and
        more about making the entire device smarter and easier to use.
      </p>
    `
  },

  {
    id: 4,
    category: "Gaming",
    title: "Gaming Technology Is Moving Fast",
    description:
      "New hardware and software technologies are changing how modern games are created and played.",
    author: "Tech Story",
    date: "Yesterday",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
    body: `
      <p>
        Gaming technology continues to advance through better graphics hardware,
        faster networks, improved displays and new development tools.
      </p>

      <p>
        Modern game engines can create increasingly detailed worlds while
        technologies such as cloud gaming make it possible to play demanding
        games on a wider range of devices.
      </p>

      <h2>Better Graphics</h2>

      <p>
        Rendering technologies are making virtual environments more realistic.
        Developers can create detailed lighting, reflections and environments
        while maintaining smooth performance.
      </p>

      <h2>The Future of Gaming</h2>

      <p>
        Gaming is becoming a combination of powerful hardware, creative software
        and connected experiences.
      </p>
    `
  },

  {
    id: 5,
    category: "Security",
    title: "Simple Ways to Protect Your Accounts",
    description:
      "Good digital security habits can reduce many common risks when using online services.",
    author: "Tech Story",
    date: "2 days ago",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80",
    body: `
      <p>
        Online accounts contain important personal information, so protecting
        them should be part of everyday digital life.
      </p>

      <h2>Use Strong Passwords</h2>

      <p>
        A unique password for each important account can reduce the impact of a
        compromised password. Password managers can also make it easier to manage
        many unique passwords.
      </p>

      <h2>Enable Extra Protection</h2>

      <p>
        Where available, multi-factor authentication adds another security layer
        to an account.
      </p>

      <div class="quote">
        Security works best as a collection of simple habits rather than one
        single solution.
      </div>

      <p>
        Keeping applications updated and being careful with unexpected messages
        and links are also useful parts of good security practice.
      </p>
    `
  },

  {
    id: 6,
    category: "Apps",
    title: "Why Mobile Apps Are Becoming More Intelligent",
    description:
      "Apps are using automation and AI to create faster and more personalized experiences.",
    author: "Tech Story",
    date: "2 days ago",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80",
    body: `
      <p>
        Mobile applications are becoming more capable as developers integrate
        automation, cloud services and artificial intelligence.
      </p>

      <p>
        These technologies can help applications personalize recommendations,
        automate repetitive work and respond more naturally to users.
      </p>

      <h2>Smarter Experiences</h2>

      <p>
        Instead of adding dozens of complicated controls, developers can use
        intelligent features to make common tasks simpler.
      </p>
    `
  },

  {
    id: 7,
    category: "Future",
    title: "What Could the Next Era of Technology Look Like?",
    description:
      "A look at some of the technologies that could shape the next generation of digital products.",
    author: "Tech Story",
    date: "3 days ago",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    body: `
      <p>
        Technology is developing across many different areas at the same time.
        AI, robotics, cloud computing, advanced hardware and connected devices
        are all contributing to a rapidly changing digital environment.
      </p>

      <h2>Connected Technology</h2>

      <p>
        More devices are becoming connected and capable of sharing information.
        This creates opportunities for smarter homes, workplaces and services.
      </p>

      <h2>Human-Friendly Technology</h2>

      <p>
        The most useful products are often those that make complicated technology
        feel simple. Future interfaces may increasingly rely on natural language,
        voice and intelligent automation.
      </p>
    `
  }
];

// ============================================================
// STATE
// ============================================================

let savedStories = JSON.parse(
  localStorage.getItem("techStoryBookmarks") || "[]"
);

let currentCategory = "All";

// ============================================================
// DOM
// ============================================================

const screens = document.querySelectorAll(".screen");
const navItems = document.querySelectorAll(".nav-item");

const homeStoryList = document.getElementById("homeStoryList");
const searchResults = document.getElementById("searchResults");
const bookmarkList = document.getElementById("bookmarkList");
const bookmarkEmpty = document.getElementById("bookmarkEmpty");

const searchInput = document.getElementById("searchInput");

const articleScreen = document.getElementById("articleScreen");
const articleImage = document.getElementById("articleImage");
const articleCategory = document.getElementById("articleCategory");
const articleTitle = document.getElementById("articleTitle");
const articleAuthor = document.getElementById("articleAuthor");
const articleDate = document.getElementById("articleDate");
const articleReadTime = document.getElementById("articleReadTime");
const articleBody = document.getElementById("articleBody");

const loader = document.getElementById("loader");
const toast = document.getElementById("toast");

// ============================================================
// INITIALIZE
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  renderHomeStories();
  renderBookmarks();
  setupNavigation();
  setupSearch();
  setupCategories();
  setupSubscribe();

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 650);
});

// ============================================================
// NAVIGATION
// ============================================================

function showScreen(screenId) {
  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  const selected = document.getElementById(screenId);

  if (selected) {
    selected.classList.add("active");
  }

  articleScreen.classList.remove("active");

  navItems.forEach(item => {
    item.classList.toggle(
      "active",
      item.dataset.screen === screenId
    );
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (screenId === "bookmarkScreen") {
    renderBookmarks();
  }
}

function setupNavigation() {
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      showScreen(item.dataset.screen);
    });
  });

  document
    .getElementById("topSearchBtn")
    .addEventListener("click", () => {
      showScreen("searchScreen");

      setTimeout(() => {
        searchInput.focus();
      }, 250);
    });

  document
    .getElementById("topBookmarkBtn")
    .addEventListener("click", () => {
      showScreen("bookmarkScreen");
    });
}

// ============================================================
// HOME STORIES
// ============================================================

function renderHomeStories(category = "All") {
  currentCategory = category;

  let filtered = stories;

  if (category !== "All") {
    filtered = stories.filter(
      story => story.category === category
    );
  }

  // Featured story already appears in hero,
  // so the latest list starts with story 2.
  if (category === "All") {
    filtered = stories.slice(1);
  }

  if (!filtered.length) {
    homeStoryList.innerHTML = `
      <div class="empty">
        <div class="empty-icon">?</div>
        <h3>No stories found</h3>
        <p>There are no stories in this category yet.</p>
      </div>
    `;

    return;
  }

  homeStoryList.innerHTML = filtered
    .map(story => storyCardHTML(story))
    .join("");

  attachStoryEvents(homeStoryList);
}

// ============================================================
// STORY CARD
// ============================================================

function storyCardHTML(story) {
  const saved = savedStories.includes(story.id);

  return `
    <article
      class="story-card"
      data-story-id="${story.id}"
      tabindex="0"
      role="button"
    >
      <img
        class="story-image"
        src="${story.image}"
        alt="${escapeHTML(story.title)}"
        loading="lazy"
      />

      <div class="story-content">
        <div class="story-category">
          ${escapeHTML(story.category)}
        </div>

        <h3>
          ${escapeHTML(story.title)}
        </h3>

        <p class="story-description">
          ${escapeHTML(story.description)}
        </p>

        <div class="story-meta">
          <span>
            ${escapeHTML(story.readTime)}
          </span>

          <button
            class="bookmark-small ${saved ? "saved" : ""}"
            data-bookmark="${story.id}"
            aria-label="Bookmark story"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="${saved ? "currentColor" : "none"}"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M6 4.5A2.5 2.5 0 0 1 8.5 2h7A2.5 2.5 0 0 1 18 4.5V21l-6-3.5L6 21V4.5Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

function attachStoryEvents(container) {
  container.querySelectorAll(".story-card").forEach(card => {
    card.addEventListener("click", event => {
      if (event.target.closest(".bookmark-small")) {
        return;
      }

      openArticle(Number(card.dataset.storyId));
    });

    card.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        openArticle(Number(card.dataset.storyId));
      }
    });
  });

  container.querySelectorAll("[data-bookmark]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();

      toggleBookmark(
        Number(button.dataset.bookmark)
      );
    });
  });
}

// ============================================================
// ARTICLE
// ============================================================

function openArticle(id) {
  const story = stories.find(item => item.id === id);

  if (!story) {
    showToast("Story not found");
    return;
  }

  articleImage.src = story.image;
  articleImage.alt = story.title;

  articleCategory.textContent = story.category;
  articleTitle.textContent = story.title;
  articleAuthor.textContent = story.author;
  articleDate.textContent = story.date;
  articleReadTime.textContent = story.readTime;

  articleBody.innerHTML = story.body;

  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  articleScreen.classList.add("active");

  navItems.forEach(item => {
    item.classList.remove("active");
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function closeArticle() {
  articleScreen.classList.remove("active");

  showScreen(
    document.querySelector(".nav-item.active")?.dataset.screen ||
    "homeScreen"
  );
}

// Make functions available to inline HTML buttons.
window.openArticle = openArticle;
window.closeArticle = closeArticle;

// ============================================================
// BOOKMARKS
// ============================================================

function toggleBookmark(id) {
  if (savedStories.includes(id)) {
    savedStories = savedStories.filter(
      storyId => storyId !== id
    );

    showToast("Removed from bookmarks");
  } else {
    savedStories.push(id);

    showToast("Story saved");
  }

  localStorage.setItem(
    "techStoryBookmarks",
    JSON.stringify(savedStories)
  );

  renderHomeStories(currentCategory);
  renderBookmarks();

  if (
    document.getElementById("searchScreen").classList.contains("active")
  ) {
    performSearch(searchInput.value);
  }
}

function renderBookmarks() {
  const saved = stories.filter(story =>
    savedStories.includes(story.id)
  );

  if (!saved.length) {
    bookmarkList.innerHTML = "";
    bookmarkEmpty.style.display = "block";
    return;
  }

  bookmarkEmpty.style.display = "none";

  bookmarkList.innerHTML = saved
    .map(story => storyCardHTML(story))
    .join("");

  attachStoryEvents(bookmarkList);
}

// ============================================================
// SEARCH
// ============================================================

function setupSearch() {
  searchInput.addEventListener("input", () => {
    performSearch(searchInput.value);
  });
}

function performSearch(query) {
  const clean = query.trim().toLowerCase();

  if (!clean) {
    searchResults.innerHTML = `
      <div class="empty">
        <div class="empty-icon">
          <svg width="25" height="25" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="7"></circle>
            <path d="m20 20-4-4"></path>
          </svg>
        </div>
        <h3>Search Tech Story</h3>
        <p>Search for AI, mobile, gaming, security and more.</p>
      </div>
    `;

    return;
  }

  const results = stories.filter(story => {
    const text = `
      ${story.title}
      ${story.description}
      ${story.category}
      ${story.author}
    `.toLowerCase();

    return text.includes(clean);
  });

  if (!results.length) {
    searchResults.innerHTML = `
      <div class="empty">
        <div class="empty-icon">
          <svg width="25" height="25" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="7"></circle>
            <path d="m20 20-4-4"></path>
          </svg>
        </div>

        <h3>No results</h3>

        <p>
          Try another technology topic or keyword.
        </p>
      </div>
    `;

    return;
  }

  searchResults.innerHTML = results
    .map(story => storyCardHTML(story))
    .join("");

  attachStoryEvents(searchResults);
}

// ============================================================
// CATEGORIES
// ============================================================

function setupCategories() {
  document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".category").forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      renderHomeStories(
        button.dataset.category
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
}

// ============================================================
// SUBSCRIBE
// ============================================================

function setupSubscribe() {
  const form = document.getElementById("subscribeForm");
  const emailInput = document.getElementById("emailInput");

  form.addEventListener("submit", event => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
      showToast("Enter your email");
      return;
    }

    showToast("Thanks for subscribing");

    emailInput.value = "";
  });
}

// ============================================================
// TOAST
// ============================================================

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

window.showToast = showToast;

// ============================================================
// HTML ESCAPE
// ============================================================

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ============================================================
// CAPACITOR READY
// ============================================================

document.addEventListener(
  "deviceready",
  () => {
    console.log("Tech Story Android app ready");
  },
  false
);