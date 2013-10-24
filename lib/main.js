var jwt = require('jwt');
var md5 = require('MD5');

function LFCollectionMetaEncoder() {
}

LFCollectionMetaEncoder.prototype.encode = function (collectionMeta, siteKey, opts) {
    this.collectionMeta = collectionMeta;
    var opts = opts || {};
    // Generate an md5 checksum for the collection meta
    var checksum = md5(JSON.stringify(this.collectionMeta));
    this.collectionMeta.checksum = checksum;

    if (opts.articleId) {
        this.setArticleId(opts.articleId);
    }
    if (opts.type) {
        this.setStreamType(opts.type);
    }

    if (!this.collectionMeta.articleId || !this.collectionMeta.siteKey) {
        // throw err
    }

    return this._serializedJWT(this.collectionMeta, siteKey);
};

LFCollectionMetaEncoder.prototype._serializedJWT = function (collectionMeta, siteKey) {
    var token = new jwt.WebToken(JSON.stringify(collectionMeta), JSON.stringify({typ:'JWT', alg:'HS256'}));
    return token.serialize(collectionMeta.siteKey || siteKey);
};

LFCollectionMetaEncoder.prototype.setArticleId = function (articleId) {
    this.collectionMeta.articleId = articleId;
    return this;
};

LFCollectionMetaEncoder.prototype.setStreamType = function (streamType) {
    this.collectionMeta.type = streamType;
    return this;
};

module.exports = LFCollectionMetaEncoder;
