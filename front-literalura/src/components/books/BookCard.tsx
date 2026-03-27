import type { Livro } from '../../services/livroService';

// Definimos que este componente espera receber um "livro" como propriedade
interface BookCardProps {
  livro: Livro;
}

const BookCard = ({ livro }: BookCardProps) => {
  return (
    /* 1. A Caixa Principal (O Vidro) */
    <div className="glass-card">

      {/* 2. Sub-caixa da Esquerda (A Capa) */}
      <div className="card-image">
        <img
          src="https://via.placeholder.com/120x180"
          alt={`Capa do livro ${livro.titulo}`}
        />
      </div>

      {/* 3. Sub-caixa da Direita (Os Textos) */}
      <div className="card-info">
        <h2>{livro.titulo}</h2>
        <p className="author">Autor: {livro.autor}</p>

        {/* Uma mini-caixa para os dados técnicos */}
        <div className="card-stats">
          <span>🌐 {livro.idioma}</span>
          <span>📥 {livro.numeroDownloads}</span>
        </div>
      </div>

    </div>
  );
};


export default BookCard;
