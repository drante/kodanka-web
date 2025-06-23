import "./Landing.css";

export function Landing() {
  return (
    <main className="landing-container">
      <div className="landing-content">
        <img
          src="/images/landing/moodle-logotype.svg"
          alt="Moodle"
          className="moodle-logotype-mobile"
        />

        <img
          src="/images/landing/app-screenshots.png"
          alt="App screenshots"
          className="image"
        />

        <div className="text-content">
          <img
            src="/images/landing/moodle-logotype.svg"
            alt="Moodle"
            className="moodle-logotype"
          />

          <p className="app-description">
            Moodle is the ultimate app for food enthusiasts who want to keep
            track of their experiences—whether at favorite spots or newly
            discovered locations. Easily review restaurants and bars you've
            visited, document your amazing (and not-so-amazing) meals and
            drinks, and use your personal journal to track your reviews and save
            places you want to visit. Additionally it also comes with a map to
            give you a clear overview of all your documented spots!
          </p>

          <a
            href="https://apps.apple.com/app/id6738146012?l"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/landing/app-store-badge.svg"
              alt="Download on the App Store"
              className="app-store-badge"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
