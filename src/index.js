import rp from 'request-promise';

const EMBED = 'embed[]=';

const qs = params =>
  Object
    .keys(params)
    .map(
      key => `${key}=${encodeURIComponent(params[key])}`,
    )
    .join('&');

class TVMaze {
  constructor(url = 'http://api.tvmaze.com/') {
    this.APIURL = url;
  }

  searchShow(name) {
    return rp({ url: `${this.APIURL}search/shows/?${qs({ q: name })}`, json: true });
  }

  searchPeople(name) {
    return rp({ url: `${this.APIURL}search/people/?${qs({ q: name })}`, json: true });
  }

  lookupShow(params) {
    return rp({ url: `${this.APIURL}lookup/shows/?${qs(params)}`, json: true });
  }

  schedule({ country, date }) {
    return rp({ url: `${this.APIURL}schedule/?${qs({ country, date })}`, json: true });
  }

  getShow(showId, embed) {
    let extra = '';

    if (embed) {
      extra = `?${EMBED}${embed.join(`&${EMBED}`)}`;
    }

    return rp({ url: `${this.APIURL}shows/${showId}${extra}`, json: true });
  }

  getPeople(id, embed) {
    let extra = '';

    if (embed) {
      extra = `?${EMBED}${embed.join(`&${EMBED}`)}`;
    }

    return rp({ url: `${this.APIURL}people/${id}${extra}`, json: true });
  }

  getCastCredits(id, embed) {
    let extra = '';

    if (embed) {
      extra = `?${EMBED}${embed.join(`&${EMBED}`)}`;
    }

    return rp({ url: `${this.APIURL}people/${id}/castcredits${extra}`, json: true });
  }

  getCrewCredits(id, embed) {
    let extra = '';

    if (embed) {
      extra = `?${EMBED}${embed.join(`&${EMBED}`)}`;
    }

    return rp({ url: `${this.APIURL}people/${id}/crewcredits${extra}`, json: true });
  }

  getShowSeasons(showId) {
    return rp({ url: `${this.APIURL}shows/${showId}/seasons`, json: true });
  }

  getShowSeasonEpisodes(showId, season) {
    return rp({ url: `${this.APIURL}shows/${showId}/seasons/${season}/episodes`, json: true });
  }

  getShowSeasonEpisode(showId, season, number) {
    return rp({
      url: `${this.APIURL}shows/${showId}/episodebynumber/?season=${season}&number=${number}`,
      json: true,
    });
  }

  getEpisodes(showId) {
    return rp({ url: `${this.APIURL}shows/${showId}/episodes`, json: true });
  }

  getEpisodeById(episodeId) {
    return rp({ url: `${this.APIURL}episodes/${episodeId}`, json: true });
  }

  getCast(showId) {
    return rp({ url: `${this.APIURL}shows/${showId}/cast`, json: true });
  }

  getCrew(showId) {
    return rp({ url: `${this.APIURL}shows/${showId}/crew`, json: true });
  }

  getUpdates() {
    return rp({ url: `${this.APIURL}updates/shows`, json: true });
  }

  getPopulars(limit = 20) {
    return rp({ url: `${this.APIURL}shows`, json: true })
      .then(
        shows =>
          shows
            .sort(
              (a, b) => (b.weight + b.rating.average) - (a.weight + a.rating.average),
            )
            .slice(0, limit),
      );
  }
}

export default TVMaze;
