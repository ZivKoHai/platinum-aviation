export function H1Aviation({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`text-4xl font-serif w-full sm:text-6xl font-light text-textColor capitalize text-left sm:text-center z-10 ${className}`}
    >
      {children}
    </h1>
  );
}
