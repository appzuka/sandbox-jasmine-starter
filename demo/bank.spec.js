const Account = require("./bank.js");

let account;

beforeAll(function () {
  account = new Account(42);
});

describe("A suite", function () {
  it("contains spec with an expectation", function () {
    expect(true).toBe(true);
  });
});

describe("A suite", function () {
  it("contains spec with an expectation", function () {
    const currentBalance = account.getBalance();
    expect(currentBalance).toBe(42);
  });
});
