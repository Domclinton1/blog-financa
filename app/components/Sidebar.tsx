import Link from "next/link";
import { posts } from "../lib/posts";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-80">
      {/* Busca */}
      <div className="border p-4 rounded-xl mb-6">
        <h3 className="font-semibold mb-2">Pesquisar</h3>
        <input
          type="text"
          placeholder="Pesquisar artigos..."
          className="w-full border px-3 py-2 rounded-lg"
        />
      </div>

      {/* Posts recentes */}
      <div className="border p-4 rounded-xl mb-6">
        <h3 className="font-semibold mb-3">Artigos recentes</h3>
        <ul className="flex flex-col gap-2">
          {posts.slice(0, 5).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <li className="text-sm hover:underline">{post.title}</li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Categorias */}
      <div className="border p-4 rounded-xl">
        <h3 className="font-semibold mb-3">Categorias</h3>
        <ul className="flex flex-col gap-2 text-sm">
          <Link href="#">Finanças Pessoais</Link>
          <Link href="#">Investimentos</Link>
          <Link href="#">Renda Extra</Link>
          <Link href="#">Negócios Online</Link>
        </ul>
      </div>
    </aside>
  );
}
