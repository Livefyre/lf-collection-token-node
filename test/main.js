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
        it('has #encode method', function () {
            var encoder = new LFCollectionMetaEncoder();
            var spy = sinon.spy(encoder, '_serializedJWT');

            encoder.encode(collectionMeta, siteKey);
            expect(spy.called).to.be.true;
        });
    });

    describe('can return serialized JWT', function () {
        it('expects collectionMeta and siteKey arguments', function () {
            var encoder = new LFCollectionMetaEncoder();
            var spy = sinon.spy(encoder, '_serializedJWT');

            encoder.encode(collectionMeta, siteKey);
            expect(spy.withArgs(collectionMeta, siteKey).called).to.be.true;
        });

        it('returns serialized JWT', function () {
            var encoder = new LFCollectionMetaEncoder();
            var spy = sinon.spy(encoder, '_serializedJWT');

            var serializedJWT = encoder.encode(collectionMeta, siteKey);
            expect(serializedJWT).to.equal('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuZXR3b3JrSWQiOiJsaXZlZnlyZS5jb20iLCJzaXRlSWQiOiIxMjM0NSIsImFydGljbGVJZCI6ImJsYWgiLCJ0eXBlIjoibGl2ZWNvbW1lbnRzIiwiY2hlY2tzdW0iOiJjNmU1YzhjNTZkNDk2MmRlMTU3NDJlZjdlODU1YTdhMyJ9.V0haRVZWVTFaV2RVUkVGMWRIa3hTamhYYlVseFNFdHNRamRITWxGT0wwbFNjV1phVTNvMFZ6WnNUVDA9');
        });
    });
});
