import {
  arrayToQueryString,
  objectToParamsArray,
  embedToArray,
  request,
  stripHTML,
} from './helpers';

const URL = 'http://api.tvmaze.com';

const searchShow = (name) => {
  const qs = arrayToQueryString(
    objectToParamsArray({ q: name }),
  );
  return request({ url: `${URL}/search/shows/?${qs}` });
};

const singleSearchShow = (name, embed) => {
  const qs = arrayToQueryString([
    ...objectToParamsArray({ q: name }),
    ...embedToArray(embed),
  ]);
  return request({ url: `${URL}/singlesearch/shows/?${qs}` });
};

const searchPeople = (name) => {
  const qs = arrayToQueryString(
    objectToParamsArray({ q: name }),
  );
  return request({ url: `${URL}/search/people/?${qs}` });
};

const lookupShow = (params) => {
  const qs = arrayToQueryString(
    objectToParamsArray(params),
  );
  return request({ url: `${URL}/lookup/shows/?${qs}` });
};

const schedule = ({ country, date }) => {
  const qs = arrayToQueryString(
    objectToParamsArray({ country, date }),
  );
  return request({ url: `${URL}/schedule/?${qs}` });
};

const getShow = (id, embed) => {
  const qs = arrayToQueryString([
    ...embedToArray(embed),
  ]);
  return request({ url: `${URL}/shows/${id}/?${qs}` });
};

const getPeople = (id, embed) => {
  const qs = arrayToQueryString([
    ...embedToArray(embed),
  ]);
  return request({ url: `${URL}/people/${id}/?${qs}` });
};

const getCastCredits = (id, embed) => {
  const qs = arrayToQueryString([
    ...embedToArray(embed),
  ]);
  return request({ url: `${URL}/people/${id}/castcredits/?${qs}` });
};

const getCrewCredits = (id, embed) => {
  const qs = arrayToQueryString([
    ...embedToArray(embed),
  ]);
  return request({ url: `${URL}/people/${id}/crewcredits/?${qs}` });
};

const getShowSeasons = id =>
  request({ url: `${URL}/shows/${id}/seasons` });

const getShowSeasonEpisodes = (id, season) =>
  request({ url: `${URL}/shows/${id}/seasons/${season}/episodes` });

const getShowSeasonEpisode = (id, season, number) => {
  const qs = arrayToQueryString(
    objectToParamsArray({ season, number }),
  );
  return request({ url: `${URL}/shows/${id}/episodebynumber/?${qs}` });
};

const getEpisodes = id =>
  request({ url: `${URL}/shows/${id}/episodes` });

const getEpisodeById = id =>
  request({ url: `${URL}/episodes/${id}` });

const getCast = id =>
  request({ url: `${URL}/shows/${id}/cast` });

const getCrew = id =>
  request({ url: `${URL}/shows/${id}/crew` });

const getUpdates = () =>
  request({ url: `${URL}/updates/shows` });

const getPopulars = (limit = 20) =>
  request({ url: `${URL}/shows` })
    .then(
      shows =>
        shows
          .sort(
            (a, b) => (b.weight + b.rating.average) - (a.weight + a.rating.average),
          )
          .slice(0, limit),
    );

export default {
  // Search
  searchShow,
  singleSearchShow,
  lookupShow,
  searchPeople,

  // Schedule
  schedule,

  // Shows
  getShow,
  getShowSeasons,
  getShowSeasonEpisode,
  getShowSeasonEpisodes,
  getEpisodes,
  getEpisodeById,

  // People
  getPeople,
  getCastCredits,
  getCrewCredits,
  getCast,
  getCrew,

  // Updates
  getUpdates,

  // Extra
  getPopulars,

  // Utils
  stripHTML,
};
