const db = require('./conn'),
  bcrypt = require('bcryptjs');

class User {
  constructor(id, username, email, password) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  checkPassword(hashedPassword) {
    return bcrypt.compareSync(this.password, hashedPassword);
  }

  async addUser() {
    try {
      const response = await db.one(
        `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`,
        [this.username, this.email, this.password]
      );
      return response;
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }

  async loginUser() {
    try {
      const response = await db.one(
        `SELECT id, username, password FROM users WHERE email = $1;`,
        [this.email]
      );

      const isValid = this.checkPassword(response.password);
      if (!!isValid) {
        console.log('PASS', isValid);
      } else {
        console.log('FAIL', isValid);
      }
    } catch (error) {
      console.error('ERROR: ', error);
      return error;
    }
  }
}

module.exports = User;
