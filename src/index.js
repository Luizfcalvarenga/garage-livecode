console.log("Connected")


// 1) construin url pra fazer o fetch
// 2) pegar os resultados (array) e iterar
// 3) mostrar os resultas na tela pro usuário
const garage = 'Turbinado'
const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`
const carList = document.querySelector('.cars-list')


const getCars = () => {
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log('carros >>', data);
    carList.innerHTML = '';
    data.forEach(car => {
      const brand = car.brand;
      const model = car.model;
      const owner = car.owner;
      const plate = car.plate;
      const carCard = document.createElement('div');
      carCard.className = 'car';
      carCard.innerHTML = `
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/${brand},${model}" />
      </div>
      <div class="car-info">
        <h4>${brand} ${model}</h4>
        <p><strong>Owner:</strong> ${owner}</p>
        <p><strong>Plate:</strong> ${plate}</p>
      </div>
      `
      carList.appendChild(carCard)
    })
  })
}



getCars()
