const apiKey = 'ddf7577642d037bbf1da2b0c266afeec';

// Lista de todas as capitais do Brasil
const cities = [
    'Rio Branco', 'Maceió', 'Macapá', 'Manaus', 'Salvador',
    'Fortaleza', 'Brasília', 'Vitória', 'Goiânia', 'São Luís',
    'Cuiabá', 'Campo Grande', 'Belo Horizonte', 'Belém', 'João Pessoa',
    'Curitiba', 'Recife', 'Teresina', 'Rio de Janeiro', 'Natal',
    'Porto Alegre', 'Boa Vista', 'Florianópolis', 'São Paulo', 'Aracaju',
    'Palmas'
];

let currentIndex = 0; // Índice da capital atual

async function getWeather() {
  const city = cities[currentIndex]; // Seleciona a cidade atual da lista
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Atualiza os elementos na tela
    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = `${Math.round(
      data.main.temp
    )}ºC`;
    document.getElementById("temp").innerText = `${Math.round(
      data.main.temp
    )}ºC`;
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
    document.getElementById("city").innerText = "Erro";
    document.getElementById("temp").innerText = "--ºC";
  }

  // Atualiza para a próxima capital
  currentIndex = (currentIndex + 1) % cities.length;
}

// Chama a função a cada 10 segundos para mudar a capital e atualizar a temperatura
setInterval(getWeather, 15000);

// Chama a função quando a página é carregada
window.onload = getWeather;