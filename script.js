fetch('members.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('assinaturas');
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<strong>${item.nome}</strong><p>"${item.mensagem}"</p>`;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar os dados:', error);
  });
