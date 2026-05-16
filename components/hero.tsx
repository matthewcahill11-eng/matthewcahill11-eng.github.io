export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Profile image placeholder */}
        <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-muted border-2 border-border" />

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Matthew Cahill
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">Engineer</p>

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
