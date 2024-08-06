document.getElementById('gameForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const playerChoice = document.querySelector('input[name="playerChoice"]:checked').value;
    
    // API URL with player's choice
    const url = `https://rock-paper-scissors14.p.rapidapi.com/?choice=${playerChoice}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '15202a3b96mshbeac8563a31414ep1eb44bjsn2f2ab2110f1d',
            'x-rapidapi-host': 'rock-paper-scissors14.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayResult(result);
    } catch (error) {
        console.error('Error:', error);
    }
});

function displayResult(data) {
    document.getElementById('aiChoice').innerText = data.ai.name;
    document.getElementById('gameResult').innerText = data.result;
}
