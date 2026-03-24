import axios from 'axios';

// Criando uma instância (serve como o garçom personalizado)
const api = axios.create({
  baseURL: 'http://localhost:8080',

  timeout: 5000,

  // Tempo limite de espera (5 segundos). Se o servidor demorar mais que isso, ele cancela.
  headers: {
    'Content-Type': 'application/json',
  }

  // Interceptor para tratar respostas e erros
  // api.interceptors.response.use(
  //   (response: AxiosResponse) => response, // Se der certo, só passa adiante
  //   (error: AxiosError) => {
  //     alert("Houve um erro de conexão com o servidor!");
  //     return Promise.reject(error);
  //   }
  // );
});

export default api;
