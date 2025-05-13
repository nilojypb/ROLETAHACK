// Função de login no servidor
document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aqui você pode enviar as credenciais para o servidor para validação
    if (email === 'admin@roletainteligente.com' && password === 'Danilo@123') {
        alert('Login bem-sucedido!');
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('sugestoes-container').style.display = 'block';
    } else {
        alert('Credenciais inválidas.');
    }
});

// Função para solicitar sugestões de apostas
document.getElementById('analisar').addEventListener('click', function() {
    // Aqui você pode fazer uma chamada ao backend para obter sugestões de apostas
    const sugestoes = ['5', '7', '10', '12', '14']; // Exemplo de sugestão

    const suggestionsContainer = document.getElementById('sugestoes-list');
    suggestionsContainer.innerHTML = 'Sugestões: ' + sugestoes.join(', ');
});

// Função de logout
document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('sugestoes-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});
