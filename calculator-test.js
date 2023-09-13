it('should calculate the monthly rate correctly', function() {
  const values = {amount: 10000, years: 10, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toEqual('103.64');
});
        
it("should return a result with 2 decimal places", function() {
  const values = {amount: 10000, years: 10, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toEqual('103.64');
});
        
it("should return valid result despite bad input", function() {
  const values = {amount: 20, years: 100, rate: 10};
  expect(calculateMonthlyPayment(values)).toEqual('0.17');
});


