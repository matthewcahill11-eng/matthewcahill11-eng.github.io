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
