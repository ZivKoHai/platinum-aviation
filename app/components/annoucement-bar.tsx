import Link from "next/link";

//----------------------------------------

type AnnoucementBarProps = {
  announcement: string;
  link?: string;
};

export default function AnnoucementBar({
  announcement,
  link,
}: AnnoucementBarProps) {
  return (
    <>
      <div
        id="annoucement-bar"
        className="hs-removing:-translate-y-full bg-white"
      >
        <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex justify-center">
            <p className="text-black">
              {announcement}
              {link && (
                <Link
                  className="decoration-2 ml-2 underline font-medium hover:text-black/80 focus:outline-hidden focus:text-black/80"
                  href={link || "#"}
                >
                  Learn more
                </Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
