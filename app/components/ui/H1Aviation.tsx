export function H1Aviation({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl font-serif w-full sm:text-6xl font-light text-textColor capitalize text-left sm:text-center z-10">
      {children}
    </h1>
  );
}
