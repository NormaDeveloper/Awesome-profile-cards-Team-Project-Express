const callToApi = (data) => {
  // Llamamos al API
  return fetch('https://project-promo-o-module-4-team5.herokuapp.com/#/cards', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then(console.log(data));
};

export default callToApi;
