const { createRandomId } = require("../utils/shortString");
class Ticket {
  /**
   * this is constructor function
   * @param {string} username
   * @param {number} price
   */
  constructor(username, price) {
    this.id = createRandomId(6);
    this.username = username;
    this.price = price;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Ticket;
