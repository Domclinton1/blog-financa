import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como montar uma reserva de emergência",
  description:
    "Aprenda como montar uma reserva de emergência, quanto guardar e onde investir para ter segurança financeira.",
};

export default function Post() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">
        Como montar uma reserva de emergência
      </h1>

      <p className="text-gray-600 mb-6">
        A reserva de emergência é um dos pilares da educação financeira. Ela
        serve para cobrir imprevistos como desemprego, problemas de saúde,
        consertos, dívidas inesperadas e qualquer situação que você precise de
        dinheiro rápido.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        O que é uma reserva de emergência?
      </h2>
      <p className="text-gray-600 mb-4">
        A reserva de emergência é um dinheiro guardado para situações
        inesperadas. Esse dinheiro não deve ser usado para viagens, compras ou
        lazer, apenas para emergências.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Quanto dinheiro devo guardar?
      </h2>
      <p className="text-gray-600 mb-4">
        O ideal é guardar de 3 a 6 meses do seu custo de vida mensal. Por
        exemplo, se você gasta R$ 2.000 por mês, sua reserva deve ficar entre R$
        6.000 e R$ 12.000.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Onde guardar a reserva de emergência?
      </h2>
      <p className="text-gray-600 mb-4">
        A reserva de emergência deve ficar em investimentos seguros e com
        liquidez diária, como:
      </p>

      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Conta remunerada</li>
        <li>CDB com liquidez diária</li>
        <li>Tesouro Selic</li>
        <li>Fundos de renda fixa</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Como começar sua reserva de emergência
      </h2>
      <p className="text-gray-600 mb-4">
        Comece guardando pequenos valores todos os meses. O mais importante não
        é o valor inicial, mas criar o hábito de guardar dinheiro com
        frequência.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusão</h2>
      <p className="text-gray-600">
        Ter uma reserva de emergência é fundamental para ter tranquilidade
        financeira e evitar dívidas. Comece aos poucos, guarde dinheiro todos os
        meses e com o tempo você terá segurança financeira para enfrentar
        imprevistos.
      </p>
    </main>
  );
}
