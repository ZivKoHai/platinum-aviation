export function Card({
  Image,
  title,
  description,
  bgColor,
}: {
  Image: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}) {
  return (
    <div
      className={`min-w-full w-full sm:w-[300px] h-[350px] gradient-bg relative py-5 px-3 flex flex-col items-start justify-end bg-${bgColor} bg-opacity-90 rounded-[10px] hover:scale-105 transition-all duration-300`}
    >
      {Image}
      <h3 className="text-2xl font-bold tracking-tight text-white z-10">
        {title}
      </h3>
      <p className="text-sm text-white z-10">{description}</p>
    </div>
  );
}
