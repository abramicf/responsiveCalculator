describe('runCalculation', () => {
  //first pass tests
  it('should exist', () => {
    should.exist(runCalculation);
  });

  it('should work for "6 * 3 - 4 * 7"', () => {
    let input = '6*3-4*7';
    let value = runCalculation(input);
    value.should.equal(-10);
  });

  it('should work for "20 * 1000 / 50 - 4 * 7 + 2 / 4 "', () => {
    let input = '20*1000/50-4*7+2/4';
    let value = runCalculation(input);
    value.should.equal(372.5);
  });

  it('should work for "100"', () => {
    let input = '100';
    let value = runCalculation(input);
    value.should.equal(100);
  });

  it('should work for "100"', () => {
    let input = '100';
    let value = runCalculation(input);
    value.should.equal(100);
  });

});
