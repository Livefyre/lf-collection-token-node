var expect = require('chai').expect;
var sinon = require('sinon');
var LFCollectionMetaEncoder = require('../lib/main');

describe('LFCollectionMetaEncoder', function() {
    var collectionMeta = {
        networkId: 'livefyre.com',
        siteId: '12345',
        articleId: 'blah',
        type: 'livecomments'
    };
    var siteKey = 'WOWZERS';

    describe('with no arguments', function() {
        it('is an instance of LFCollectionMetaEncoder', function() {
            var encoder = new LFCollectionMetaEncoder();
            expect(encoder).to.be.instanceOf(LFCollectionMetaEncoder);
        });
    });

    describe('can encode collectionMeta', function () {
        it('calls #encode', function () {
            var encoder = new LFCollectionMetaEncoder();
            var spy = sinon.spy(encoder, '_serializedJWT');
            encoder.encode(collectionMeta, siteKey);
            expect(spy.called).to.be.true;
        });
    });
});
