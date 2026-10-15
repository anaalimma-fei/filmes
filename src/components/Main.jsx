import { useState } from "react";

const filmes = [
  {
    id: 1,
    titulo: "After Life",
    nota: "⭐ 7,9/10",
    genero: "Comédia dramática",
    classe: "card1",
    ano: "2019",
    duracao: "30 minutos por episódio",
    sinopse:
      "Após uma perda pessoal, Tony tenta encontrar um novo sentido para a vida enquanto lida com as pessoas ao seu redor.",
    tipo: "Série",
  },
  {
    id: 2,
    titulo: "Transformers",
    nota: "⭐ 7,1/10",
    genero: "Ação e ficção científica",
    classe: "card2",
    ano: "2007",
    duracao: "2h 24min",
    sinopse:
      "Uma antiga disputa entre robôs alienígenas chega à Terra, colocando a humanidade no centro do conflito.",
    tipo: "Filme",
  },
  {
    id: 3,
    titulo: "Mogli: Entre Dois Mundos",
    nota: "⭐ 6,5/10",
    genero: "Aventura e fantasia",
    classe: "card3",
    ano: "2018",
    duracao: "1h 44min",
    sinopse:
      "Criado por animais na selva, Mogli precisa descobrir onde pertence ao enfrentar o mundo dos humanos.",
    tipo: "Filme",
  },
  {
    id: 4,
    titulo: "Dupla Jornada",
    nota: "⭐ 6,1/10",
    genero: "Ação e comédia",
    classe: "card4",
    ano: "2022",
    duracao: "1h 53min",
    sinopse:
      "Um pai que trabalha limpando piscinas esconde uma atividade inesperada: ele caça vampiros.",
    tipo: "Filme",
  },
  {
    id: 5,
    titulo: "Round 6",
    nota: "⭐ 7,9/10",
    genero: "Suspense e drama",
    classe: "card5",
    ano: "2021",
    duracao: "Cerca de 1 hora por episódio",
    sinopse:
      "Pessoas que enfrentam dificuldades financeiras participam de jogos misteriosos em busca de um grande prêmio.",
    tipo: "Série",
  },
  {
    id: 6,
    titulo: "Harry Potter e a Pedra Filosofal",
    nota: "⭐ 7,7/10",
    genero: "Fantasia e aventura",
    classe: "card6",
    ano: "2001",
    duracao: "2h 32min",
    sinopse:
      "Ao descobrir que é um bruxo, Harry Potter começa a estudar em Hogwarts e conhece segredos sobre seu passado.",
    tipo: "Filme",
  },
];

export default function Main() {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  return (
    <main className="main">
      <section className="col1">
        <h2>Seus Filmes</h2>
        <p>
          Explore histórias incríveis, descubra novos títulos
          e escolha sua próxima aventura no MovieCity.
        </p>
      </section>

      <section className="cards">
        {filmes.map((filme) => (
          <button
            key={filme.id}
            type="button"
            className={`card ${filme.classe}`}
            onClick={() => setFilmeSelecionado(filme)}
            aria-label={`Ver detalhes de ${filme.titulo}`}
          >
            <span className="card-info">
              <strong>{filme.titulo}</strong>
              <small>{filme.genero}</small>
              <small>{filme.nota}</small>
            </span>
          </button>
        ))}
      </section>

      {filmeSelecionado && (
        <div
          className="modal-overlay"
          onClick={() => setFilmeSelecionado(null)}
        >
          <section
            className={`modal-content ${filmeSelecionado.classe}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
            onClick={(evento) => evento.stopPropagation()}
          >
            <button
              type="button"
              className="modal-fechar"
              onClick={() => setFilmeSelecionado(null)}
              aria-label="Fechar detalhes"
            >
              ✕
            </button>

            <div className="modal-info">
              <span className="modal-tipo">
                {filmeSelecionado.tipo}
              </span>

              <h2 id="modal-titulo">
                {filmeSelecionado.titulo}
              </h2>

              <p className="modal-nota">
                {filmeSelecionado.nota}
              </p>

              <p>
                <strong>Sinopse:</strong>{" "}
                {filmeSelecionado.sinopse}
              </p>

              <div className="modal-detalhes">
                <p>
                  <strong>Ano:</strong>{" "}
                  {filmeSelecionado.ano}
                </p>

                <p>
                  <strong>Duração:</strong>{" "}
                  {filmeSelecionado.duracao}
                </p>

                <p>
                  <strong>Gênero:</strong>{" "}
                  {filmeSelecionado.genero}
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
