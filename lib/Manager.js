class Manager {
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber
    }

    getName() {
        this.name
    }

    getId() {
        this.id
    };

    getEmail() {
        this.email
        
    }

    getRole() {
        return 'Manager';
    }
}

  module.exports = Manager;