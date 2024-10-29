function atualizarRelogio() {
    const agora = new Date();
    
    // Atualiza o horário
    document.getElementById('horas').textContent = agora.getHours().toString().padStart(2, '0');
    document.getElementById('minutos').textContent = agora.getMinutes().toString().padStart(2, '0');
    document.getElementById('segundos').textContent = agora.getSeconds().toString().padStart(2, '0');
    
    // Atualiza a data
    const opcoes = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    document.getElementById('data').textContent = agora.toLocaleDateString('pt-BR', opcoes);
}

// Atualizar a cada segundo
setInterval(atualizarRelogio, 1000);
// Primeira atualização imediata
atualizarRelogio();