const callToApi = (data) => {
  // Llamamos al API
  return fetch('http://localhost:4000/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then(console.log(data));
};

export default callToApi;
