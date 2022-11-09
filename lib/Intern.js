class Intern {
    constructor(name, id, email, school) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.school = school;
    }
  
    getName() {
        console.log(`${this.name}`)
    }

    getId() {
        console.log(`${this.id}`);
    }

    getEmail() {
        console.log(`${this.email}`);
    }

    getSchool() {
        console.log(`${this.school}`)
    }

    getRole() {
        return 'Intern';
    }
}
    

  module.exports = Intern;