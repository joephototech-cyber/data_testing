Papa.parse('greenhouse_gas_emissions_2025_clean.csv', {
  download: true,
  header: true,
  skipEmptyLines: true,
  
  complete: function(results) {
    console.log("running");
    console.log(results.data);
    const tbody = document.querySelector('#dataTable tbody');
 
    results.data.forEach(row => {
 
      const tr = document.createElement('tr');
 
      tr.innerHTML = `
        <td>${row.id}</td>
        <td>${row.country}</td>
        <td>${row.year}</td>
        <td>${row.emissions}</td>
        <td>${row.unit}</td>
        <td>${row.source}</td>
      `;
 
      tbody.appendChild(tr); 
    });
  },
 
  error: function(err) {
    console.error("FAILED");
    console.error(err);
  }
});