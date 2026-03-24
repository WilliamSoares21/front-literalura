import axios from 'axios';

// Criando uma instância (serve como o garçom personalizado)
const api = axios.create({
    baseURL: 'http://localhost:8080',

    timeout: 5000,
    
    // Tempo limite de espera (5 segundos). Se o servidor demorar mais que isso, ele cancela.
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;