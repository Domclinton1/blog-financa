import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como organizar as finanças pessoais",
  description:
    "Aprenda como organizar suas finanças pessoais, controlar gastos, sair das dívidas e começar a economizar dinheiro.",
};

export default function Post() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">
        Como organizar as finanças pessoais
      </h1>

      <p className="text-gray-600 mb-6">
        Organizar as finanças pessoais é o primeiro passo para sair das dívidas,
        economizar dinheiro e começar a investir. Muitas pessoas ganham bem, mas
        mesmo assim vivem sem dinheiro porque não têm organização financeira.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Anote toda sua renda
      </h2>
      <p className="text-gray-600 mb-4">
        O primeiro passo é saber exatamente quanto você ganha por mês. Inclua
        salário, renda extra, comissões e qualquer outra entrada de dinheiro.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. Liste todos os seus gastos
      </h2>
      <p className="text-gray-600 mb-4">
        Anote todos os seus gastos mensais como aluguel, energia, internet,
        alimentação, transporte, cartão de crédito e despesas variáveis.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Separe gastos fixos e variáveis
      </h2>
      <p className="text-gray-600 mb-4">
        Gastos fixos são aqueles que você tem todo mês. Gastos variáveis são
        aqueles que mudam como lazer, delivery, compras e viagens.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Crie um orçamento mensal
      </h2>
      <p className="text-gray-600 mb-4">
        Depois de entender sua renda e seus gastos, crie um orçamento mensal
        definindo quanto pode gastar em cada categoria.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        5. Comece a economizar dinheiro
      </h2>
      <p className="text-gray-600 mb-4">
        Mesmo que seja pouco, comece guardando dinheiro todos os meses. O
        importante é criar o hábito de economizar.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusão</h2>
      <p className="text-gray-600">
        Organizar as finanças pessoais é uma das habilidades mais importantes
        para ter uma vida financeira tranquila. Com organização, disciplina e
        planejamento é possível sair das dívidas, economizar e investir para o
        futuro.
      </p>
    </main>
  );
}
