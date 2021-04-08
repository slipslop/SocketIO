"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RandomScreenNameGenerator {
    constructor() {
        this.prefixes = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple'];
        this.suffixes = ['Cat', 'Dog', 'Bird', 'Tiger', 'Giraffe', 'Elephant', 'Koala', 'Bee', 'Fly', 'Fish', 'Frog'];
    }
    getName() {
        let prefix = this.prefixes[Math.floor(Math.random() * this.prefixes.length)];
        let suffix = this.suffixes[Math.floor(Math.random() * this.suffixes.length)];
        return prefix + " " + suffix;
    }
}
exports.default = RandomScreenNameGenerator;
//# sourceMappingURL=RandomScreenNameGenerator.js.map