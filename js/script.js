const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for(let i = 0; i < 2; i++){
	const a = prompt("Один из последних просмотренных фильмов?", ""),
	const b = prompt("На сколько оцените его?", "");

	if(a != null && b != null && a != "" && b != "" && a.length < 50){
		personalMovieDB.movies[a] = b;
		console.log("Done");
	} else{
		console.log("Error");
		i --;
	}
}

/* let i = 0;
while (i < 2) {
	const a = prompt("Один из последних просмотренных фильмов?", "");
	const b = prompt("На сколько оцените его?", "");
	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("Done");
	} else {
		console.log("Error");
		i--;
	}
	i++;
} */

/* let i = 0;
do {
	const a = prompt("Один из последних просмотренных фильмов?", "");
	const b = prompt("На сколько оцените его?", "");
	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("Done");
		i++;
	} else {
		console.log("Error");
	}

}while (i < 2) */

if (personalMovieDB.count < 10) {
	console.log("Просмотренно довольно мало фильмов");
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
}
else if (personalMovieDB.count >= 30) {
	console.log("Вы киноман");
}
else {
	console.log("Произошла ошибка");
}
console.log(personalMovieDB);


function showFirstMessage(){
	console.log("Hello World");
}

showFirstMessage();

function calc(a, b){
	return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(8, 3));

function getMathResult(number, count) {
    if(typeof(count) === "string" || count <= 0){
        return number;
    }
    
    let str = "";
    for(let i = 1; i <= count; i++){
        if(i === count){
            str += number * i;
        } else{
            str += number * i + "---";
        }

    }
    return str;
}

getMathResult(5, 3);
console.log(getMathResult(5, 3));