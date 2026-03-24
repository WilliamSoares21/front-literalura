import api from "./api";
import axios from "axios";

export interface Livro {
  id?: number;
  titulo: string;
  autor: string;
  idioma: string;
  numeroDownloads: number;
}

export interface EstatisticasDownload {
  downloads: number,
  titulo: string;
}

export const livroService = {
  // Função para listar todos
  listarTodos: async (): Promise<Livro[]> => {
    try {
      const response = await api.get<Livro[]>('/livros');
      return response.data;
    } catch (error) {
      console.error("Erro ao listar todos os livros:", error);
      throw error;
    }
  },

  // Função para o Top 10
  obterTop10: async (): Promise<Livro[]> => {
    try {
      const response = await api.get<Livro[]>('/livros/top10');
      return response.data;
    } catch (error) {
      console.error("Erro ao obter Top 10:", error);
      throw error;
    }
  },

  buscarPorTitulo: async (tituloDoLivro: string): Promise<Livro> => {
    try {
      const response = await api.get<Livro>('/livros/titulo', {
        params: { titulo: tituloDoLivro }
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        console.warn(`Livro "${tituloDoLivro}" não encontrado.`);
      }
      console.error("Erro na busca por título:", error);
      throw error;
    }
  },

  buscarPorIdioma: async (idioma: string): Promise<Livro[]> => {
    try {
      const response = await api.get<Livro[]>(`/livros/idioma/${idioma}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar livros no idioma ${idioma}:`, error);
      throw error;
    }
  },

  estatisticas: async (titulo: string): Promise<EstatisticasDownload> => {
    try {
      const response = await api.get<EstatisticasDownload>(`/livros/titulo/${titulo}/estatisticas-downloads`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar estatísticas:", error);
      throw error;
    }
  }
}
