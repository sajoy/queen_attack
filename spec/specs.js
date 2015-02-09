describe("queenAttack", function() {
  it("returns true if the two positions are in the same column", function() {
    expect(queenAttack([1,1],[1,4])).to.equal(true);
  });

  it("returns true if the two positions are in the same row", function() {
    expect(queenAttack([1,1], [3,1])).to.equal(true);
  });

  it("returns true if the two positions are diagonal from each other", function() {
    expect(queenAttack([1,1], [3,3])).to.equal(true);
  });

  it("returns false if the two positions are not horizontal, vertical, or diagonal", function() {
    expect(queenAttack([1,1], [2,3])).to.equal(false);
  });

});
