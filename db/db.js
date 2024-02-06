const Ticket = require("../models/ticket");
class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * create and save a new ticket
   * @param {string} username
   * @returns {Ticket}
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * create multiple tickets
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */
  bulkTicekts(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  /**
   * find all available tickets
   * @returns {Array<Ticket>}
   */
  find() {
    return this.tickets;
  }

  /**
   * find ticket by ticket id
   * @param {string} ticketId
   * @returns {Ticket}
   */
  findById(ticketId) {
    const ticket = this.tickets.find((ticket) => ticket.id === ticketId);
    return ticket;
  }

  /**
   *
   * @param {string} username
   * @returns {Array<Ticket>}
   */
  findByUsername(username) {
    return this.tickets.filter((ticket) => ticket.username === username);
  }

  /**
   * ubdate ticket by id
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   * @returns {Ticket}
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updatedAt = new Date();
    return ticket;
  }

  /**
   * ubdate ticket by username
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   * @returns {Ticket}
   */
  updateByUsernam(username, ticketBody) {
    return this.findByUsername(username).forEach((elm) => {
      elm.username = ticketBody.username ?? elm.username;
      elm.price = ticketBody.price ?? elm.price;
      elm.updatedAt = new Date();
    });
  }

  /**
   * delete ticket by id
   * @param {string} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);

    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   * delete ticket by username
   * @param {string} username
   */
  deleteByUsername(username) {
    const index = this.tickets.findIndex((ticket) => {
      return ticket.username === username;
    });

    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   * find winder(s) with reffle draw
   * @param {number} winnderCount
   * @returns {Array<Ticket>}
   */
  draw(winnderCount) {
    const winnerIndexes = Array(winnderCount);
    let i = 0;
    while (i < winnderCount) {
      const index = Math.floor(Math.random() * this.tickets.length);
      if (!winnerIndexes.includes(index)) {
        winnerIndexes[i++] = index;
      }
    }
    const winners = winnerIndexes.map((winner) => this.tickets[winner]);
    return winners;
  }
}
const myDb = new MyDB();

module.exports = myDb;
