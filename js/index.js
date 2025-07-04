console.log('Loaded index.js');

async function fetchFarms() {
  const { data, error } = await window.client.from('farms').select('*');
  if (error) {
    console.error('Error fetching farms:', error);
  } else {
    console.log('Farms data:', data);

    const farmsList = document.createElement('ul');
    data.forEach(farm => {
      const listItem = document.createElement('li');
      listItem.textContent = farm.name;
      farmsList.appendChild(listItem);
    });
    document.body.appendChild(farmsList);
  }
}

fetchFarms();
