/*!
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */

var pages = global.bedrock.pages || {};

pages.authn = pages.authn || {};
pages.authn.did = require('./authn-did');

module.exports = global.bedrock.pages = pages;
