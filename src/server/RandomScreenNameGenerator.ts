class RandomScreenNameGenerator {
    private prefixes = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple'];
    private suffixes = ['Cat', 'Dog', 'Bird', 'Tiger', 'Giraffe', 'Elephant', 'Koala', 'Bee', 'Fly', 'Fish', 'Frog'];

    constructor(){

    }

    getName() : string{

        let prefix = this.prefixes[Math.floor(Math.random() * this.prefixes.length)];
        let suffix = this.suffixes[Math.floor(Math.random() * this.suffixes.length)];

        return prefix + " " + suffix;

    }

}

export default RandomScreenNameGenerator;