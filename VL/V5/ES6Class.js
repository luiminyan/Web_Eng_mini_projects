class User {
    constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
    }

    // getName = () => this._name;

    get name() {
        return this._name;
    } 
    
    set name(newName) {
        this._name = newName;
    }
}

const alex = new User('Alex', 25, 'Alex@email.com');

// calling the getter
console.log(alex.name);

// calling the setter
alex.name = "Sascha";
console.log(alex.name);

// console.log(alex.getName());

// Vererbung
class Administrator extends User {
    constructor(name, age, email, role) {
        // call constructor in parent class
        super(name, age, email);
        this._role = role;
    }

    get role() {
        return this._role;
    }

    set role(newRole) {
        this._role = role;
    }
}

const lea = new Administrator("Lea", 22, "lea@rub.com", "student");
console.log(lea.role);
console.log(lea.role);
// 和java一样，可以call parent class里的function
console.log(lea.name);
