async function fetchObservations() {
    const objectName = document.getElementById('object-input').value;
    console.log('Object:', objectName);
    const results = document.getElementById('results');
    results.innerHTML = '';
  
    try {
      const response = await fetch(`http://localhost:8080/api/observations?object=${encodeURIComponent(objectName)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Response:', data);
  
      data[0].bestTimes.forEach(time => {
        const li = document.createElement('li');
        li.textContent = new Date(time).toLocaleString();
        results.appendChild(li);
      });
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      const li = document.createElement('li');
      li.textContent = `Failed to fetch: ${error.message}`;
      results.appendChild(li);
    }
  }
  