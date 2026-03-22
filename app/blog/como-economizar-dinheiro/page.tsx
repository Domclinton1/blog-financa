import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como economizar dinheiro mesmo ganhando pouco",
  description:
    "Aprenda como economizar dinheiro mesmo ganhando pouco com dicas práticas de finanças pessoais e organização financeira.",
};

export default function Post() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">
        Como economizar dinheiro mesmo ganhando pouco
      </h1>

      <p className="text-gray-600 mb-6">
        Economizar dinheiro pode parecer difícil quando o salário é baixo, mas
        com organização financeira e alguns hábitos simples é possível guardar
        dinheiro todos os meses.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Anote todos os seus gastos
      </h2>
      <p className="text-gray-600 mb-4">
        O primeiro passo para economizar dinheiro é saber exatamente para onde
        seu dinheiro está indo. Anote todos os gastos, desde contas até pequenas
        despesas do dia a dia.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. Corte gastos desnecessários
      </h2>
      <p className="text-gray-600 mb-4">
        Depois de identificar seus gastos, veja o que pode ser reduzido.
        Pequenos gastos como delivery, assinaturas e compras por impulso podem
        estar consumindo grande parte do seu dinheiro.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Crie uma reserva de emergência
      </h2>
      <p className="text-gray-600 mb-4">
        Ter uma reserva de emergência é fundamental para evitar dívidas quando
        surgir algum imprevisto.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Procure uma renda extra
      </h2>
      <p className="text-gray-600 mb-4">
        Se possível, procure formas de aumentar sua renda com trabalhos extras,
        internet ou vendas.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusão</h2>
      <p className="text-gray-600">
        Economizar dinheiro é uma questão de hábito e disciplina. Comece aos
        poucos, organize suas finanças e com o tempo você terá uma vida
        financeira muito mais tranquila.
      </p>
    </main>
  );
}
