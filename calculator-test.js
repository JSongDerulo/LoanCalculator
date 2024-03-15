
it('should calculate the monthly rate correctly', function () {
  // ...
  let values = { amount: 1000, years: 10, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('10.61');
});


it("should return a result with 2 decimal places", function() {
  // ..
  let values = { amount: 942.81, years: 10, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual('10.00')
});

/// etc
