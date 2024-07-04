import express from 'express';
import cors from 'cors';
import data from './data.js'; // Importa os dados de observações

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

// Função para buscar os dados
async function fetchRealData(object) {
  const fetch = await import('node-fetch').then(module => module.default || module);
  
  const url = `https://miniature-giggle-4j7v66g5qjqp37wxg-8080.app.github.dev/?object=${encodeURIComponent(object)}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data || !data.bestTimes) {
      throw new Error('Formato de dados inválido recebido');
    }

    return {
      name: object,
      bestTimes: data.bestTimes
    };
  } catch (error) {
    throw new Error(`Erro ao buscar dados: ${error.message}`);
  }
}

app.get('/api/observations', (req, res) => {
  const { object } = req.query;
  if (!object) {
    return res.status(400).send('Parâmetro de objeto é obrigatório');
  }

  const observation = data.find(item => item.name.toLowerCase() === object.toLowerCase());
  if (!observation) {
    return res.status(404).send('Objeto não encontrado');
  }

  res.json([observation]);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
