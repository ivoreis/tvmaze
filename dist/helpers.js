'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrayToQueryString = function arrayToQueryString() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return data.join('&');
};

var objectToParamsArray = function objectToParamsArray() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(params).map(function (key) {
    return key + '=' + encodeURIComponent(params[key]);
  });
};

var embedToArray = function embedToArray() {
  var embed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return embed.map(function (entry) {
    return 'embed[]=' + encodeURIComponent(entry);
  });
};

var request = function request(_ref) {
  var url = _ref.url;
  return (0, _requestPromise2.default)({ url: url, json: true });
};

var stripHTML = function stripHTML(html) {
  return html && html.replace(/<(?:.|\n)*?>/gm, '') || null;
};

exports.default = {
  arrayToQueryString: arrayToQueryString,
  objectToParamsArray: objectToParamsArray,
  embedToArray: embedToArray,
  request: request,
  stripHTML: stripHTML
};
module.exports = exports['default'];