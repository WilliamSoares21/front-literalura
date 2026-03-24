import type { Livro } from '../../services/livroService';

// Definimos que este componente espera receber um "livro" como propriedade
interface BookCardProps {
  livro: Livro;
}

const BookCard = ({ livro }: BookCardProps) => {
  return (
    <div className="glass-card">
      <h2>{livro.titulo}</h2>
      <p>Autor: {livro.autor}</p>
      <p>Idioma: {livro.idioma}</p>
      <p>Downloads: {livro.numeroDownloads}</p>
    </div>
  );
};


export default BookCard;





