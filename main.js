class User {
    constructor (fullName, items, sleepHours, countMeals){
        // properties
        this.fullName = fullName;
        this.money = items;
        this.sleepMood = sleepHours;
        this.healthRate = countMeals;
    }
        // methods
        sleep() {
            return this.sleepMood == 7 ? 'Happy' : this.sleepMood > 7 ? 'Tired' : 'Lazy';
        }
        eat() {
            return  this.healthRate == 3 ? '100 healthRate' : this.healthRate == 2 ? '75 healthRate' : '50 healthRate';
        }
        buy() {
            return `Decrees Money ${this.money * 10} LE`;
        }
}

let userOne = new User('Mohamed', 2, 7, 2);

console.log(userOne);
console.log(userOne.sleep());
console.log(userOne.eat());
console.log(userOne.buy());
console.log(`Name: ${userOne.fullName}, ${userOne.eat()}, your sleepMood: ${userOne.sleep()} and bought ${userOne.money} items`);