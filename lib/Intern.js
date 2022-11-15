class Intern {
    constructor(name, id, email, school) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.school = school;
    }
  
    getName() {
        this.name
    }

    getId() {
        this.id
    }

    getEmail() {
        this.email
    }

    getSchool() {
        this.school
    }

    getRole() {
        return 'Intern';
    }
}
    

  module.exports = Intern;