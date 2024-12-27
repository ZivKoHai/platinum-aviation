interface ChartItemProps {
  number: string;
  title?: string;
  description: string;
  height?: string;
  backgroundColor: string;
}

export function ChartItem({
  number,
  title,
  description,
  height = "h-[300px]",
  backgroundColor,
}: ChartItemProps) {
  return (
    <div
      className={`md:w-1/3 w-full sm:${height} min-h-[200px] ${backgroundColor} rounded-[10px] flex flex-col justify-between p-8`}
    >
      <div>
        <span className="font-bold text-white text-2xl">{number}</span>
      </div>
      <div className="flex flex-col gap-2">
        {title && (
          <span className="sm:text-2xl font-bold text-white">{title}</span>
        )}
        <span className="sm:text-xl font-normal text-white">{description}</span>
      </div>
    </div>
  );
}
