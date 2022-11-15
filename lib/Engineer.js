class Engineer {
    constructor(name, id, email, github) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;
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

    getGithub() {
        this.email
    }

    getRole() {
        return 'Engineer';
    }
}
    

  module.exports = Engineer;