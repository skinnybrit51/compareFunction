var expect = require('chai').expect,
    comparator = require('./comparator');

describe('Comparator', function () {

    it('Should compare two strings with locale', function () {
        expect(comparator.string('ann', 'zoe') < 0).to.be.true;
        expect(comparator.string('ann', 'ann') === 0).to.be.true;
        expect(comparator.string('ann', 'zoe', false) > 0).to.be.true;
        expect(comparator.string(null, 'zoe') < 0).to.be.true;
        expect(comparator.string('ann', null) > 0).to.be.true;
    });

    it('Should compare two dates', function () {
        expect(comparator.date('2014-01-01', '2014-12-01') < 0).to.be.true;
        expect(comparator.date('2014-01-01', '2014-01-01') === 0).to.be.true;
        expect(comparator.date('2014-01-01', '2014-12-01', false) > 0).to.be.true;
    });

    it('Should compare two booleans', function () {
        expect(comparator.boolean(false, true) < 0).to.be.true;
        expect(comparator.boolean(false, false) === 0).to.be.true;
        expect(comparator.boolean(false, true, false) > 0).to.be.true;
    });

    it('Should compare two integers', function () {
        expect(comparator.integer(1, 2) < 0).to.be.true;
        expect(comparator.integer(1, 1) === 0).to.be.true;
        expect(comparator.integer(1, 2, false) > 0).to.be.true;
    });

    it('Should compare two floats', function () {
        expect(comparator.float(1.1, 1.2) < 0).to.be.true;
        expect(comparator.float(1.1, 1.1) === 0).to.be.true;
        expect(comparator.float(1.1, 1.2, false) > 0).to.be.true;
    });

    it('Should be able to pass the comparator into an array sort', function () {
        var dateArray = ['2012-01-01', '2011-01-01', '2013-01-01', '2009-01-01'];
        dateArray.sort(comparator.date);
        expect(dateArray[0]).to.be.equal('2009-01-01');
        expect(dateArray[1]).to.be.equal('2011-01-01');
        expect(dateArray[2]).to.be.equal('2012-01-01');
        expect(dateArray[3]).to.be.equal('2013-01-01');
    });
});
