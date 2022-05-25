let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

class Movie{
    constructor(lengthInMinutes, numCharacters, language){
        this.lengthInMinutes =lengthInMinutes;
        this.numCharacters = numCharacters;
        this.language =language;
    }
    run(){
        return (`This is a `+ this.language+` movie with `+this.numCharacters+ ` and is `+this.lengthInMinutes+ ` long.`);
    }
};

let language = readLine();
let numCharacters = readLine();
let lengthInMinutes = readLine();
let movie = new Movie(lengthInMinutes, numCharacters, language)
console.log(movie.run());