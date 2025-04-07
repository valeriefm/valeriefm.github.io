import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const isDark = localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
  };

  return (
    <div className="bg-base text-white dark:bg-white dark:text-black transition-colors duration-500 min-h-screen p-6">
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="bg-pinky dark:bg-neon text-black dark:text-white px-4 py-2 rounded-full shadow hover:scale-105 transition-all"
        >
          Toggle Theme
        </button>
      </div>

      <nav className="mt-6 mb-8 flex flex-wrap justify-center gap-4 text-neon dark:text-pinky text-lg">
        {[
          "Home", "Now", "Projects", "MindSET", "Music", "YouTube", "Memories",
          "Writing", "Dreams", "Reading List", "Contact"
        ].map((item) => (
          <a key={item} href={`${item.toLowerCase().replace(/ /g, "-")}.html`}>
            {item}
          </a>
        ))}
      </nav>

      <header className="text-center mt-12 mb-6 animate-fadeIn">
        <h1 className="text-4xl font-display text-neon dark:text-pinky">Valerie Fabbri Menna</h1>
        <p className="mt-2 text-gray-300 dark:text-gray-700">
          Founder | Chemical Engineer | Microbiologist | Creator | BioTech Moonshot Enthusiast
        </p>
      </header>

      <section className="text-center max-w-2xl mx-auto mb-12 animate-slideUp">
        <p className="mb-4 text-xl font-semibold">
          Currently Building: <span className="text-neon dark:text-pinky">MindSET</span>
        </p>
        <p className="text-gray-400 dark:text-gray-600 italic">Empowering student entrepreneurs to lead the future.</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 animate-slideUp">
        {[
          { title: "Projects", link: "projects.html" },
          { title: "Writing", link: "writing.html" },
          { title: "YouTube", link: "youtube.html" },
          { title: "Memories", link: "memories.html" },
          { title: "Music", link: "music.html" },
          { title: "MindSET", link: "mindset.html" },
          { title: "Dreams", link: "dreams.html" },
          { title: "Reading List", link: "reading-list.html" },
          { title: "Contact", link: "contact.html" },
        ].map(({ title, link }) => (
          <a
            key={title}
            href={link}
            className="border border-neon dark:border-pinky rounded-xl p-6 text-center hover:scale-105 transition-all shadow"
          >
            {title}
          </a>
        ))}
      </section>

      <section className="text-center max-w-3xl mx-auto text-lg text-gray-300 dark:text-gray-700 mb-16 animate-slideUp">
        <p>
          I’m Valerie, a chemical engineer, founder, aspiring philanthropist, and future angel investor in FemTech.
          I create at the intersection of science, storytelling, and soul.
          <br />
          <a href="now.html" className="underline text-neon dark:text-pinky ml-2">Learn more →</a>
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-24 animate-slideUp">
        <h2 className="text-2xl font-bold text-center mb-4">Latest from Me</h2>
        <div className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black p-6 rounded-lg shadow">
          <p>✨ New blog post coming soon on MindSET’s launch and the V.E.R.A. Framework</p>
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-400 dark:text-gray-600">
        <p>© 2025 Valerie Fabbri Menna - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
