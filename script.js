fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const lista = document.getElementById('assinaturas');
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.nome} - "${item.mensagem}"`;
      lista.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar os dados:', error);
  });
