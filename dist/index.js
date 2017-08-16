'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('./helpers');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var URL = 'http://api.tvmaze.com';

var searchShow = function searchShow(name) {
  var qs = (0, _helpers.arrayToQueryString)((0, _helpers.objectToParamsArray)({ q: name }));
  return (0, _helpers.request)({ url: URL + '/search/shows/?' + qs });
};

var singleSearchShow = function singleSearchShow(name, embed) {
  var qs = (0, _helpers.arrayToQueryString)([].concat(_toConsumableArray((0, _helpers.objectToParamsArray)({ q: name })), _toConsumableArray((0, _helpers.embedToArray)(embed))));
  return (0, _helpers.request)({ url: URL + '/singlesearch/shows/?' + qs });
};

var searchPeople = function searchPeople(name) {
  var qs = (0, _helpers.arrayToQueryString)((0, _helpers.objectToParamsArray)({ q: name }));
  return (0, _helpers.request)({ url: URL + '/search/people/?' + qs });
};

var lookupShow = function lookupShow(params) {
  var qs = (0, _helpers.arrayToQueryString)((0, _helpers.objectToParamsArray)(params));
  return (0, _helpers.request)({ url: URL + '/lookup/shows/?' + qs });
};

var schedule = function schedule(_ref) {
  var country = _ref.country,
      date = _ref.date;

  var qs = (0, _helpers.arrayToQueryString)((0, _helpers.objectToParamsArray)({ country: country, date: date }));
  return (0, _helpers.request)({ url: URL + '/schedule/?' + qs });
};

var getShow = function getShow(id, embed) {
  var qs = (0, _helpers.arrayToQueryString)([].concat(_toConsumableArray((0, _helpers.embedToArray)(embed))));
  return (0, _helpers.request)({ url: URL + '/shows/' + id + '/?' + qs });
};

var getPeople = function getPeople(id, embed) {
  var qs = (0, _helpers.arrayToQueryString)([].concat(_toConsumableArray((0, _helpers.embedToArray)(embed))));
  return (0, _helpers.request)({ url: URL + '/people/' + id + '/?' + qs });
};

var getCastCredits = function getCastCredits(id, embed) {
  var qs = (0, _helpers.arrayToQueryString)([].concat(_toConsumableArray((0, _helpers.embedToArray)(embed))));
  return (0, _helpers.request)({ url: URL + '/people/' + id + '/castcredits/?' + qs });
};

var getCrewCredits = function getCrewCredits(id, embed) {
  var qs = (0, _helpers.arrayToQueryString)([].concat(_toConsumableArray((0, _helpers.embedToArray)(embed))));
  return (0, _helpers.request)({ url: URL + '/people/' + id + '/crewcredits/?' + qs });
};

var getShowSeasons = function getShowSeasons(id) {
  return (0, _helpers.request)({ url: URL + '/shows/' + id + '/seasons' });
};

var getShowSeasonEpisodes = function getShowSeasonEpisodes(id, season) {
  return (0, _helpers.request)({ url: URL + '/shows/' + id + '/seasons/' + season + '/episodes' });
};

var getShowSeasonEpisode = function getShowSeasonEpisode(id, season, number) {
  var qs = (0, _helpers.arrayToQueryString)((0, _helpers.objectToParamsArray)({ season: season, number: number }));
  return (0, _helpers.request)({ url: URL + '/shows/' + id + '/episodebynumber/?' + qs });
};

var getEpisodes = function getEpisodes(id) {
  return (0, _helpers.request)({ url: URL + '/shows/' + id + '/episodes' });
};

var getEpisodeById = function getEpisodeById(id) {
  return (0, _helpers.request)({ url: URL + '/episodes/' + id });
};

var getCast = function getCast(id) {
  return (0, _helpers.request)({ url: URL + '/shows/' + id + '/cast' });
};

var getCrew = function getCrew(id) {
  return (0, _helpers.request)({ url: URL + '/shows/' + id + '/crew' });
};

var getUpdates = function getUpdates() {
  return (0, _helpers.request)({ url: URL + '/updates/shows' });
};

var getPopulars = function getPopulars() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
  return (0, _helpers.request)({ url: URL + '/shows' }).then(function (shows) {
    return shows.sort(function (a, b) {
      return b.weight + b.rating.average - (a.weight + a.rating.average);
    }).slice(0, limit);
  });
};

exports.default = {
  // Search
  searchShow: searchShow,
  singleSearchShow: singleSearchShow,
  lookupShow: lookupShow,
  searchPeople: searchPeople,

  // Schedule
  schedule: schedule,

  // Shows
  getShow: getShow,
  getShowSeasons: getShowSeasons,
  getShowSeasonEpisode: getShowSeasonEpisode,
  getShowSeasonEpisodes: getShowSeasonEpisodes,
  getEpisodes: getEpisodes,
  getEpisodeById: getEpisodeById,

  // People
  getPeople: getPeople,
  getCastCredits: getCastCredits,
  getCrewCredits: getCrewCredits,
  getCast: getCast,
  getCrew: getCrew,

  // Updates
  getUpdates: getUpdates,

  // Extra
  getPopulars: getPopulars,

  // Utils
  stripHTML: _helpers.stripHTML
};
module.exports = exports['default'];