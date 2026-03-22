import Link from "next/link";

export default function Home() {
  const posts = [
    {
      slug: "como-economizar-dinheiro",
      title: "Como economizar dinheiro mesmo ganhando pouco",
      description:
        "Aprenda técnicas simples para economizar dinheiro todo mês.",
    },
    {
      slug: "renda-extra-online",
      title: "7 ideias de renda extra online",
      description: "Descubra formas de ganhar dinheiro na internet.",
    },
    {
      slug: "reserva-de-emergencia",
      title: "Como montar sua reserva de emergência",
      description: "Guia completo para começar sua reserva.",
    },
  ];

  return (
    <main>
      {/* Hero FULL WIDTH */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/banner.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aprenda Finanças, Investimentos e Renda Extra
          </h1>

          <p className="text-lg mb-6 max-w-2xl">
            Conteúdos completos sobre finanças pessoais, investimentos,
            economia, renda extra e como ganhar dinheiro na internet.
          </p>

          <Link
            href="/blog"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Acessar artigos
          </Link>
        </div>
      </section>

      {/* CONTEÚDO CENTRALIZADO */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Categorias */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Categorias</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border p-4 rounded-lg">Finanças Pessoais</div>
            <div className="border p-4 rounded-lg">Investimentos</div>
            <div className="border p-4 rounded-lg">Renda Extra</div>
            <div className="border p-4 rounded-lg">Negócios Online</div>
          </div>
        </section>

        {/* Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Últimos artigos</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="border p-5 rounded-lg hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Newsletter FULL WIDTH */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-[#0d0d0d]">
            Receba dicas de finanças
          </h2>
          <p className="text-gray-600 mb-4">
            Entre para nossa lista e receba conteúdos sobre finanças e renda
            extra.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Seu email"
              className="border px-4 py-3 rounded-lg w-full md:w-80"
            />
            <button className="bg-black text-white px-6 py-3 rounded-lg">
              Inscrever
            </button>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-4">Sobre Finanças Pessoais</h2>

        <p className="text-gray-600 mb-4">
          Finanças pessoais é o processo de organização do dinheiro, controle de
          gastos, investimentos e planejamento financeiro.
        </p>
      </section>
    </main>
  );
}
