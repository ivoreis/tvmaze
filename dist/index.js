'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EMBED = 'embed[]=';

var qs = function qs(params) {
  return Object.keys(params).map(function (key) {
    return key + '=' + encodeURIComponent(params[key]);
  }).join('&');
};

var TVMaze = function () {
  function TVMaze() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http://api.tvmaze.com/';

    _classCallCheck(this, TVMaze);

    this.APIURL = url;
  }

  _createClass(TVMaze, [{
    key: 'searchShow',
    value: function searchShow(name) {
      return (0, _requestPromise2.default)({ url: this.APIURL + 'search/shows/?' + qs({ q: name }), json: true });
    }
  }, {
    key: 'searchPeople',
    value: function searchPeople(name) {
      return (0, _requestPromise2.default)({ url: this.APIURL + 'search/people/?' + qs({ q: name }), json: true });
    }
  }, {
    key: 'lookupShow',
    value: function lookupShow(params) {
      return (0, _requestPromise2.default)({ url: this.APIURL + 'lookup/shows/?' + qs(params), json: true });
    }
  }, {
    key: 'schedule',
    value: function schedule(_ref) {
      var country = _ref.country,
          date = _ref.date;

      return (0, _requestPromise2.default)({ url: this.APIURL + 'schedule/?' + qs({ country: country, date: date }), json: true });
    }
  }, {
    key: 'getShow',
    value: function getShow(showId, embed) {
      var extra = '';

      if (embed) {
        extra = '?' + EMBED + embed.join('&' + EMBED);
      }

      return (0, _requestPromise2.default)({ url: this.APIURL + 'shows/' + showId + extra, json: true });
    }
  }, {
    key: 'getPeople',
    value: function getPeople(id, embed) {
      var extra = '';

      if (embed) {
        extra = '?' + EMBED + embed.join('&' + EMBED);
      }

      return (0, _requestPromise2.default)({ url: this.APIURL + 'people/' + id + extra, json: true });
    }
  }, {
    key: 'getCastCredits',
    value: function getCastCredits(id, embed) {
      var extra = '';

      if (embed) {
        extra = '?' + EMBED + embed.join('&' + EMBED);
      }

      return (0, _requestPromise2.default)({ url: this.APIURL + 'people/' + id + '/castcredits' + extra, json: true });
    }
  }, {
    key: 'getCrewCredits',
    value: function getCrewCredits(id, embed) {
      var extra = '';

      if (embed) {
        extra = '?' + EMBED + embed.join('&' + EMBED);
      }

      return (0, _requestPromise2.default)({ url: this.APIURL + 'people/' + id + '/crewcredits' + extra, json: true });
    }
  }, {
    key: 'getShowSeasons',
    value: function getShowSeasons(showId) {
      return (0, _requestPromise2.default)({ url: this.APIURL + 'shows/' + showId + '/seasons', json: true });
    }
  }, {
    key: 'getShowSeasonEpisodes',
    value: function getShowSeasonEpisodes(showId, season) {
      return (0, _requestPromise2.default)({ url: this.APIURL + 'shows/' + showId + '/seasons/' + season + '/episodes', json: true });
    }
  }, {
    key: 'getShowSeasonEpisode',
    value: function getShowSeasonEpisode(showId, season, number) {
      return (0, _requestPromise2.default)({
        url: this.APIURL + 'shows/' + showId + '/episodebynumber/?season=' + season + '&number=' + number,
        json: true
      });
    }
  }, {
    key: 'getEpisodes',
    value: function getEpisodes(showId) {
      return (0, _requestPromise2.default)({ url: this.APIURL + 'shows/' + showId + '/episodes', json: true });
    }
  }, {
    key: 'getEpisodeById',
    value: function getEpisodeById(episodeId) {
      return (0, _requestPromise2.default)({ url: this.APIURL + 'episodes/' + episodeId, json: true });
    }
  }, {
    key: 'getCast',
    value: function getCast(showId) {
      return (0, _requestPromise2.default)({ url: this.APIURL + 'shows/' + showId + '/cast', json: true });
    }
  }, {
    key: 'getCrew',
    value: function getCrew(showId) {
      return (0, _requestPromise2.default)({ url: this.APIURL + 'shows/' + showId + '/crew', json: true });
    }
  }, {
    key: 'getUpdates',
    value: function getUpdates() {
      return (0, _requestPromise2.default)({ url: this.APIURL + 'updates/shows', json: true });
    }
  }, {
    key: 'getPopulars',
    value: function getPopulars() {
      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

      return (0, _requestPromise2.default)({ url: this.APIURL + 'shows', json: true }).then(function (shows) {
        return shows.sort(function (a, b) {
          return b.weight + b.rating.average - (a.weight + a.rating.average);
        }).slice(0, limit);
      });
    }
  }]);

  return TVMaze;
}();

exports.default = TVMaze;
