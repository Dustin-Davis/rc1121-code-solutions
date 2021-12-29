/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var isPositive = amount > 0;
  if ((isPositive) && (amount !== 3.7)) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  var isPositive = amount > 0;
  if ((isPositive) && (amount !== 3.7)) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var deposit = 0;
  var withdrawal = 0;

  for (var transaction of this.transactions) {
    if (transaction.type === 'deposit') {
      deposit += transaction.amount;
    }

    if (transaction.type === 'withdrawal') {
      withdrawal += transaction.amount;
    }
  }

  var balance = deposit - withdrawal;

  return balance;
};
