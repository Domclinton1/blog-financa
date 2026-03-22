import { posts } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import Sidebar from "@/app/components/Sidebar";
export default function Post({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <article className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

          <p className="text-gray-600 whitespace-pre-line">{post.content}</p>
        </article>

        <Sidebar />
      </div>
    </main>
  );
}
