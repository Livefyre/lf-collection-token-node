var expect = require('chai').expect;
var sinon = require('sinon');
var LFCollectionMetaEncoder = require('../lib/main');

describe('LFCollectionMetaEncoder', function() {
    // Collection Metadata schema:
    // https://github.com/Livefyre/livefyre-docs/wiki/StreamHub-Integration-Guide#wiki-collection-metadata
    var collectionMeta = {
        'siteId': '12345',
        'articleId': 'blah',
        'title': 'my collection',
        'url': 'http://mysite/mycollection',
        'type': 'livecomments'
    };
    var siteKey = 'WOWZERS';

    //var collectionMeta = {
    //    "url": "http://apps.livefyre.com/test1", 
    //    "siteId": '346337',
    //    "articleId": "test1", 
    //    "type": "reviews", 
    //    "title": "test1"
    //};
    //var siteKey = 'btoNzNf16Zt0sA94WUznhVj9TNk=';

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
            expect(serializedJWT).to.equal('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaXRlSWQiOiIxMjM0NSIsImFydGljbGVJZCI6ImJsYWgiLCJ0aXRsZSI6Im15IGNvbGxlY3Rpb24iLCJ1cmwiOiJodHRwOi8vbXlzaXRlL215Y29sbGVjdGlvbiIsInR5cGUiOiJsaXZlY29tbWVudHMifQ.v0mh-Y_ybGthOua1T7WFJBPTpGHx2mCI8iy4madsWy0');
        });
    });
});
