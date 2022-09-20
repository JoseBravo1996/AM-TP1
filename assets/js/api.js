const API_URL = 'https://6329c0634c626ff832c95c63.mockapi.io/api/v1/movies';
const MAIN = document.getElementById('content');
const GENRES = ['accion', 'aventura', 'crimen', 'comedia', 'drama'];


//  getData();

function showMovies(data) {
    MAIN.innerHTML = '';
    GENRES.forEach(genre => {
        const section = document.createElement('section');
        section.setAttribute('id', genre);
        const article = document.createElement('article');
        article.classList.add('cards');
        section.appendChild(article);
        MAIN.appendChild(section);
    });
    data.forEach(movie => {
        const { title, genre, poster_path, vote_average, id } = movie;

        switch (genre) {
            case "accion":
                createElement('accion', movie);
                break;
            case "aventura":
                createElement('aventura', movie);
                break;
            case "crimen":
                createElement('crimen', movie);
                break;
            case "comedia":
                createElement('comedia', movie);
                break;
            case "drama":
                createElement('drama', movie);
                break;
            default:
                alert('Fallo al consumir la api');
                break;
        }
    });
}

function getColor(vote) {
    if (vote >= 4) {
        return 'green';
    } else if (vote >= 2) {
        return 'orange';
    } else {
        return 'red';
    }
}

function getData() {
    let url = `${API_URL}`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function () {

        if (this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText);
            showMovies(datos);
        }
    }
}

function createElement(genre, movie) {
    const section = document.getElementById(genre);
    const article = section.getElementsByClassName('cards');
    const div = document.createElement('div');
    div.classList.add('card');
    div.setAttribute('id', movie.id);
    div.innerHTML = `
            <img src="${movie.poster_path}" alt="${movie.title}"
              class="card__image" />
            <div class="card__content">
              <p>${movie.title}</p>
            </div>
            <div class="card__info">
              <div><i class="fa-solid fa-thumbs-up ${getColor(movie.vote_average)}"></i>${movie.vote_average}</div>
              <div>
                <a href="./" class="card__link">Ver Pelicula</a>
              </div>
        </div>`
    article[0].appendChild(div);
}

$(document).ready(function () {
    // $(".card").click(function () {
    //     $(this).css({ "background": "#34495e"})
    // });
    // $(".card-header img").click(function () {
    //     $(this).css({ "opacity": "0.5"})
    // });

    $(".card").click(function () {
        $(this).css({ "background-color": "var(--colorHover)" });
    });

    $(".card img").click(function () {
        $(this).css({ "opacity": "0.5" });
    });

    $(".card__link").click(function () {
        $(this).text()
        
        $(this).css({ "opacity": "0.5" });
    });


});
