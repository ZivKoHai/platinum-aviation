import Link from "next/link";
import { getAllPosts } from "../lib/wordpress";
import { globalConfig } from "@/global-config";
import { Metadata } from "next";
import { formatDate } from "../lib/helpers";
import Image from "next/image";

export default async function Posts() {
  const posts = await getAllPosts();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <span className="text-sm uppercase tracking-wider">NEWS</span>
        <h1 className="text-6xl font-light mt-4 mb-6">
          Insightful Stories,
          <br />
          Latest Updates
        </h1>
        <p className="text-lg">
          An anthology of news, updates, and stories from Sky VIP Ben Gurion.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          return (
            <div key={post.id} className="subgrid relative">
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-foreground text-background text-sm px-3 py-1 rounded-full">
                    {formatDate(post.date)}
                  </div>
                </div>
              </div>

              {post.yoast_head_json.og_image?.[0]?.url && (
                <div className="aspect-video overflow-hidden mb-4 rounded-lg">
                  <Image
                    src={post.yoast_head_json.og_image[0].url}
                    width={1000}
                    height={1000}
                    sizes="100vw"
                    alt={post.title.rendered}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="space-y-2">
                <h2 className="text-2xl font-normal  transition-colors">
                  {post.title.rendered}
                </h2>
                <div
                  className="text-white/80"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <Link href={`/posts/${post.slug}`} className="block underline">
                  Read Article
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export const metadata: Metadata = {
  title: `${globalConfig.appName} | Posts`,
  description: "Posts for Sky Vip Ben Gurion",
};
