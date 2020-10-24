class Account {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = Account;
