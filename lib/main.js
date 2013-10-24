var jwt = require('jwt-simple');
var md5 = require('MD5');

function LFCollectionMetaEncoder() {
}

LFCollectionMetaEncoder.prototype.encode = function (collectionMeta, siteKey, opts) {
    this.collectionMeta = collectionMeta;
    var opts = opts || {};

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

LFCollectionMetaEncoder.prototype._serializedJWT = function (payload, secret) {
    var token = jwt.encode(payload, secret);
    return token;
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
