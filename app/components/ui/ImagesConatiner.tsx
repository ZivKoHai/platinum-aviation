import Image from "next/image";

export default function ImagesContainer({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.src} className="relative w-full aspect-square">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="rounded-[10px] overflow-hidden object-cover"
          />
        </div>
      ))}
    </div>
  );
}
