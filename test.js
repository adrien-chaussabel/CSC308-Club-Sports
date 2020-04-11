
  function add(a, b) {
    return a + b;
  }

  describe('add function', () => {
    it('adds two integers', () => {
      expect(add(1, 2)).toEqual(3);
      expect(add(22, 12)).toEqual(34);
    });
  });