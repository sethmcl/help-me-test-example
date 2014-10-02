var FileInfo = hmt.lib('FileInfo');

describe('FileInfo', function () {
  it('should give me length of file', function () {
    var expected = hmt.fixture('addresses.txt').length;
    var actual   = new FileInfo(hmt.path('fixtures', 'addresses.txt')).getLength();

    hmt.assert.equal(actual, expected, 'Calculated length of file is incorrect');
  });
});
