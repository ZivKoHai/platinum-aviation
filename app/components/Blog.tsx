import Image from "next/image";
import { formatDate } from "../lib/helpers";
import { getAllPosts } from "../lib/wordpress";

export default async function BlogLatestPosts() {
  const posts = await getAllPosts();

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-normal font-serif tracking-tight text-pretty text-textColor sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-textColor">
            An anthology of news, updates, and stories from Sky VIP Ben Gurion.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time
                  dateTime={formatDate(post.date)}
                  className="text-textColor"
                >
                  {formatDate(post.date)}
                </time>
                <a
                  href={`/posts/${post.slug}`}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-textColor hover:bg-gray-100"
                >
                  {post.title.rendered}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-textColor group-hover:text-textColor">
                  <a href={`/posts/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title.rendered}
                  </a>
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  className="mt-5 line-clamp-3 text-sm/6 text-textColor"
                />
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  alt={post.title.rendered}
                  src={post.yoast_head_json.og_image?.[0]?.url}
                  width={100}
                  height={100}
                  className="size-10 rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-textColor">
                    <a href={`/posts/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.yoast_head_json.author}
                    </a>
                  </p>
                  <p className="text-textColor">
                    {post.yoast_head_json.author}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
