class Engineer {
    constructor(name, id, email, github) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;
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

    getGithub() {
        console.log(`${this.email}`);
    }

    getRole() {
        return 'Engineer';
    }
}
    

  module.exports = Engineer;