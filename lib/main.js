var jwt = require('jwt-simple');

exports = module.exports = encodeCollectionMeta;

function encodeCollectionMeta(collectionMeta, siteKey) {
    return jwt.encode(collectionMeta, siteKey);
};

var LFCollectionMetaEncoder = function () {};
LFCollectionMetaEncoder.prototype.encode = encodeCollectionMeta;

exports.Encoder = LFCollectionMetaEncoder;
