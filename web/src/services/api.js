const callToApi = (data) => {
  // Llamamos al API
  return fetch('/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
};

export default callToApi;
