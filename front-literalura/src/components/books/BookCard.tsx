import type { Livro } from '../../services/livroService';

// Definimos que este componente espera receber um "livro" como propriedade
interface BookCardProps {
  livro: Livro;
}

const BookCard = ({ livro }: BookCardProps) => {
  // O nome do autor ainda é uma lista no seu JSON, então pegamos o primeiro
  const nomeAutor = livro.authors.length > 0 ? livro.authors[0].name : "Autor desconhecido";

  return (
    <div className="glass-card">
      <div className="card-image">
        {/* Acesso direto e limpo! */}
        <img
          src={livro.imagem || "https://via.placeholder.com/120x180"}
          alt={`Capa do livro ${livro.title}`}
        />
      </div>

      <div className="card-info">
        <div className="card-header">
          {livro.genero && <span className="genre-tag">{livro.genero}</span>}
          <h2>{livro.title}</h2>
          <p className="author">{nomeAutor}</p>
        </div>

        {livro.resumo && (
          <p className="summary-preview">{livro.resumo}</p>
        )}

        <div className="card-stats">
          <span>🌐 {livro.languages[0]?.toUpperCase()}</span>
          <span>📥 {livro.download_count.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
