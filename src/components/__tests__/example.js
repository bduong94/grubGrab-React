describe("Example tests", () => {
  xit("First Test - 2+2 equal to 4", () => {
    const test = 2 + 2;

    expect(test).toBe(4);
  });

  xit("Second Test - 2+2 does not equal 5", () => {
    const test = 2 + 2;

    expect(test).not.toBe(5);
  });
});
