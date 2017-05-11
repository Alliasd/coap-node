var expect = require('chai').expect,
    cutils = require('../lib/components/cutils.js');

describe('cutils', function () {
    describe('Signature Check', function () {

        it('#.getTime()', function () {
            expect(function () { cutils.getTime(); }).not.to.throw();
        });

        it('#.oidKey()', function () {
            expect(function () { cutils.oidKey({}); }).to.throw();
            expect(function () { cutils.oidKey([]); }).to.throw();
            expect(function () { cutils.oidKey(); }).to.throw();

            expect(function () { cutils.oidKey('x'); }).not.to.throw();
            expect(function () { cutils.oidKey(5); }).not.to.throw();
        });

        it('#.oidNumber()', function () {
            expect(function () { cutils.oidNumber({}); }).to.throw();
            expect(function () { cutils.oidNumber([]); }).to.throw();
            expect(function () { cutils.oidNumber(); }).to.throw();

            expect(function () { cutils.oidNumber('x'); }).not.to.throw();
            expect(function () { cutils.oidNumber(5); }).not.to.throw();
        });

        it('#.ridKey()', function () {
            expect(function () { cutils.ridNumber({}, 'x'); }).to.throw();
            expect(function () { cutils.ridNumber([], 'x'); }).to.throw();
            expect(function () { cutils.ridNumber('x', []); }).to.throw();
            expect(function () { cutils.ridNumber('x', {}); }).to.throw();
            expect(function () { cutils.ridNumber(); }).to.throw();

            expect(function () { cutils.ridNumber('x', 'y'); }).not.to.throw();
            expect(function () { cutils.ridNumber(5, 'y'); }).not.to.throw();
            expect(function () { cutils.ridNumber('x', 5); }).not.to.throw();
            expect(function () { cutils.ridNumber(1, 5); }).not.to.throw();
        });

        it('#.ridNumber()', function () {
            expect(function () { cutils.ridNumber({}, 'x'); }).to.throw();
            expect(function () { cutils.ridNumber([], 'x'); }).to.throw();
            expect(function () { cutils.ridNumber('x', []); }).to.throw();
            expect(function () { cutils.ridNumber('x', {}); }).to.throw();
            expect(function () { cutils.ridNumber(); }).to.throw();

            expect(function () { cutils.ridNumber('x', 'y'); }).not.to.throw();
            expect(function () { cutils.ridNumber(5, 'y'); }).not.to.throw();
            expect(function () { cutils.ridNumber('x', 5); }).not.to.throw();
            expect(function () { cutils.ridNumber(1, 5); }).not.to.throw();
        });

        it('#.buildRptAttr()', function () {

        });

        it('#.buildUpdateQuery()', function () {

        });

        it('#.getArrayArgus()', function () {

        });

        it('#.getPathArray()', function () {
            expect(function () { cutils.getPathArray(5); }).to.throw();
            expect(function () { cutils.getPathArray({}); }).to.throw();
            expect(function () { cutils.getPathArray([]); }).to.throw();
            expect(function () { cutils.getPathArray(); }).to.throw();

            expect(function () { cutils.getPathArray('x'); }).not.to.throw();
        });

        it('#.getPathIdKey()', function () {
            expect(function () { cutils.getPathIdKey(5); }).to.throw();
            expect(function () { cutils.getPathIdKey({}); }).to.throw();
            expect(function () { cutils.getPathIdKey([]); }).to.throw();
            expect(function () { cutils.getPathIdKey(); }).to.throw();

            expect(function () { cutils.getPathIdKey('x'); }).not.to.throw();
        });

        it('#.encodeJson()', function () {
            expect(function () { cutils.encodeJson('x', 'y'); }).to.throw();
            expect(function () { cutils.encodeJson('x/y', 'y'); }).to.throw();
            expect(function () { cutils.encodeJson('x', 5); }).to.throw();
            expect(function () { cutils.encodeJson('x/y', 5); }).to.throw();
            expect(function () { cutils.encodeJson('x', []); }).to.throw();
            expect(function () { cutils.encodeJson(5, 'y'); }).to.throw();
            expect(function () { cutils.encodeJson(1, 5); }).to.throw();
            expect(function () { cutils.encodeJson({}, 'x'); }).to.throw();
            expect(function () { cutils.encodeJson([], 'x'); }).to.throw();
            expect(function () { cutils.encodeJson(); }).to.throw();

            expect(function () { cutils.encodeJson('x/y/z', 'y'); }).not.to.throw();
            expect(function () { cutils.encodeJson('x/y/z', 5); }).not.to.throw();
            expect(function () { cutils.encodeJson('x', {}); }).not.to.throw();
        });

        it('#.decodeJson()', function () {
            expect(function () { cutils.decodeJson('x', 'y'); }).to.throw();
            expect(function () { cutils.decodeJson('x/y', 'y'); }).to.throw();
            expect(function () { cutils.decodeJson('x', 5); }).to.throw();
            expect(function () { cutils.decodeJson('x/y', 5); }).to.throw();
            expect(function () { cutils.decodeJson('x', []); }).to.throw();
            expect(function () { cutils.decodeJson(5, 'y'); }).to.throw();
            expect(function () { cutils.decodeJson(1, 5); }).to.throw();
            expect(function () { cutils.decodeJson({}, 'x'); }).to.throw();
            expect(function () { cutils.decodeJson([], 'x'); }).to.throw();
            expect(function () { cutils.decodeJson(); }).to.throw();

            expect(function () { cutils.decodeJson('x/y/z', {e:[]}); }).not.to.throw();
            expect(function () { cutils.decodeJson('x', {e:[]}); }).not.to.throw();
        });
    });

    describe('Functional Check', function () {
        it('#.oidKey()', function () {
            expect(cutils.oidKey('x')).to.be.eql('x');
            expect(cutils.oidKey(9999)).to.be.eql(9999);
            expect(cutils.oidKey(2051)).to.be.eql('cmdhDefEcValues');
            expect(cutils.oidKey('2051')).to.be.eql('cmdhDefEcValues');
            expect(cutils.oidKey('cmdhDefEcValues')).to.be.eql('cmdhDefEcValues');
        });

        it('#.oidNumber()', function () {
            expect(cutils.oidNumber('x')).to.be.eql('x');
            expect(cutils.oidNumber(9999)).to.be.eql(9999);
            expect(cutils.oidNumber(2051)).to.be.eql(2051);
            expect(cutils.oidNumber('2051')).to.be.eql(2051);
            expect(cutils.oidNumber('cmdhDefEcValues')).to.be.eql(2051);
        });

        it('#.ridKey()', function () {
            expect(cutils.ridKey('x', 1)).to.be.eql(1);
            expect(cutils.ridKey('x', 1)).to.be.eql(1);
            expect(cutils.ridKey(9999)).to.be.eql(9999);
            expect(cutils.ridKey(9999, 1)).to.be.eql(1);
            expect(cutils.ridKey(1, 9999)).to.be.eql(9999);
            expect(cutils.ridKey(1, 'xxx')).to.be.eql('xxx');

            expect(cutils.ridKey(5602)).to.be.eql('maxMeaValue');
            expect(cutils.ridKey('5602')).to.be.eql('maxMeaValue');
            expect(cutils.ridKey('maxMeaValue')).to.be.eql('maxMeaValue');
            expect(cutils.ridKey('lwm2mServer', 5)).to.be.eql('disableTimeout');
            expect(cutils.ridKey('lwm2mServer', '5')).to.be.eql('disableTimeout');
            expect(cutils.ridKey(1, 5)).to.be.eql('disableTimeout');
            expect(cutils.ridKey(1, '5')).to.be.eql('disableTimeout');
            expect(cutils.ridKey(1, 'disableTimeout')).to.be.eql('disableTimeout');
            expect(cutils.ridKey('1', 'disableTimeout')).to.be.eql('disableTimeout');
        });

        it('#.ridNumber()', function () {
            expect(cutils.ridNumber('x', 1)).to.be.eql(1);
            expect(cutils.ridNumber('x', 1)).to.be.eql(1);
            expect(cutils.ridNumber(9999)).to.be.eql(9999);
            expect(cutils.ridNumber(9999, 1)).to.be.eql(1);
            expect(cutils.ridNumber(1, 9999)).to.be.eql(9999);
            expect(cutils.ridNumber(1, 'xxx')).to.be.eql('xxx');

            expect(cutils.ridNumber(5602)).to.be.eql(5602);
            expect(cutils.ridNumber('5602')).to.be.eql(5602);
            expect(cutils.ridNumber('maxMeaValue')).to.be.eql(5602);
            expect(cutils.ridNumber('lwm2mServer', 5)).to.be.eql(5);
            expect(cutils.ridNumber('lwm2mServer', '5')).to.be.eql(5);
            expect(cutils.ridNumber(1, 5)).to.be.eql(5);
            expect(cutils.ridNumber(1, '5')).to.be.eql(5);
            expect(cutils.ridNumber(1, 'disableTimeout')).to.be.eql(5);
            expect(cutils.ridNumber('1', 'disableTimeout')).to.be.eql(5);
        });

        it('#.buildRptAttr()', function () {

        });

        it('#.buildUpdateQuery()', function () {

        });

        it('#.getArrayArgus()', function () {

        });

        it('#.getPathArray()', function () {
            expect(cutils.getPathArray('/x/y/z')).to.be.eql(['x', 'y', 'z']);
            expect(cutils.getPathArray('/x/y/z/')).to.be.eql(['x', 'y', 'z']);
            expect(cutils.getPathArray('x/y/z/')).to.be.eql(['x', 'y', 'z']);
            expect(cutils.getPathArray('x/y/z')).to.be.eql(['x', 'y', 'z']);
        });

        it('#.getPathIdKey()', function () {
            expect(cutils.getPathIdKey('/1/2/3')).to.be.eql({ oid: 'lwm2mServer', iid: 2, rid: 'defaultMaxPeriod' });
            expect(cutils.getPathIdKey('/lwm2mServer/2/3')).to.be.eql({ oid: 'lwm2mServer', iid: 2, rid: 'defaultMaxPeriod' });
            expect(cutils.getPathIdKey('/1/2/defaultMaxPeriod')).to.be.eql({ oid: 'lwm2mServer', iid: 2, rid: 'defaultMaxPeriod' });
            expect(cutils.getPathIdKey('/lwm2mServer/2/defaultMaxPeriod')).to.be.eql({ oid: 'lwm2mServer', iid: 2, rid: 'defaultMaxPeriod' });
        });
    });
});
