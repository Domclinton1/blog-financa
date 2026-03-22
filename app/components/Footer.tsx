import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 border-t">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Sobre */}
        <div>
          <h2 className="text-xl font-bold mb-4">FinançasPro</h2>
          <p className="text-gray-600">
            Blog sobre finanças pessoais, investimentos, renda extra e educação
            financeira para ajudar você a ter uma vida financeira melhor.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="font-semibold mb-4">Links</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
          </ul>
        </div>

        {/* Categorias */}
        <div>
          <h3 className="font-semibold mb-4">Categorias</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Finanças Pessoais</li>
            <li>Investimentos</li>
            <li>Renda Extra</li>
            <li>Cartões de Crédito</li>
            <li>Negócios Online</li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-semibold mb-4">Contato</h3>
          <p className="text-gray-600">contato@financaspro.com</p>
          <p className="text-gray-600 mt-2">
            Parcerias e publicidade entre em contato pelo email.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-gray-600">
          © {new Date().getFullYear()} FinançasPro - Todos os direitos
          reservados
        </div>
      </div>
    </footer>
  );
}
