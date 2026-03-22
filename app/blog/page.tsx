import Link from "next/link";
import { posts } from "../lib/posts";
import Sidebar from "../components/Sidebar";

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Posts */}
        <div className="flex-1 grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="border p-6 rounded-xl hover:shadow-lg transition">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>

                <p className="text-gray-600 mb-4">{post.description}</p>

                <span className="text-sm font-semibold">Ler artigo →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </main>
  );
}
