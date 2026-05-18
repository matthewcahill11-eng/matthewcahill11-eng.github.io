export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[50vh] flex items-center justify-center pt-16 pb-8"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Profile image */}
        <div className="mx-auto mb-6 h-48 w-48 rounded-full bg-muted border-2 border-border overflow-hidden">
          <img
            src="/profile-photo.jpg"
            alt="Matthew Cahill"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Matthew Cahill
        </h1>
        <div className="mt-4 space-y-1">
          <p className="text-lg text-muted-foreground">
            M.Eng. Mechanical Engineering, University of Galway (2024-2025)
          </p>
          <p className="text-lg text-muted-foreground">
            B.Eng. Mechanical Engineering, University of Galway (2020-2024)
          </p>
          <p className="text-sm text-muted-foreground font-medium">
            First Class Honours (1:1) · Excellence Scholar
          </p>
        </div>

        {/* Social links */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/matthewcahill18/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            style={{ borderColor: '#0A66C2', color: '#0A66C2' }}
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/matthewcahill11-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            style={{ borderColor: '#24292e', color: '#24292e' }}
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            style={{ borderColor: '#DC2626', color: '#DC2626' }}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 13h6m-6 4h6m-6-8h3"
              />
            </svg>
            CV
          </a>
        </div>

        {/* Interest tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Tag 1", "Tag 2", "Tag 3"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
