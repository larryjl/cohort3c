import {Account, AccountController} from './account.js';
import functions from './functions.js';

// *** 130b

test('account new', () => {
  const account = new Account('checkingAccount', 25);
  expect(account.name).toBe('checkingAccount');
  expect(account.bal).toBe(25);

  account.deposit(10);
  expect(account.bal).toBe(35);

  account.withdraw(30);
  expect(account.bal).toBe(5);

  expect(account.balance()).toBe(5);
});

test('account click', () => {
  let event = {};
  const account = new Account('checkingAccount', 25);
  let input;
  const output = document.createElement('div');
  let msg;

  // test deposit
  event = {
    target: {
      id: 'idBtnDeposit'
    }
  };
  input = 10;
  functions.accountClick(event, account, input, output);
  expect(account.bal).toBe(35);
  expect(output.textContent).toBe('Deposited: $10.00');

  // test withdraw
  event = {
    target: {
      id: 'idBtnWithdraw'
    }
  };
  input = 30;
  functions.accountClick(event, account, input, output);
  expect(account.bal).toBe(5);
  expect(output.textContent).toBe('Withdrew: $30.00');
  // test withdrawal with insufficient balance
  functions.accountClick(event, account, input, output);
  expect(output.textContent).toBe('Insufficient balance.');

  // test balance
  event = {
    target: {
      id: 'idBtnBalance'
    }
  };
  msg = functions.accountClick(event, account, input, output);
  expect(output.textContent).toBe('Current balance: $5.00');
});

// *** 130c

test('controller add, remove', () => {
  const controller = new AccountController('controller');
  let msg;

  // test add
  controller.add('checking', 25);
  expect(controller.accounts[0].name).toBe('checking');
  expect(controller.accounts[0].bal).toBe(25);

  // test remove
  msg = controller.remove('checking');
  expect(controller.accounts.length).toBe(0);
  // test remove non-existing account
  msg = controller.remove('not an account');
  expect(msg).toBe('error');
});

// test total, highest, lowest
test('controller total, highest, lowest', () => {
  const controller = new AccountController('controller');
  controller.accounts = [
    {name: 'checking',
      bal: 1},
    {name: 'savings',
      bal: 2},
    {name: 'investment',
      bal: 3},
  ];

  // test total
  expect(controller.total()).toBe(6);
  // test highest
  expect(controller.highest()).toEqual(
    {name: 'investment',
      bal: 3}
  );
  // test lowest
  expect(controller.lowest()).toEqual(
    {name: 'checking',
      bal: 1}
  );
});

// test total, highest, lowest errors with no accounts
test('controller total, highest, lowest', () => {
  const controller = new AccountController('controller');
  controller.accounts = [];

  // test total
  expect(controller.total()).toBe('error');
  // test highest
  expect(controller.highest()).toBe('error');
  // test lowest
  expect(controller.lowest()).toBe('error');
});

// test click fx
test('controller click add, remove', () => {
  let event = {};
  const controller = new AccountController('Lawrence');
  let inputName;
  let inputBalance;
  const output = document.createElement('div');
  let msg;

  // test add
  event = {
    target: {
      id: 'idBtnAdd'
    }
  };
  inputName = 'checking';
  inputBalance = 25;
  functions.controlClick(event, controller, inputName, inputBalance, output);
  expect(controller.accounts[0].name).toBe('checking');
  expect(controller.accounts[0].bal).toBe(25);
  expect(output.textContent).toBe('Added account: checking');

  // test add duplicate 
  // *************** todo: fix this test.
  // functions.controlClick(event, controller, inputName, inputBalance, output);
  // expect(output.textContent).toBe('Account already exists: checking');

  // test remove
  event = {
    target: {
      id: 'idBtnRemove'
    }
  };
  functions.controlClick(event, controller, inputName, inputBalance, output);
  expect(controller.accounts.length).toBe(0);
  expect(output.textContent).toBe('Removed account: checking');
  // test remove non-existing account
  inputName = 'not an account';
  functions.controlClick(event, controller, inputName, inputBalance, output);
  expect(output.textContent).toBe('Account does not exist: not an account');
});

// test click total, highest, lowest
test('controller click total, highest, lowest', () => {
  let event = {};
  const controller = new AccountController('Lawrence');
  let inputName;
  let inputBalance;
  const output = document.createElement('div');
  let msg;

  controller.accounts = [
    {name: 'checking',
      bal: 1},
    {name: 'savings',
      bal: 2},
    {name: 'investment',
      bal: 3},
  ];

  // test total
  event = {
    target: {
      id: 'idBtnTotal'
    }
  };
  functions.controlClick(event, controller, inputName, inputBalance, output);
  expect(output.textContent).toBe('Total balance: $6.00');
  // test highest
  event = {
    target: {
      id: 'idBtnHighest'
    }
  };
  functions.controlClick(event, controller, inputName, inputBalance, output);
  expect(output.textContent).toBe('Highest: name: investment, balance: $3.00');
  // test lowest
  event = {
    target: {
      id: 'idBtnLowest'
    }
  };
  functions.controlClick(event, controller, inputName, inputBalance, output);
  expect(output.textContent).toBe('Lowest: name: checking, balance: $1.00');
});

// test click for total, highest, lowest errors with no accounts
test('controller click total, highest, lowest errors', () => {
  let event = {};
  const controller = new AccountController('Lawrence');
  let inputName;
  let inputBalance;
  const output = document.createElement('div');
  let msg;

  // test total
  event = {
    target: {
      id: 'idBtnTotal'
    }
  };
  functions.controlClick(event, controller, inputName, inputBalance, output);
  expect(output.textContent).toBe('No accounts.');
  // test highest
  event = {
    target: {
      id: 'idBtnHighest'
    }
  };
  functions.controlClick(event, controller, inputName, inputBalance, output);
  expect(output.textContent).toBe('No accounts.');
  // test lowest
  event = {
    target: {
      id: 'idBtnLowest'
    }
  };
  functions.controlClick(event, controller, inputName, inputBalance, output);
  expect(output.textContent).toBe('No accounts.');
});