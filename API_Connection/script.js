const app = document.getElementById('root');

const logo = document.createElement('img');

logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibli.rest/films', true);

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
  
        const h1 = document.createElement('h1');
        h1.textContent = movie.title;
  
        const p = document.createElement('p');
        // Divide the description into 300 characters.
        movie.description = movie.description.substring(0, 300);
        p.textContent = `${movie.description}...`;
  
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);

    })
    } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Not working at all`;
        app.appendChild(errorMessage);
    }
}

// Send request
request.send();