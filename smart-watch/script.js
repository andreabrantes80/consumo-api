const apiKey = 'ddf7577642d037bbf1da2b0c266afeec';
const city = 'Manaus';

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Atualiza os elementos na tela
        document.getElementById('city').innerText = 
data.name
;
        document.getElementById('temp').innerText = `${Math.round(data.main.temp)}ºC`;

    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        document.getElementById('city').innerText = 'Erro';
        document.getElementById('temp').innerText = '--ºC';
    }
}

// Chama a função quando a página é carregada
window.onload = getWeather; 