// const container = document.querySelector(`.container`);
// const search = document.querySelector(`.search-box button`);
// const weatherBox = document.querySelector(`.weather-box`);
// const weatherDetails = document.querySelector(`.weather-details`);
// const error404 = document.querySelector(`.not-found`);

// search.addEventListener(`click`, () => {

//     const APIKey = `eca7ab8bf05cee8659afa29992bf0bf0`;
//     const city = document.querySelector(`.search-box input`).value;

//     if (city === ``)
//         return;

//     fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}& units=metric&appid=${APIKey}').then(response => response.json()).then(json => {


//         if (json.cod === '404') {
//             container.style.height = '480px';
//             weatherBox.style.display = 'none';
//             weatherDetails.style.display = 'none';
//             error404.style.display = 'block';
//             error404.classList.add('fadeIn');
//             return;
//         }


//         error404.style.display = 'none';
//         error404.classList.remove('fadeIn');

//         const image = document.querySelector('.weather-box img');
//         const temperature = document.querySelector('.weather-box .temperature');
//         const description = document.querySelector('.weather-box .description');
//         const humidity = document.querySelector('.weather-details .humidity span');
//         const wind = document.querySelector('.weather-details .wind span');

//         switch (json.weather[0]) {
//             case 'Clear':
//                 image.sre = 'image/clear.png';
//                 break;

//             case 'Rain':
//                 image.sre = 'image/Rain.png';
//                 break;

//             case 'Snow':
//                 image.sre = 'image/Snow.png';
//                 break;

//             case 'Clouds':
//                 image.sre = 'image/cloud.png';
//                 break;

//             case 'Haze':
//                 image.sre = 'image/haze.png';
//                 break;

//             default:
//                 image.src = '';
//         }

//         temperature.innerHTML = `${parseInt(json.main.temp)}<spana> 'c </span>`;
//         description.innerHTML = `${json.weather[0].description}`;
//         humidity.innerHTML = `${json.main.humidity}%`
//         wind.innerHTML = `${parseInt(json.wind.speed)}km/h`

//         weatherBox.style.display = '';
//         weatherDetails.style.display = '';
//         weatherBox.classList.add('fadeIn');
//         weatherDetails.classList.add('fadeIn');
//         container.style.height = '590px';


//     });
// })

// const container = document.querySelector(`#container`);
// const search = document.querySelector(`#search-box button`);
// const weatherBox = document.querySelector(`#weather-box`);
// const weatherDetails = document.querySelector(`#weather-details`);
// const error404 = document.querySelector(`#not-found`);

// search.addEventListener(`click`, () => {

//     const APIKey = `eca7ab8bf05cee8659afa29992bf0bf0`;
//     const city = document.querySelector(`#search-box input`).value;

//     if (city === ``)
//         return;

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
//         .then(response => response.json())
//         .then(json => {

//             if (json.cod === '404') {
//                 container.style.height = '480px';
//                 weatherBox.style.display = 'none';
//                 weatherDetails.style.display = 'none';
//                 error404.style.display = 'block';
//                 error404.classList.add('fadeIn');
//                 return;
//             }

//             error404.style.display = 'none';
//             error404.classList.remove('fadeIn');

//             const image = document.querySelector('#weather-box img');
//             const temperature = document.querySelector('#weather-box .temperature');
//             const description = document.querySelector('#weather-box .description');
//             const humidity = document.querySelector('#weather-details .humidity span');
//             const wind = document.querySelector('#weather-details .wind span');

//             switch (json.weather[0].main) { // Use json.weather[0].main to access the weather condition
//                 case 'Clear':
//                     image.src = 'image/clear.png';
//                     break;

//                 case 'Rain':
//                     image.src = 'image/Rain.png';
//                     break;

//                 case 'Snow':
//                     image.src = 'image/Snow.png';
//                     break;

//                 case 'Clouds':
//                     image.src = 'image/cloud.png';
//                     break;

//                 case 'Haze':
//                     image.src = 'image/haze.png';
//                     break;

//                 default:
//                     image.src = '';
//             }

//             temperature.innerHTML = `${parseInt(json.main.temp)}°C`; // Fix the <span> tag typo
//             description.innerHTML = `${json.weather[0].description}`;
//             humidity.innerHTML = `${json.main.humidity}%`;
//             wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

//             weatherBox.style.display = '';
//             weatherDetails.style.display = '';
//             weatherBox.classList.add('fadeIn');
//             weatherDetails.classList.add('fadeIn');
//             container.style.height = '590px';
//         });
// });

// const APIKey = 'eca7ab8bf05cee8659afa29992bf0bf0'; // Your OpenWeatherMap API Key
// const city = 'lagos'; // Replace with the city you want to get weather information for

// // Construct the API request URL
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

// // Make the API request using fetch
// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json(); // Parse the response JSON
//   })
//   .then((data) => {
//     // Handle the JSON data returned by the API
//     console.log(data); // You can process and display the data here
//   })
//   .catch((error) => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

const container = document.querySelector(`.container`);
const search = document.querySelector(`.search-box button`);
const weatherBox = document.querySelector(`.weather-box`);
const weatherDetails = document.querySelector(`.weather-details`);
const error404 = document.querySelector(`.not-found`);

search.addEventListener(`click`, () => {

  // Get the API key from the environment variables. This is a more secure way to store your API key than hard-coding it in your code.
  const APIKey = 'eca7ab8bf05cee8659afa29992bf0bf0';

  // Get the city name from the search box.
  const city = document.querySelector(`.search-box input`).value;

  // If the city name is empty, return.
  if (city === ``) {
    return;
  }

  // Make the API request to OpenWeatherMap.
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {

      // If the API request fails, return an error.
      if (json.cod === `404`) {
        container.style.height = '480px';
        weatherBox.style.display = 'none';
        weatherDetails.style.display = 'none';
        error404.style.display = 'block';
        error404.classList.add('fadeIn');
        return;
      }

      // Hide the error message.
      error404.style.display = 'none';
      error404.classList.remove('fadeIn');

      // Update the weather information.
      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.weather-details .humidity span');
      const wind = document.querySelector('.weather-details .wind span');

      switch (json.weather[0]) {
        case 'Clear':
          image.sre = 'image/clear.png';
          break;

        case 'Rain':
          image.sre = 'image/rain.jpg';
          break;

        case 'Snow':
          image.sre = 'image/snow.jpg';
          break;

        case 'Clouds':
          image.sre = 'image/cloud.jpg';
          break;

        case 'Haze':
          image.sre = 'image/haze.png';
          break;

        default:
          image.src = '';
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<spana>°c </span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`
      wind.innerHTML = `${parseInt(json.wind.speed)}km/h`

      // Show the weather information.
      weatherBox.style.display = '';
      weatherDetails.style.display = '';
      weatherBox.classList.add('fadeIn');
      weatherDetails.classList.add('fadeIn');
      container.style.height = '590px';
    })
    .catch(error => {
      console.log(error);
    });
});
