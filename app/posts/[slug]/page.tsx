import { formatDate } from "@/app/lib/helpers";
import { getAllPosts, getPostBySlug } from "@/app/lib/wordpress";
import { globalConfig } from "@/global-config";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 10800;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    metadataBase: new URL(globalConfig.siteUrl),
    title: `${globalConfig.siteName} - ${post.title.rendered} `,
    description: post.yoast_head_json.og_description,
    image: post.yoast_head_json.og_image?.[0]?.url,
    authors: post.yoast_head_json.author
      ? [{ name: post.yoast_head_json.author }]
      : undefined,
    openGraph: {
      title: `${globalConfig.siteName} - ${post.title.rendered}`,
      description: post.yoast_head_json.og_description || post.excerpt.rendered,
      type: post.yoast_head_json.og_type || "article",
      publishedTime: post.yoast_head_json.article_published_time || post.date,
      modifiedTime: post.yoast_head_json.article_modified_time || post.modified,
      url: `${globalConfig.siteUrl}/posts/${post.slug}`,
      siteName: globalConfig.siteName,
      locale: post.yoast_head_json.og_locale,
      images:
        post.yoast_head_json.og_image?.map((image) => ({
          url: image.url,
        })) || [],
    },
    twitter: {
      description: post.yoast_head_json.og_description,
      card: post.yoast_head_json.twitter_card,
    },
    robots: post.yoast_head_json.robots || {
      index: "follow",
      follow: "index",
    },
    alternates: {
      canonical: `${globalConfig.siteUrl}/posts/${post.slug}`,
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="max-w-7xl mx-auto text-white py-10 px-5">
      <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto py-5 sm:py-10">
        <div className="bg-foreground text-background text-sm px-3 py-1 rounded-full">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h1 className=" font-light text-4xl sm:text-7xl text-center font-serif">
          {post.title.rendered}
        </h1>
      </div>
      <div className="w-full aspect-video mt-8 rounded-lg overflow-hidden">
        <Image
          src={
            post.yoast_head_json.og_image?.[0]?.url || "/ben-gurion-vip-4.png"
          }
          alt={post.title.rendered}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <article
        className="prose max-w-2xl mx-auto py-10 "
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </main>
  );
}
