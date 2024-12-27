export function Button({
  children,
  href = "https://wa.me/972527772564",
  ...props
}: {
  children: React.ReactNode;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className="bg-black text-white px-5 py-2 rounded-[10px]">
      <a href={href}>{children}</a>
    </button>
  );
}
