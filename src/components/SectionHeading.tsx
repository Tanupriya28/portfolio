const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-primary" />
  </div>
);

export default SectionHeading;
