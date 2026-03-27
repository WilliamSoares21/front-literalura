import BookCard from "./components/books/BookCard";
import { useEffect, useState } from "react";
import { livroService, type Livro } from "./services/livroService";
import "./styles/global.css";


function App() {
  // 1. Criamos a "memória" para guardar os livros. Começa como uma lista vazia [].
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregando, setCarregando] = useState(true);

  // 2. O "Gatilho": Esse código roda uma única vez quando a página carrega
  useEffect(() => {
    async function buscarDados() {
      try {
        const dados = await livroService.obterTop10();
        setLivros(dados); // Salva os livros do Java na nossa "memória"
      } catch (error) {
        console.error("Erro ao carregar o Top 10", error);
      } finally {
        setCarregando(false);
      }
    }

    buscarDados();
  }, []); // Os colchetes vazios [] garantem que ele só rode ao abrir a página

  return (
    <div className="app-container">
      <h1>📚 Literalura - Top 10</h1>

      {carregando ? (
        <p>Preparando a biblioteca...</p>
      ) : (
        <div className="books-grid">
          {/* 3. A Mágica: Para cada livro na lista, criamos um Card de Vidro */}
          {livros.map((livro) => (
            <BookCard key={livro.id} livro={livro} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App
