import api from "./api";

export const livroService = {
  // Função para listar todos
  listarTodos: async () => {
    const response = await api.get('/livros');
    return response.data;
  },

  // Função para o Top 10
  obterTop10: async () => {
    const response = await api.get('/livros/top10');
    return response.data;
  }
}
