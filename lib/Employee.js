// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected Entry 'name' to be a non-empty string");
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

    }

    getId() {

    }

    getEmail() {

    }

    getRole() {

    }
}

module.exports = Employee;