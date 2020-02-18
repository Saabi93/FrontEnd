/*
Create an object to store the following information about your favorite movie: title (a string), 
duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. 
Stars: Puff, Jackie, Living Sneezes."
*/



let favMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
};

function printMovie(film) {
    console.log(film.title + ' lasts for ' + film.duration + ' minutes');
    console.log('Stars: ' + film.stars.join(', '));
}
printMovie(favMovie);