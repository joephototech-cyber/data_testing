Papa.parse('greenhouse_gas_emissions_2025_clean.csv', {
  download: true,
  header: true,
  skipEmptyLines: true,

  complete: function(results) {

    const labels = [];
    const values = [];

    results.data.forEach(row => {
      labels.push(row.country);
      values.push(cleanNumber(row.emissions));
    });

    new Chart(
      document.getElementById('revenueChart'),
      {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Greenhouse Gas Emissions (tCO2e)',
            data: values,
            backgroundColor: '#4e79a7'
          }]
        },
        options: {
          scales: {
            y: {
              type: 'linear',
              title: {
                display: true,
                text: 'Greenhouse Gas Emissions (tCO2e)'
              }
            }
          }
        }
      }
    );
  }
});

function cleanNumber(value) {
  return Number(
    String(value).replace(/[^0-9.-]/g, '')
  );
}
