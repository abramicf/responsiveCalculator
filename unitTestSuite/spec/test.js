describe('runCalculation', () => {
  //first pass tests
  it('should exist', () => {
    should.exist(runCalculation);
  });

  it('should execute multipication and division before addition and subtraction, such as "6 * 3 - 4 * 7"', () => {
    let input = '6*3-4*7';
    let value = runCalculation(input);
    value.should.equal(-10);
  });

  it('should handle numbers longer than a single digit, such as "254000 + 146000"', () => {
    let input = '254000+146000';
    let value = runCalculation(input);
    value.should.equal(400000);
  });

  it('should be able to handle "20 * 1000 / 50 - 4 * 7 + 2 / 4 "', () => {
    let input = '20*1000/50-4*7+2/4';
    let value = runCalculation(input);
    value.should.equal(372.5);
  });

  it('should work for a single value entered, such as "100"', () => {
    let input = '100';
    let value = runCalculation(input);
    value.should.equal(100);
  });

});
