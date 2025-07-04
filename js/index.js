console.log('Loaded index.js');

async function fetchFarms() {
  const { data, error } = await window.client.from('farms').select('*');
  if (error) {
    console.error('Error fetching farms:', error);
  } else {
    console.log('Farms data:', data);
  }
}

fetchFarms();
