
const movies = [
    { title: "The Shawshank Redemption", genre: "Drama" },
    { title: "The Godfather", genre: "Crime" },
    { title: "The Godfather: Part II", genre: "Crime" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "12 Angry Men", genre: "Drama" },
    { title: "Schindler's List", genre: "Drama" },
    { title: "The Lord of the Rings: The Return of the King", genre: "Adventure" },
    { title: "Pulp Fiction", genre: "Crime" },
    { title: "The Good, the Bad and the Ugly", genre: "Western" },
    { title: "Fight Club", genre: "Drama" },
    { title: "Forrest Gump", genre: "Drama" },
    { title: "Inception", genre: "Action" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventure" },
    { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
    { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
    { title: "The Matrix", genre: "Action" },
    { title: "Goodfellas", genre: "Crime" },
    { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
    { title: "Seven Samurai", genre: "Adventure" },
    { title: "Se7en", genre: "Crime" },
    { title: "City of God", genre: "Crime" },
    { title: "The Silence of the Lambs", genre: "Thriller" },
    { title: "It's a Wonderful Life", genre: "Drama" },
    { title: "Life is Beautiful", genre: "Comedy" },
    { title: "The Usual Suspects", genre: "Crime" },
    { title: "Léon: The Professional", genre: "Action" },
    { title: "Spirited Away", genre: "Animation" },
    { title: "Saving Private Ryan", genre: "Drama" },
    { title: "Interstellar", genre: "Adventure" },
    { title: "The Green Mile", genre: "Drama" },
    { title: "The Prestige", genre: "Drama" },
    { title: "The Intouchables", genre: "Comedy" },
    { title: "The Lion King", genre: "Animation" },
    { title: "The Pianist", genre: "Drama" },
    { title: "The Departed", genre: "Crime" },
    { title: "Whiplash", genre: "Drama" },
    { title: "Gladiator", genre: "Action" }
]
// Bonus while using local storage
// let movies=[];
// localStorage.setItem('movieListToSave', JSON.stringify(moviesOriginalList));
// movies = JSON.parse(localStorage.getItem('movieListToSave'));

const titleInput = document.getElementById('title');
const genreInput = document.getElementById('genre');
const resultULTag = document.getElementById('results');
const countTag = document.getElementById('count');

let searchResults = [];

document.getElementById('search').addEventListener('click', (event) => {
    console.log('button is clicked');
    // resultULTag.innerHTML="";// clearing the of previous search
    if (titleInput.value) {
        searchResults = searchByTitle(titleInput.value);

    } else if (titleInput.value) {
        searchResults = searchByGenre(genreInput.value);
    }

    displayResults(searchResults);
});

//Part 1: Search by Title
function searchByTitle(searchTerm) {
    console.log('search by titile')
    // search by doing lower case on both sides and trimming the search term
    return movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim()));
}
//Part 2: Search by Genre
function searchByGenre(searchTerm) {
    console.log('search by genre')
    // search by doing lower case on both sides and trimming the search term
    return movies.filter(movie => movie.genre.toLowerCase().includes(searchTerm.toLowerCase().trim()));
}
//Part 3: Display Results
function displayResults(list) {
    resultULTag.innerHTML = "";// clreaing the previous result

    list.map(ele => {
        let childTag = `<li>${ele.title}(${ele.genre})</li>`
        console.log(childTag);
        resultULTag.innerHTML += childTag;
    })
    countByGenre(list);
}

//Part 5: Sort Results
function sortByTitle() {
    console.log('sortby title called')
    const sortedMovies = searchResults.sort((a, b) => a.title.localeCompare(b.title))
    displayResults(sortedMovies)
}
function sortByGenre() {
    console.log('sortby genre called')
    const sortedMovies = searchResults.sort((a, b) => a.genre.localeCompare(b.genre))
    displayResults(sortedMovies)
}

//Part 6: Count Results
function countByGenre(list) {
    let countObject = {};
    list.map(item => {
        if (countObject[item.genre]) {
            countObject[item.genre]++;
        } else {
            countObject[item.genre] = 1;
        }
        //alternative 2
        //  countObject[item.genre] = (countObject[item.genre] | 0) + 1;
    })
    countTag.innerHTML = "";
    for (key in countObject) {
        console.log(key);
        countTag.innerHTML += `<li>${key} : ${countObject[key]}</li>`
    }
}

function searchBoth(title, genre) {
    return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase().trim()) && movie.genre.toLowerCase().includes(genre.toLowerCase().trim()));
}
//Part 7: Advanced Search