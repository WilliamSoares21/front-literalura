import { useState } from "react";

interface SearchBarProps {
  onSearch: (titulo: string) => void; // FUnÇÃo que vai ser disparada ao buscar
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [termoBusca, setTermoBusca] = useState("");

  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault(); // Evita que a pÁgina recarregue
    if (termoBusca.trim()) {
      onSearch(termoBusca);
    }
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o tÍtulo do livro..."
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
        className="glass-input"
      />
      <button type="submit" className="glass-button">
        buscar
      </button>
    </form>
  );
};

export default SearchBar;
