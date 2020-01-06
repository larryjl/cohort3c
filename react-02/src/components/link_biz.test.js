import {
  linkNode, 
  linkList, 
  linkListDummy, 
  functions
} from './link_biz';

describe('linkList', () => {
  const data = [
    {subject: 'a', amount: 0},
    {subject: 'b', amount: 1},
    {subject: 'c', amount: 2}
  ];
  test('show', () => {
    const node = new linkNode({subject: 'a', amount: 0}, null);
    expect(node.show()).toBe('amount: 0, subject: a');
  });

  test('naive list', () => {
    const list = {
      node0: new linkNode({subject: 'a', amount: 0}),
      node1: new linkNode({subject: 'b', amount: 1}),
      node2: new linkNode({subject: 'c', amount: 2}),
    };
    list.head = list.node0;
    list.node0.forwardNode = list.node1;
    list.node1.forwardNode = list.node2;
    
    expect(list.head.amount).toBe(0);
    expect(list.head.forwardNode.amount).toBe(1);
    expect(list.head.forwardNode.forwardNode.amount).toBe(2);
  });

test('single line nested list', () => {
    const list = {
        head: new linkNode({subject: 'a', amount: 0}, 
        new linkNode({subject: 'b', amount: 1}, 
        new linkNode({subject: 'c', amount: 2}, null)))
    };
    expect(list.head.amount).toBe(0);
    expect(list.head.forwardNode.amount).toBe(1);
    expect(list.head.forwardNode.forwardNode.amount).toBe(2);
  });

  test('generic iterated list', () => {
    const n = data.length;
    let list = {head: null};
    let node = null;
    for (let i=n-1; i>=0; i--) {
      node = new linkNode(data[i], node);
    };
    list.head = node;
    expect(list.head.amount).toBe(0);
    expect(list.head.forwardNode.amount).toBe(1);
    expect(list.head.forwardNode.forwardNode.amount).toBe(2);
  });

  test('list as class, add to start', () => {
    const list = new linkList(data)
    expect(list.head.amount).toBe(0);
    expect(list.head.forwardNode.amount).toBe(1);
    expect(list.head.forwardNode.forwardNode.amount).toBe(2);

    list.head = list.linkAdd(list.head, {subject: 'd', amount: 3});
    expect(list.head.amount).toBe(3);
    expect(list.head.forwardNode.amount).toBe(0);
  });

  test('list as class, add to end', () => {
    const list = new linkList(data)
    expect(list.head.amount).toBe(0);
    expect(list.head.forwardNode.amount).toBe(1);
    expect(list.head.forwardNode.forwardNode.amount).toBe(2);

    list.linkTail({subject: 'd', amount: 3});
    expect(list.head.amount).toBe(0);
    expect(list.head.forwardNode.forwardNode.forwardNode.amount).toBe(3);
    expect(list.tail.amount).toBe(3);
  });

  test('list using dummy', () => {
    const list = new linkListDummy(data)
    expect(list.head.amount).toBe(0);
    expect(list.head.forwardNode.amount).toBe(1);
    expect(list.head.forwardNode.forwardNode.amount).toBe(2);
    expect(list.tail.amount).toBe(2);

    list.head = list.linkAdd(list.head, {subject: 'd', amount: 3});
    expect(list.head.amount).toBe(3);
    expect(list.head.forwardNode.amount).toBe(0);
  });

  test('print list', () => {
    console.log = jest.fn();
    const list = new linkList(data)
    list.printList();
    expect(console.log.mock.calls.length).toBe(3);
    expect(console.log.mock.calls).toEqual([
      ['a', 0],
      ['b', 1],
      ['c', 2]
    ]);
  });

  test('show list', () => {
    const list = new linkList(data)
    expect(list.showList()).toBe(
      'amount: 0, subject: a; amount: 1, subject: b; amount: 2, subject: c');
  })
});

describe('functions', () => {
  const data = [
    {subject: 'a', amount: 0},
    {subject: 'b', amount: 1},
    {subject: 'c', amount: 2}
  ];
  test('first', () => {
    const list = new linkListDummy(data)
    const result = functions.first();
    expect(result).toEqual({});
  });
  test('last', () => {
    const result = functions.last();
    expect(result).toEqual({});
  });
  test('next', () => {
    const resu = functions.next();
    expect(result).toEqual({});
  });
  test('previous', () => {
    const result = functions.previous();
    expect(result).toEqual({});
  });
  test('insert', () => {
    const result = functions.insert();
    expect(result).toEqual({});
  });
  test('delete', () => {
    const result = functions.delete();
    expect(result).toEqual({});
  });
  test('total', () => {
    const result = functions.total();
    expect(result).toEqual({});
  });
});