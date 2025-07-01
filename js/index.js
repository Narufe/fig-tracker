console.log('Loaded index.js');

// js/index.js
async function fetchFarms() {
  const { data, error } = await supabase.from('farms').select('*');
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Data fetched successfully:', data);
  }
}

fetchFarms();
