const FRANCE = 'France';
const USA = 'USA';

class Person {
    constructor (name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    hasMajority() {

        return (this.country === USA && this.age >= 21) || (this.country === FRANCE && this.age >= 18);
    }
}

const list = [
    new Person('Kevin', 8, FRANCE),
    new Person('Jean', 17, FRANCE),
    new Person('Marie', 18, FRANCE),
    new Person('Pierre', 21, FRANCE),
    new Person('Jane', 19, USA),
    new Person('Bob', 21, USA),
    new Person('Bill', 59, USA)
];

const splitByMajority = (personList) => {
    return personList.reduce((prev, current) => {
        if (!current.hasMajority()) {
            return [[...prev[0], current], prev[1]];
        }

        return [prev[0], [...prev[1], current]];
    }, [[], []]);
}

const [, majorPersons] = splitByMajority(list);
console.log(
    majorPersons.map(item => item.name)
        .join(', ')
);
