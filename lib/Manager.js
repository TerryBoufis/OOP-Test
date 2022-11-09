class Manager {
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber
    }

    getName() {
        console.log(`${this.name}`)
    }

    getId() {
        console.log(`${this.id}`)
    };

    getEmail() {
        console.log(`${this.email}`);
        
    }

    getRole() {
        return 'Manager';
    }
}

  module.exports = Manager;